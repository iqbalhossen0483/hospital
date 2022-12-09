import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const DesboardGallery = () => {
  const [gallery, setGallery] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://iqbal.diaryofmind.com/hospital/gallery")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);

  const goAddGallery = () => {
    navigate("/desboard/add-gallery");
  };
  return (
    <div className='col-span-4'>
      <div className='text-center my-3 grid grid-cols-3'>
        <p className='text-2xl col-span-2'>
          Available service: {gallery.length}
        </p>
        <button
          onClick={goAddGallery}
          className='border py-1 px-3 bg-blue-500 text-white rounded w-16 justify-self-end mr-3'
        >
          Add+
        </button>
      </div>
      {gallery.map((doctor) => (
        <div
          key={doctor._id}
          className='grid grid-cols-3 items-center bg-white my-3 rounded'
        >
          <img className='w-32 p-5' src={doctor.img} alt='' />
          <div className='text-right col-span-2 mr-3'>
            <button className='border py-1 px-3 bg-blue-500 text-white rounded'>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesboardGallery;
