import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleService from "./SingleService";

const ServiceDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`https://server.switchcafebd.com/hospital/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setIsLoading(false);
      });
  }, [id]);
  if (isLoading) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <div className='spinner'></div>
      </div>
    );
  }
  return <div>{service && <SingleService service={service} />}</div>;
};

export default ServiceDetails;
