import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import DesboardMenu from "./DeshboardMenu";

const Desboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/admin") navigate("/admin/service");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <div className='flex gap-5'>
      <div className='bg-white shadow min-h-[67vh] w-[50px] md:w-[200px]'>
        <DesboardMenu />
      </div>
      <div className='py-5 md:p-5 w-full'>
        <Outlet />
      </div>
    </div>
  );
};

export default Desboard;
