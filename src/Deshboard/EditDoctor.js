import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const EditDoctors = () => {
  const { register, handleSubmit } = useForm();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return navigate("/desboard/doctor");
    fetch(`http://localhost:5000/hospital/doctors/${id}`)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw Error(data.message);
        setDoctor(data);
      })
      .catch(() => navigate("/desboard/doctor"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const onSubmit = (data) => {
    const peyload = {};
    Object.entries(data).forEach(([key, value]) => {
      if (value) peyload[key] = value;
    });
    if (!Object.keys(peyload).length) {
      return alert("No Chancges found");
    }
    setLoading(true);
    peyload.id = id;
    fetch("http://localhost:5000/hospital/doctors", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(peyload),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw data;
        if (data.modifiedCount) {
          alert("Updated successfully");
        } else Error("Unable to Update");
      })
      .catch((err) => alert(err.message))
      .finally(() => setLoading(false));
  };

  if (!doctor) return null;
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
            {...register("name")}
            defaultValue={doctor.name}
            placeholder='Enter doctor name'
          />
          <label>Name:</label>
        </div>
        <div className='input-wrapper'>
          <input
            type='text'
            {...register("img")}
            defaultValue={doctor.img}
            placeholder='Enter img url'
          />
          <label>Image</label>
        </div>
        <div className='input-wrapper'>
          <input
            type='text'
            {...register("department")}
            defaultValue={doctor.department}
            placeholder='Enter deparment'
          />
          <label>Department</label>
        </div>
        <div className='input-wrapper'>
          <input
            type='text'
            {...register("address")}
            defaultValue={doctor.address}
            placeholder='Enter address'
          />
          <label>Address</label>
        </div>
        <div className='input-wrapper'>
          <input
            type='number'
            {...register("phone")}
            defaultValue={doctor.phone}
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

export default EditDoctors;
