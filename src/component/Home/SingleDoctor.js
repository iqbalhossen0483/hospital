import React, { useState } from "react";

const SingleDoctor = (props) => {
  const [show, setShow] = useState("");
  const { name, img, department, address, phone, _id } = props.doctor;

  return (
    <div className='doctor-wrapper'>
      <div className='flex justify-center'>
        <img className='h-56' src={img} alt='' />
      </div>
      <p
        onMouseEnter={() => setShow(_id)}
        onMouseOut={() => setShow("")}
        className='doctor-name'
      >
        {name}
      </p>
      <div className={`doctor-details ${show === _id ? "flex" : "hidden"}`}>
        <p>
          {department} <br />
          {address} <br />
          Hot Line: 10615, {phone}
        </p>
      </div>
    </div>
  );
};

export default SingleDoctor;
