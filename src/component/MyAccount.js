import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import useAuth from "./Hooks/useAuth";

const MyAccount = () => {
  const [appointment, setApointment] = useState([]);
  const { user } = useAuth();
  const alert = useAlert();
  useEffect(() => {
    fetch(`https://server.switchcafebd.com/hospital/appointment/${user.email}`)
      .then((res) => res.json())
      .then((data) => setApointment(data));
  }, [user]);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure to cencel?");
    if (confirm) {
      fetch(`https://server.switchcafebd.com/hospital/appointment/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert.show("Your appoinment Canceled");
            const remain = appointment.filter((app) => app._id !== id);
            setApointment(remain);
          }
        });
    }
  };
  return (
    <>
      <div className='min-h-[91vh] flex flex-col justify-between'>
        <div className='text-center mt-5'>
          <p>
            Welcome! <span className='font-medium'>{user.displayName}</span>
          </p>
          <p className='text-sm'>Your All Appointment</p>
          <div className='overflow-auto'>
            {!appointment.length > 0 ? (
              <div className='py-10 text-gray-500'>
                <p>You have no appoinment</p>
              </div>
            ) : (
              <table className='border mt-5 rounded-md w-5/6 mx-auto'>
                <thead>
                  <tr>
                    <th>Patient name</th>
                    <th>Doctor name</th>
                    <th>Department name</th>
                    <th>Visit Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {appointment.map((data) => (
                    <tr key={data._id}>
                      <td>{data.name}</td>
                      <td>{data.doctor}</td>
                      <td>{data.department}</td>
                      <td>{data.date}</td>
                      <td>
                        <div className='flex gap-1 items-center justify-center'>
                          <p className='text-green-500'>{data?.status}</p>
                          <button
                            onClick={() => handleDelete(data._id)}
                            className='button normal-case'
                          >
                            Cencel
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
