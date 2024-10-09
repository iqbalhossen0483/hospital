import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddGallery = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    fetch("https://server.switchcafebd.com/hospital/gallery", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("An image added successfully");
          reset();
        }
      })
      .catch((err) => alert(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className='flex justify-center'>
      <form
        className='w-full md:w-2/5 p-8 bg-white border rounded space-y-3'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type='url'
          {...register("img", { required: true })}
          required
          placeholder='Enter img url'
        />
        <select {...register("size")}>
          <option value=''>Select</option>
          <option value='row'>Row</option>
          <option value='col'>Col</option>
        </select>
        <div className='flex justify-center mt-7'>
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

export default AddGallery;
