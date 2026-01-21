import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ProviderProfile from "../components/ServiceProvider/ProviderProfile";
import Loader from "../components/Loader/Loader";

const ProviderDetailPage = () => {
  const { providerId } = useParams();
  const navigate = useNavigate();
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

  useEffect(() => {
    fetchProviderDetails();
  }, [providerId]);

  const fetchProviderDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_BASE_URL}/providers/${providerId}`);
      
      if (!response.ok) {
        throw new Error("Provider not found");
      }
      
      const data = await response.json();
      setProvider(data);
    } catch (err) {
      console.error("Error fetching provider:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Provider Not Found
          </h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back 
          </button>
        </div>
      </div>

      {/* Provider Content */}
      {provider && <ProviderProfile provider={provider} />}
    </div>
  );
};

export default ProviderDetailPage;
