import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const EditServices = () => {
  const { register, handleSubmit } = useForm();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return navigate("/desboard/service");
    fetch(`http://localhost:5000/hospital/services/${id}`)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw Error(data.message);
        setService(data);
      })
      .catch(() => navigate("/desboard/service"));
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
    fetch("http://localhost:5000/hospital/services", {
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

  if (!service) return null;
  return (
    <div className='flex justify-center'>
      <form
        className='w-full p-8 pt-3 bg-white rounded space-y-3'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className='font-medium text-center'>Update service details</h3>
        <div className='input-wrapper'>
          <input
            type='text'
            {...register("name")}
            defaultValue={service.name}
            placeholder='Enter service name'
          />
          <label>Name</label>
        </div>
        <div className='input-wrapper'>
          <input
            type='url'
            {...register("img")}
            defaultValue={service.img}
            placeholder='Enter img url'
          />
          <label>Image</label>
        </div>
        <div className='input-wrapper'>
          <textarea
            type='text'
            rows={5}
            {...register("sortDescription")}
            defaultValue={service.sortDescription}
            placeholder='Enter short description'
          />
          <label>Short Description</label>
        </div>
        <div className='input-wrapper'>
          <textarea
            type='text'
            {...register("description")}
            rows={10}
            defaultValue={service.description}
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

export default EditServices;
