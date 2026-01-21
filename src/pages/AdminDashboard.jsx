import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Briefcase,
  Star,
  TrendingUp,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import axios from "axios";
import AdminSidebar from "@/components/Admin/Sidebar";
import StatsCard from "@/components/Admin/StatsCard";
import {
  BarChartComponent,
  LineChartComponent,
  PieChartComponent,
} from "@/components/Admin/Charts";
import DataTable from "@/components/Admin/DataTable";
import ServiceVerification from "@/components/Admin/ServiceVerification";
import SEO from "@/components/Common/SEO";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [servicesRes] = await Promise.all([
        axios.get(`${API_BASE_URL}/services`),
      ]);

      let servicesList = servicesRes.data;
      if (servicesRes.data.services) {
        servicesList = servicesRes.data.services;
      }

      setServices(Array.isArray(servicesList) ? servicesList : []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  // Calculate statistics
  const totalProviders = services.length;
  const totalServices = services.reduce(
    (acc, s) => acc + (s.reviews?.length || 0),
    0
  );
  const avgRating =
    services.length > 0
      ? (
          services.reduce((acc, s) => acc + (s.rating || 0), 0) /
          services.length
        ).toFixed(2)
      : 0;
  const totalRevenue = services.reduce(
    (acc, s) => acc + (s.price || 0) * (s.reviews?.length || 0),
    0
  );

  // Chart Data
  const categoryData = {};
  services.forEach((s) => {
    const category = s.service?.category || "Other";
    categoryData[category] = (categoryData[category] || 0) + 1;
  });

  const categoryChartData = Object.entries(categoryData).map(([name, value]) => ({
    name,
    value,
  }));

  const ratingDistribution = [
    { name: "5 Star", value: services.filter((s) => s.rating >= 4.5).length },
    { name: "4 Star", value: services.filter((s) => s.rating >= 3.5 && s.rating < 4.5).length },
    { name: "3 Star", value: services.filter((s) => s.rating >= 2.5 && s.rating < 3.5).length },
    { name: "Below 3", value: services.filter((s) => s.rating < 2.5).length },
  ];

  const monthlyBookings = [
    { name: "Jan", value: Math.floor(Math.random() * 100) },
    { name: "Feb", value: Math.floor(Math.random() * 100) },
    { name: "Mar", value: Math.floor(Math.random() * 100) },
    { name: "Apr", value: Math.floor(Math.random() * 100) },
    { name: "May", value: Math.floor(Math.random() * 100) },
    { name: "Jun", value: Math.floor(Math.random() * 100) },
  ];

  // Table Data
  const providerColumns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "service", label: "Service",
      render: (value) => value?.title || "N/A" },
    { key: "rating", label: "Rating",
      render: (value) => (
        <span className={`px-2 py-1 rounded ${value >= 4 ? "bg-green-100 text-green-800" : value >= 3 ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}>
          ⭐ {value}
        </span>
      )},
    { key: "price", label: "Price",
      render: (value) => `₹${value?.toLocaleString() || 0}` },
  ];

  const serviceColumns = [
    { key: "serviceId", label: "Service ID",
      render: (value, row) => row.service?.serviceId || "N/A" },
    { key: "title", label: "Service",
      render: (value, row) => row.service?.title || "N/A" },
    { key: "category", label: "Category",
      render: (value, row) => row.service?.category || "N/A" },
    { key: "providers", label: "Providers",
      render: (value, row) => {
        const count = services.filter(
          (s) => s.service?.category === row.service?.category
        ).length;
        return count;
      }},
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO title="Admin Dashboard" description="Manage services and providers" />
      <div className="flex min-h-screen bg-gray-100">
        <AdminSidebar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onLogout={handleLogout}
        />

        {/* Main Content */}
        <div className="flex-1 md:ml-64 p-4 md:p-8 mt-12 md:mt-0">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Dashboard Overview
                </h2>
                <p className="text-gray-600">Welcome back! Here's your performance summary.</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatsCard
                  title="Total Providers"
                  value={totalProviders}
                  icon={Users}
                  bgColor="bg-blue-500"
                  trend="up"
                  trendValue="12"
                />
                <StatsCard
                  title="Total Bookings"
                  value={totalServices}
                  icon={Briefcase}
                  bgColor="bg-green-500"
                  trend="up"
                  trendValue="8"
                />
                <StatsCard
                  title="Avg Rating"
                  value={avgRating}
                  icon={Star}
                  bgColor="bg-amber-500"
                  trend="down"
                  trendValue="2"
                />
                <StatsCard
                  title="Total Revenue"
                  value={`₹${(totalRevenue / 1000).toFixed(0)}K`}
                  icon={DollarSign}
                  bgColor="bg-purple-500"
                  trend="up"
                  trendValue="15"
                />
              </div>

              {/* Charts Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <BarChartComponent
                  data={categoryChartData}
                  title="Services by Category"
                />
                <PieChartComponent
                  data={ratingDistribution}
                  title="Provider Rating Distribution"
                />
                <LineChartComponent
                  data={monthlyBookings}
                  title="Monthly Bookings"
                />
              </div>

              {/* Tables */}
              <div className="space-y-6">
                <DataTable
                  title="Top Providers"
                  columns={providerColumns}
                  data={services.slice(0, 10)}
                />
                <DataTable
                  title="Service Categories"
                  columns={serviceColumns}
                  data={Array.from(
                    { length: categoryChartData.length },
                    (_, i) => categoryChartData[i]
                  ).map((cat, idx) => ({
                    service: {
                      serviceId: `svc_${idx + 1}`,
                      title: cat.name,
                      category: cat.name,
                    },
                  }))}
                />
              </div>
            </div>
          )}

          {activeTab === "verification" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Service Verification</h2>
                <p className="text-gray-600 mt-2">Review and approve/reject service listings</p>
              </div>
              <ServiceVerification
                services={services}
                onUpdate={fetchData}
                API_BASE_URL={API_BASE_URL}
              />
            </div>
          )}

          {activeTab === "services" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Services Management</h2>
              <DataTable
                title="All Services"
                columns={[
                  { key: "id", label: "ID" },
                  { key: "name", label: "Provider" },
                  { key: "service", label: "Service",
                    render: (value) => value?.title || "N/A" },
                  { key: "price", label: "Price",
                    render: (value) => `₹${value}` },
                  { key: "rating", label: "Rating",
                    render: (value) => `⭐ ${value}` },
                ]}
                data={services}
              />
            </div>
          )}

          {activeTab === "providers" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Providers Management</h2>
              <DataTable
                title="All Providers"
                columns={providerColumns}
                data={services}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
