import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (service) => {
    setLoading(true);
    fetch("http://localhost:5000/hospital/services", {
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
          reset();
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  return (
    <div className='flex justify-center'>
      <form
        className='w-full p-8 pt-3 bg-white rounded space-y-3'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className='font-medium text-center'>Provide service details</h3>
        <div className='input-wrapper'>
          <input
            type='text'
            {...register("name", { required: true })}
            required
            placeholder='Enter service name'
          />
          <label>Name</label>
        </div>
        <div className='input-wrapper'>
          <input
            type='url'
            {...register("img", { required: true })}
            required
            placeholder='Enter img url'
          />
          <label>Image</label>
        </div>
        <div className='input-wrapper'>
          <textarea
            type='text'
            rows={5}
            {...register("sortDescription", { required: true })}
            required
            placeholder='Enter short description'
          />
          <label>Short Description</label>
        </div>
        <div className='input-wrapper'>
          <textarea
            type='text'
            rows={10}
            {...register("description", { required: true })}
            required
            placeholder='Enter description'
          />
          <label>Description</label>
        </div>

        <div className='flex justify-center'>
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

export default AddServices;
