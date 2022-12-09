import { useEffect } from "react";
import { useState } from "react";

const useData = () => {
  const [services, setService] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://iqbal.diaryofmind.com/hospital/services")
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
