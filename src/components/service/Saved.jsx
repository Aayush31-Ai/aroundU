import React, { useEffect, useState } from "react";
import { Heart, Trash2 } from "lucide-react";
import { useNavigate } from "react-router";
import ServiceCard from "@/components/service/ServiceCard";

const STORAGE_KEY = "aroundu-saved-services";

const Saved = () => {
    const navigate = useNavigate();
    const [saved, setSaved] = useState([]);

    const loadSaved = () => {
        try {
            const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
            setSaved(parsed);
        } catch (err) {
            console.error("Error reading saved services:", err);
            setSaved([]);
        }
    };

    useEffect(() => {
        loadSaved();
    }, []);

    const removeOne = (providerId) => {
        const filtered = saved.filter((item) => item.providerId !== providerId);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
        setSaved(filtered);
    };

    const clearAll = () => {
        localStorage.removeItem(STORAGE_KEY);
        setSaved([]);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <p className="text-sm font-semibold text-[#2f5349] flex items-center gap-2">
                            <Heart className="w-4 h-4" /> Saved Services
                        </p>
                        <h1 className="text-3xl font-bold text-gray-900 mt-1">Your savelist</h1>
                        <p className="text-gray-600">{saved.length} saved item{saved.length === 1 ? "" : "s"}</p>
                    </div>
                    {saved.length > 0 && (
                        <button
                            onClick={clearAll}
                            className="flex items-center gap-2 text-sm font-semibold text-red-600 border border-red-200 px-4 py-2 rounded-lg hover:bg-red-50"
                        >
                            <Trash2 className="w-4 h-4" /> Clear all
                        </button>
                    )}
                </div>

                {saved.length === 0 ? (
                    <div className="bg-white border rounded-2xl p-10 text-center shadow-sm">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#2f5349]/10 text-[#2f5349]">
                            <Heart className="w-7 h-7" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">No saved services yet</h2>
                        <p className="text-gray-600 mt-2">Browse and save services to view them here.</p>
                        <button
                            onClick={() => navigate("/services")}
                            className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#2f5349] text-white font-semibold hover:bg-[#244038]"
                        >
                            Explore services
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {saved.map((service) => (
                            <div key={service.providerId} className="relative group">
                                <button
                                    onClick={() => removeOne(service.providerId)}
                                    className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-white/90 border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm hover:bg-white"
                                >
                                    <Trash2 className="w-4 h-4" /> Remove
                                </button>
                                <ServiceCard service={service} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Saved;