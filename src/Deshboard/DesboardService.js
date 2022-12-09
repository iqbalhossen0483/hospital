import React from "react";
import { useNavigate } from "react-router";
import useData from "../component/Hooks/useData";
const DesboardService = () => {
  const { services, setService } = useData();
  const navigate = useNavigate();
  const goAddService = () => {
    navigate("/desboard/add-service");
  };

  const deleteService = (id) => {
    fetch(`https://iqbal.diaryofmind.com/hospital/services/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("delete successfull");
          const remain = services.filter((service) => service._id !== id);
          setService(remain);
        }
      });
  };
  return (
    <div className='col-span-4'>
      <div className='text-center my-3 grid grid-cols-3'>
        <p className='text-2xl col-span-2'>
          Available service: {services.length}
        </p>
        <button
          onClick={goAddService}
          className='border py-1 px-3 bg-blue-500 text-white rounded w-16 justify-self-end mr-3'
        >
          Add+
        </button>
      </div>
      {services.map((service) => (
        <div
          key={service._id}
          className='grid grid-cols-3 items-center bg-white my-3 rounded'
        >
          <img className='w-32 p-5' src={service.img} alt='' />
          <p className='text-xl'>{service.name}</p>
          <div className='text-right mr-3'>
            <button className='border py-1 px-3 bg-blue-500 text-white rounded'>
              Edit
            </button>
            <button
              onClick={() => deleteService(service._id)}
              className='border py-1 px-3 bg-blue-500 text-white rounded'
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesboardService;
