import React from "react";
import { useForm } from "react-hook-form";

const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (service) => {
    fetch("https://iqbal.diaryofmind.com/hospital/services", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("A service added successfully");
          reset({ name: "", img: "", sortDescription: "", description: "" });
        }
      });
  };
  return (
    <div className='col-span-4 flex justify-center'>
      <form
        className='flex flex-col justify-center w-2/5 p-8 pt-3 bg-white h-auto border my-10 rounded'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className='text-2xl text-center'>Provide service details</h3>
        <input
          type='text'
          {...register("name")}
          placeholder='Enter service name'
          className='border rounded mt-2 px-3 py-1'
        />
        <input
          type='text'
          {...register("img")}
          placeholder='Enter img url'
          className='border rounded mt-2 px-3 py-1'
        />
        <textarea
          type='text'
          {...register("sortDescription")}
          placeholder='Enter sortDescription'
          className='border rounded mt-2 px-3 py-1'
        />
        <textarea
          type='text'
          {...register("description")}
          placeholder='Enter description'
          className='border rounded mt-2 px-3 py-1'
        />
        <div className='flex justify-center'>
          <input type='submit' className='mt-2 rounded button w-32' />
        </div>
      </form>
    </div>
  );
};

export default AddServices;
