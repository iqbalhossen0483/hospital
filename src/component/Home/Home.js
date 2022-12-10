import React, { useEffect, useState } from "react";
import useData from "../Hooks/useData";
import Banner from "./Banner";
import DoctorTeam from "./DoctorTeam";
import Service from "./Service";

const Home = () => {
  const { services, isLoading } = useData();
  const [gallery, setgallery] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/hospital/gallery")
      .then((res) => res.json())
      .then((data) => setgallery(data))
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <div className='spinner'></div>
      </div>
    );
  }
  return (
    <div className='relative'>
      <Banner />
      <div className='mt-10'>
        <h2 className='text-2xl font-medium mb-5 ml-5'>Our Services</h2>
        <div className='space-y-5 lg:space-y-0 lg:grid grid-cols-2 gap-4 px-4'>
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
      <DoctorTeam />
      <div className='mt-16 px-4 mb-10'>
        <h2 className='text-2xl font-medium mb-5 ml-5'>Gallery</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 grid-flow-dense'>
          {gallery.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden ${
                img.size === "row"
                  ? "row-span-2"
                  : img.size === "col"
                  ? "col-span-2 h-44 w-full"
                  : ""
              }`}
            >
              <img
                className='h-full w-full service-img rounded-none'
                src={img.img}
                alt=''
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
