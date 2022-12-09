import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const DesbordDoctors = () => {
  const [doctors, setDoctor] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://iqbal.diaryofmind.com/hospital/doctors")
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, []);
  const goAddDoctor = () => {
    navigate("/desboard/add-doctor");
  };
  return (
    <div className='col-span-4'>
      <div className='text-center my-3 grid grid-cols-3'>
        <p className='text-2xl col-span-2'>
          Available service: {doctors.length}
        </p>
        <button
          onClick={goAddDoctor}
          className='border py-1 px-3 bg-blue-500 text-white rounded w-16 justify-self-end mr-3'
        >
          Add+
        </button>
      </div>
      {doctors.map((doctor) => (
        <div
          key={doctor._id}
          className='grid grid-cols-3 items-center bg-white my-3 rounded'
        >
          <img className='w-32 p-5' src={doctor.img} alt='' />
          <p className='text-xl'>{doctor.name}</p>
          <div className='text-right mr-3'>
            <button className='border py-1 px-3 bg-blue-500 text-white rounded'>
              Edit
            </button>
            <button className='border py-1 px-3 bg-blue-500 text-white rounded'>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesbordDoctors;
