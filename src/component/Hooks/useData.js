import { useEffect, useState } from "react";

const useData = () => {
  const [services, setService] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://server.switchcafebd.com/hospital/services")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);
  return { services, setService, isLoading };
};

export default useData;
