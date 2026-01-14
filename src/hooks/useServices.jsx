
import React, { useEffect } from "react";

const useServices = () => {
  const [loading, setLoading] = React.useState(true);
  const [services, setServices] = React.useState([]);
  useEffect(() => {
    const getServices = async () => {
      const [s1, s2, s3, s4] = await Promise.all([
        import("../../services1.json"),
        import("../../services2.json"),
        import("../../services4.json"),
        import("../../services3.json"),
      ]);

      const combined = [
        ...s1.default,
        ...s4.default,
        ...s3.default,
        ...s2.default,
      ];

      setServices(combined);
      setLoading(false);
    };
    getServices();
  }, []);

  return {services, loading};
};

export default useServices;
