import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddGallery = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (img) => {
    setLoading(true);
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
          reset();
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  return (
    <div className='flex justify-center'>
      <form
        className='w-full md:w-2/5 p-8 bg-white border rounded'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type='text'
          {...register("img", { required: true })}
          required
          placeholder='Enter img url'
        />
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
