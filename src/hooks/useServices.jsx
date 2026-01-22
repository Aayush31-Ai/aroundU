
import React, { useEffect } from "react";
import axios from "axios";

// Cache to prevent duplicate network calls
let cachedServices = null;
let cachePromise = null;

const API_BASE_URL = (
  import.meta.env.VITE_API_URL ||
  import.meta.env.API_URL ||
  "http://localhost:3000"
).replace(/\/+$/, "");
const SERVICES_ENDPOINT = `${API_BASE_URL}/services`;

const normalizeServices = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (payload && Array.isArray(payload.services)) return payload.services;
  return [];
};

const useServices = () => {
  const [loading, setLoading] = React.useState(!cachedServices);
  const [services, setServices] = React.useState(cachedServices || []);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    if (cachedServices) {
      setServices(cachedServices);
      setLoading(false);
      return;
    }

    // If already fetching, wait for that promise
    if (cachePromise) {
      cachePromise
        .then((data) => {
          setServices(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error loading cached services:", err);
          setError(err);
          setLoading(false);
        });
      return;
    }

    const getServices = async () => {
      try {
        cachePromise = axios
          .get(SERVICES_ENDPOINT)
          .then((res) => normalizeServices(res.data))
          .then((list) => list.map((item) => ({ savelist: false, ...item })));

        const combined = await cachePromise;
        cachedServices = combined;
        setServices(combined);
        setLoading(false);
      } catch (err) {
        console.error("Error loading services:", err);
        setError(err);
        setLoading(false);
        cachePromise = null; // Reset on error so it can retry
      }
    };

    getServices();
  }, []);

  const refetch = async () => {
    cachedServices = null;
    cachePromise = null;
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(SERVICES_ENDPOINT);
      const normalized = normalizeServices(res.data).map((item) => ({
        savelist: false,
        ...item,
      }));
      cachedServices = normalized;
      setServices(normalized);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { services, loading, error, refetch };
};

export default useServices;