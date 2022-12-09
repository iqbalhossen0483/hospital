import React from "react";
import { useForm } from "react-hook-form";

const AddDoctors = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (doctor) => {
    fetch("https://iqbal.diaryofmind.com/hospital/", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(doctor),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("A doctors added successfully");
          reset();
        }
      });
  };

  return (
    <div className='col-span-4 flex justify-center'>
      <form
        className='flex flex-col justify-center border w-2/5 p-8 bg-white h-auto my-10 rounded'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className='text-2xl text-center'>Provide doctors details</h3>
        <input
          type='text'
          {...register("name")}
          placeholder='Enter doctor name'
          className='border rounded mt-2 px-3 py-1'
        />
        <input
          type='text'
          {...register("img")}
          placeholder='Enter img url'
          className='border rounded mt-2 px-3 py-1'
        />
        <input
          type='text'
          {...register("department")}
          placeholder='Enter deparment'
          className='border rounded mt-2 px-3 py-1'
        />
        <input
          type='text'
          {...register("address")}
          placeholder='Enter address'
          className='border rounded mt-2 px-3 py-1'
        />
        <input
          type='number'
          {...register("phone")}
          placeholder='Enter number'
          className='border rounded mt-2 px-3 py-1'
        />
        <div className='flex justify-center'>
          <input type='submit' className='mt-2 rounded button w-32' />
        </div>
      </form>
    </div>
  );
};

export default AddDoctors;
