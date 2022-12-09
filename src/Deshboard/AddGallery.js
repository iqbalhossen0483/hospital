import React from "react";
import { useForm } from "react-hook-form";

const AddGallery = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (img) => {
    fetch("https://iqbal.diaryofmind.com/hospital/", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(img),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("An image added successfully");
          reset({ img: "" });
        }
      });
  };
  return (
    <div className='col-span-4 flex justify-center'>
      <form
        className='flex flex-col justify-center w-2/5 p-8 bg-white h-auto my-10 border rounded'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type='text'
          {...register("img")}
          placeholder='Enter img url'
          className='border rounded mt-2 px-3 py-1'
        />
        <div className='flex justify-center'>
          <input type='submit' className='mt-2 rounded button w-32' />
        </div>
      </form>
    </div>
  );
};

export default AddGallery;
