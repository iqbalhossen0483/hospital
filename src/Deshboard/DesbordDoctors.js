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

  return (
    <table className='w-full'>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>
            <button
              onClick={() => navigate("/desboard/add-doctor")}
              className='button'
            >
              Add+
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {doctors.map((doctor) => (
          <tr key={doctor._id}>
            <td className='p-0'>
              <img className='h-20 w-24' src={doctor.img} alt='' />
            </td>
            <td>{doctor.name}</td>
            <td>
              <div className='flex justify-center gap-2'>
                <button className='button normal-case'>Edit</button>
                <button className='button normal-case'>Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DesbordDoctors;
