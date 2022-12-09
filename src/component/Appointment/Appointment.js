import React from "react";
import useTailwind from "../Hooks/useTailwind";

const Appointment = () => {
  const { input } = useTailwind();
  return (
    <div className='my-20 overflow-hidden mx-5 md:w-2/4 md:mx-auto lg:w-4/12 xl:w-1/4'>
      <h3 className='text-3xl font-semibold text-center mb-3'>
        Book an appointment
      </h3>
      <div
        className='w-full py-10 flex flex-col justify-center'
        style={{
          backgroundImage: 'URL("https://i.ibb.co/4VYh4Cz/05-min.png")',
        }}
      >
        <form>
          <input
            className={input}
            type='text'
            placeholder='Enter your full name'
          />
          <input className={input} type='number' placeholder='Phone number' />
          <input className={input} type='email' placeholder='Email address' />
          <input className={input} type='date' placeholder='dd/mm/yy' />
          <input
            className='block ml-4 mt-4 py-2 px-4 rounded'
            type='submit'
            value='submit'
          />
        </form>
      </div>
    </div>
  );
};

export default Appointment;
