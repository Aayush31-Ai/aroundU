
import React, { useEffect } from "react";

// Cache to prevent re-fetching
let cachedServices = null;
let cachePromise = null;

const useServices = () => {
  const [loading, setLoading] = React.useState(!cachedServices);
  const [services, setServices] = React.useState(cachedServices || []);

  useEffect(() => {
    if (cachedServices) {
      setServices(cachedServices);
      setLoading(false);
      return;
    }

    // If already fetching, wait for that promise
    if (cachePromise) {
      cachePromise.then((data) => {
        setServices(data);
        setLoading(false);
      }).catch((error) => {
        console.error("Error loading cached services:", error);
        setLoading(false);
      });
      return;
    }

    const getServices = async () => {
      try {
        cachePromise = Promise.all([
          import("../../services1.json"),
          import("../../services2.json"),
          import("../../services4.json"),
          import("../../services3.json"),
        ]).then(([s1, s2, s3, s4]) => {
          const combined = [
            ...s1.default,
            ...s4.default,
            ...s3.default,
            ...s2.default,
          ];
          return combined;
        });

        const combined = await cachePromise;
        
        cachedServices = combined;
        setServices(combined);
        setLoading(false);
      } catch (error) {
        console.error("Error loading services:", error);
        setLoading(false);
        cachePromise = null; // Reset on error so it can retry
      }
    };

    getServices();
  }, []);

  return { services, loading };
};

export default useServices;
