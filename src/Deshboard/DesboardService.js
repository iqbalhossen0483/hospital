import React from "react";
import { useNavigate } from "react-router";
import useData from "../component/Hooks/useData";
const DesboardService = () => {
  const { services, setService } = useData();
  const navigate = useNavigate();

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
    <table className='w-full'>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>
            <button
              onClick={() => navigate("/desboard/add-service")}
              className='button'
            >
              Add+
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {services.map((service) => (
          <tr key={service._id}>
            <td className='p-0'>
              <img className='h-20 w-24' src={service.img} alt='' />
            </td>
            <td>{service.name}</td>
            <td>
              <div className='flex justify-center gap-2'>
                <button className='button normal-case'>Edit</button>
                <button
                  onClick={() => deleteService(service._id)}
                  className='button normal-case'
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DesboardService;
