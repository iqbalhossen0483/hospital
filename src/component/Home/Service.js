import React from "react";
import { useNavigate } from "react-router";

const Service = (props) => {
  const navigate = useNavigate();
  const { _id, name, img, sortDescription } = props.service;

  const goSingleService = (id) => {
    navigate("/service/" + id);
  };
  return (
    <div className='service-item'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='overflow-hidden'>
          <img className='service-img' src={img} alt='' />
        </div>
        <div className='py-3 pr-2'>
          <h3 className='text-xl font-medium'>{name}</h3>
          <p className='text-justify text'>{sortDescription}</p>
          <div className='flex justify-center mt-2'>
            <button
              onClick={() => goSingleService(_id)}
              className='button rounded text-sm normal-case'
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
