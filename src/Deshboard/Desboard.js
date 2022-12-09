import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import DesboardMenu from "./DeshboardMenu";

const Desboard = () => {
  const outlet = Outlet();
  return (
    <>
      <div className='bg-white shadow-2xl w-64 h-full fixed'>
        <DesboardMenu />
      </div>
      <div className='grid grid-cols-5'>
        <p></p>
        <div className='col-span-4 h-screen flex flex-col justify-between'>
          <div className='p-10'>
            {outlet !== null ? (
              <Outlet />
            ) : (
              <div className='flex justify-center items-center text-3xl'>
                <p>Deshboard</p>
              </div>
            )}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Desboard;
