import React from "react";

const SingleService = (props) => {
  const { name, img, description } = props.service;
  return (
    <div className='mt-10 w-3/4 mx-auto bg-white rounded'>
      <img
        className='w-full rounded-t h-[400px] object-cover'
        src={img}
        alt=''
      />
      <p className='text-center text-xl font-medium my-4'>{name}</p>
      <p className='text-justify px-6 pb-6'>{description}</p>
    </div>
  );
};

export default SingleService;
