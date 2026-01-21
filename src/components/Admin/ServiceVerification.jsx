import React, { useState } from "react";
import { CheckCircle, XCircle, Flag, Search, Filter, X } from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";

const ServiceVerification = ({ services, onUpdate, API_BASE_URL }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState(null);
  const [rejectionReason, setRejectionReason] = useState("");
  const [flagIssue, setFlagIssue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.service?.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      service.status === statusFilter ||
      (statusFilter === "flagged" && service.flaggedIssues?.length > 0);
    return matchesSearch && matchesStatus;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedServices = filteredServices.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAction = async (service, type) => {
    setSelectedService(service);
    setActionType(type);
    setRejectionReason("");
    setFlagIssue("");
    setShowModal(true);
  };

  const handleApprove = async () => {
    try {
      const updatedService = {
        ...selectedService,
        status: "approved",
      };

      await axios.put(
        `${API_BASE_URL}/services/${selectedService.id}`,
        updatedService
      );

      onUpdate();
      toast.success("✓ Service approved successfully!");
      setShowModal(false);
    } catch (error) {
      console.error("Error approving service:", error);
      toast.error("Failed to approve service");
    }
  };

  const handleReject = async () => {
    if (!rejectionReason.trim()) {
      toast.error("Please provide a rejection reason");
      return;
    }

    try {
      const updatedService = {
        ...selectedService,
        status: "rejected",
        rejectionReason,
      };

      await axios.put(
        `${API_BASE_URL}/services/${selectedService.id}`,
        updatedService
      );

      onUpdate();
      toast.success("✓ Service rejected successfully!");
      setShowModal(false);
    } catch (error) {
      console.error("Error rejecting service:", error);
      toast.error("Failed to reject service");
    }
  };

  const handleRemove = async () => {
    if (!window.confirm("Are you sure you want to remove this listing?")) {
      return;
    }

    try {
      await axios.delete(`${API_BASE_URL}/services/${selectedService.id}`);

      onUpdate();
      toast.success("✓ Listing removed successfully!");
      setShowModal(false);
    } catch (error) {
      console.error("Error removing service:", error);
      toast.error("Failed to remove listing");
    }
  };

  const handleVerify = async () => {
    try {
      const updatedService = {
        ...selectedService,
        verified: true,
      };

      await axios.put(
        `${API_BASE_URL}/services/${selectedService.id}`,
        updatedService
      );

      onUpdate();
      toast.success("✓ Service marked as verified!");
      setShowModal(false);
    } catch (error) {
      console.error("Error verifying service:", error);
      toast.error("Failed to verify service");
    }
  };

  const handleFlag = async () => {
    if (!flagIssue.trim()) {
      toast.error("Please describe the issue");
      return;
    }

    try {
      const updatedService = {
        ...selectedService,
        flaggedIssues: [
          ...(selectedService.flaggedIssues || []),
          {
            issue: flagIssue,
            date: new Date().toISOString(),
            resolved: false,
          },
        ],
      };

      await axios.put(
        `${API_BASE_URL}/services/${selectedService.id}`,
        updatedService
      );

      onUpdate();
      toast.success("✓ Issue flagged successfully!");
      setShowModal(false);
    } catch (error) {
      console.error("Error flagging service:", error);
      toast.error("Failed to flag issue");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by provider name or service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="flagged">Flagged</option>
          </select>
        </div>
      </div>

      {/* Services Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-bold">Service Verification</h3>
          <p className="text-sm text-gray-500 mt-1">
            {filteredServices.length} services found | Showing {startIndex + 1}-{Math.min(endIndex, filteredServices.length)} of {filteredServices.length}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Provider
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Verified
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Issues
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedServices.length > 0 ? (
                paginatedServices.map((service, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-200 hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div className="flex items-center gap-3">
                        <img
                          src={service.profileImage}
                          alt={service.name}
                          className="w-8 h-8 rounded-full"
                        />
                        {service.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {service.service?.title || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {service.service?.category || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          service.status
                        )}`}
                      >
                        {service.status?.charAt(0).toUpperCase() +
                          service.status?.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {service.verified ? (
                        <span className="inline-flex items-center gap-1 text-green-600 font-medium">
                          <CheckCircle className="w-4 h-4" />
                          Yes
                        </span>
                      ) : (
                        <span className="text-gray-500">No</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {service.flaggedIssues?.length > 0 ? (
                        <span className="inline-flex items-center gap-1 text-red-600 font-medium">
                          <Flag className="w-4 h-4" />
                          {service.flaggedIssues.length}
                        </span>
                      ) : (
                        <span className="text-gray-500">None</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex flex-wrap gap-2">
                        {service.status !== "approved" && (
                          <button
                            onClick={() => {
                              setSelectedService(service);
                              setActionType("approve");
                              setShowModal(true);
                            }}
                            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition text-xs font-medium"
                          >
                            ✓ Approve
                          </button>
                        )}
                        {service.status !== "rejected" && (
                          <button
                            onClick={() => handleAction(service, "reject")}
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-xs font-medium"
                          >
                            ✕ Reject
                          </button>
                        )}
                        {!service.verified && service.status === "approved" && (
                          <button
                            onClick={() => {
                              setSelectedService(service);
                              setActionType("verify");
                              setShowModal(true);
                            }}
                            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-xs font-medium"
                          >
                            ✔ Verify
                          </button>
                        )}
                        <button
                          onClick={() => handleAction(service, "flag")}
                          className="px-3 py-1 bg-amber-500 text-white rounded hover:bg-amber-600 transition text-xs font-medium"
                        >
                          🚩 Flag
                        </button>
                        <button
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure you want to remove this listing?"
                              )
                            ) {
                              setSelectedService(service);
                              setActionType("remove");
                              handleRemove();
                            }
                          }}
                          className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition text-xs font-medium"
                        >
                          🗑 Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-6 py-8 text-center text-gray-500">
                    No services found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        {filteredServices.length > itemsPerPage && (
          <div className="flex justify-between items-center mt-6 px-6">
            {/* Items per page selector */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">Show</span>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
              <span className="text-sm text-gray-700">per page</span>
            </div>

            {/* Page navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition text-sm font-medium text-gray-700"
              >
                Previous
              </button>

              {/* Page numbers */}
              <div className="flex gap-1">
                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  // Show first page, last page, current page, and pages around current
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
                          currentPage === page
                            ? "bg-blue-600 text-white"
                            : "border border-gray-300 hover:bg-gray-50 text-gray-700"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return (
                      <span key={page} className="px-2 py-1 text-gray-500">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition text-sm font-medium text-gray-700"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">
                {actionType === "approve" && "Approve Service"}
                {actionType === "reject" && "Reject Service"}
                {actionType === "verify" && "Verify Service"}
                {actionType === "flag" && "Flag Issue"}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Provider:</p>
                <p className="font-semibold">{selectedService.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Service:</p>
                <p className="font-semibold">
                  {selectedService.service?.title}
                </p>
              </div>
            </div>

            {actionType === "reject" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rejection Reason *
                </label>
                <textarea
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows="3"
                  placeholder="Explain why this service is being rejected..."
                />
              </div>
            )}

            {actionType === "flag" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Issue Description *
                </label>
                <textarea
                  value={flagIssue}
                  onChange={(e) => setFlagIssue(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows="3"
                  placeholder="Describe the issue with this listing..."
                />
              </div>
            )}

            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium text-gray-700"
              >
                Cancel
              </button>

              {actionType === "approve" && (
                <button
                  onClick={handleApprove}
                  className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium"
                >
                  Approve
                </button>
              )}

              {actionType === "reject" && (
                <button
                  onClick={handleReject}
                  className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-medium"
                >
                  Reject
                </button>
              )}

              {actionType === "verify" && (
                <button
                  onClick={handleVerify}
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium"
                >
                  Verify
                </button>
              )}

              {actionType === "flag" && (
                <button
                  onClick={handleFlag}
                  className="flex-1 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition font-medium"
                >
                  Flag Issue
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceVerification;
