import React from "react";
import { NavLink } from "react-router-dom";

const DesboardMenu = () => {
  return (
    <div className='desboard-menu-wrapper'>
      <div className='space-y-2'>
        <NavLink to='/desboard/service'>
          <i className='fas fa-truck' />
          <span>Service</span>
        </NavLink>
        <NavLink to='/desboard/doctor'>
          <i className='fas fa-user' />
          <span>Doctor</span>
        </NavLink>
        <NavLink to='/desboard/gallery'>
          <i className='fas fa-images' />
          <span>Gallery</span>
        </NavLink>
      </div>
    </div>
  );
};

export default DesboardMenu;
