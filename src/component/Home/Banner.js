import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import Header from "../Header/Header";
import useAuth from "../Hooks/useAuth";
import useTailwind from "../Hooks/useTailwind";

const Banner = () => {
  const [disable, setdisable] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [sticy, setSticky] = useState(false);
  const { input } = useTailwind();
  const { user } = useAuth();
  const alert = useAlert();

  const onSubmit = (appoitment) => {
    setdisable(true);
    if (appoitment.doctor === "null") {
      alert.show("Choose a doctor");
    } else if (appoitment.department === "null") {
      alert.show("Choose a department");
    } else if (!user.email) {
      alert.show("Please Log in first");
    } else {
      appoitment.email = user.email;
      appoitment.status = "pending";
      fetch("https://server.switchcafebd.com/hospital/appointment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(appoitment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            alert.show("Your appointment sent successfully");
            reset();
          }
        });
    }
    setdisable(false);
  };

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 40) setSticky(true);
        else setSticky(false);
      },
      true
    );
  }, []);

  return (
    <>
      <div className='fixed top-0 w-full z-50'>
        <Header
          className={
            sticy ? "shadow-md bg-white" : "bg-transparent shadow-none"
          }
        />
      </div>
      <div className='grid grid-cols-4'>
        <div
          style={{
            backgroundImage: "url('/bg.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className='bg-gray-50 text-center col-span-4 lg:col-span-3 relative'
        >
          <div className='grid grid-cols-3 -z-50'>
            <div className='py-24 lg:py-44 col-span-3 lg:col-span-2 px-2 lg:px-10'>
              <h1 className='text-3xl font-medium mb-2'>
                Your new smile start here
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet, similique. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Mollitia, esse consectetur expedita
                dignissimos amet officia soluta praesentium temporibus est
                inventore et delectus ut, molestias asperiores quia voluptate
                obcaecati quas error.
              </p>
              <div className='flex justify-center mt-7'>
                <button className='button'>Check more</button>
                <button className='button ml-3'>Find doctors</button>
              </div>
            </div>
            <p></p>
          </div>
        </div>
        <div className='hidden lg:block h-full bg-gray-500'></div>

        <div className='hidden lg:block absolute top-24 right-36'>
          <img className='w-[26rem]' src='/chair.png' alt='' />
        </div>
      </div>

      <div className='flex justify-center -mt-20'>
        <div className='appointment-form'>
          <div className='heading'>
            <i className='fas fa-calendar-check icon'></i>
            <p className='text-gray-50'>Make an Appointment</p>
          </div>
          <div className='col-span-3 w-full py-4 md:py-0 md:mt-0 px-10'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col md:grid grid-cols-3 gap-5'
            >
              <div>
                <input
                  className={input + " w-full mb-2"}
                  {...register("name", { required: true })}
                  required
                  placeholder='Patient name'
                />
                <select
                  className={input + " w-full"}
                  {...register("doctor", { required: true })}
                  required
                >
                  <option value=''>Select Doctor</option>
                  <option value='Alexendor'>Alexendor</option>
                  <option value='Rofoqul Islam'>Rofoqul Islam</option>
                  <option value='Habibullah Kayser'>Habibullah Kayser</option>
                </select>
              </div>
              <div>
                <select
                  className={input + " w-full mb-2"}
                  {...register("department", { required: true })}
                  required
                >
                  <option value=''>Select Department</option>
                  <option value='Cardiology'>Cardiology</option>
                  <option value='Palmonology'>Palmonology</option>
                  <option value='Gynecologyi'>Gynecologyi</option>
                  <option value='Neurology'>Neurology</option>
                </select>
                <input
                  className={input + " w-full"}
                  type='date'
                  {...register("date", { required: true })}
                  required
                  placeholder='Pick a Date'
                />
              </div>
              <div className='flex items-center justify-center'>
                <button
                  disabled={disable}
                  className='button px-3 bg-primary md:h-24 w-24 md:w-10'
                  type='submit'
                >
                  <i className='fa fa-paper-plane icon' aria-hidden='true'></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
