import React, { useEffect, useState } from "react";
import SingleDoctor from "./SingleDoctor";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const DoctorTeam = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/hospital/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.log(err));
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div id='doctors' className='mt-20 scroll-mt-20'>
      <h3 className='text-2xl font-medium mb-5 ml-5'>Our Doctors Team</h3>
      <Carousel infinite autoPlay responsive={responsive}>
        {doctors.map((doctor) => (
          <SingleDoctor key={doctor._id} doctor={doctor}></SingleDoctor>
        ))}
      </Carousel>
    </div>
  );
};

export default DoctorTeam;
