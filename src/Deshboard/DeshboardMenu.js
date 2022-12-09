import React from "react";
import { NavLink } from "react-router-dom";

const DesboardMenu = () => {
  return (
    <div className='font-medium p-5 fixed top-14 left-3'>
      <div className='space-y-2'>
        <NavLink to='/desboard/service' className='hover:underline block'>
          Service
        </NavLink>
        <NavLink to='/desboard/doctor' className='hover:underline block'>
          Doctor
        </NavLink>
        <NavLink to='/desboard/gallery' className='hover:underline block'>
          Gallery
        </NavLink>
      </div>
    </div>
  );
};

export default DesboardMenu;
