import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddDoctors = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (doctor) => {
    setLoading(true);
    fetch("https://server.switchcafebd.com/hospital/doctors", {
      method: "POST",
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
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className='flex justify-center'>
      <form
        className='w-full md:w-2/5 p-8 pt-3 bg-white rounded space-y-3'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className='font-medium text-center'>Provide doctors details</h3>
        <div className='input-wrapper'>
          <input
            type='text'
            {...register("name", { required: true })}
            required
            placeholder='Enter doctor name'
          />
          <label>Name:</label>
        </div>
        <div className='input-wrapper'>
          <input
            type='text'
            {...register("img", { required: true })}
            required
            placeholder='Enter img url'
          />
          <label>Image</label>
        </div>
        <div className='input-wrapper'>
          <input
            type='text'
            {...register("department", { required: true })}
            required
            placeholder='Enter deparment'
          />
          <label>Department</label>
        </div>
        <div className='input-wrapper'>
          <input
            type='text'
            {...register("address")}
            placeholder='Enter address'
          />
          <label>Address</label>
        </div>
        <div className='input-wrapper'>
          <input
            type='number'
            {...register("phone")}
            placeholder='Enter number'
          />
          <label>Phone</label>
        </div>
        <div className='flex justify-center mt-5'>
          <button
            disabled={loading}
            type='submit'
            className='button bg-primary'
          >
            {loading ? "Loading..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctors;
