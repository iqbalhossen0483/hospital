import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const DesbordDoctors = () => {
  const [doctors, setDoctor] = useState([]);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/hospital/doctors")
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, [update]);

  const deleteDoctor = (id) => {
    const confirm = window.confirm("Are you sure to delete?");
    if (!confirm) return;
    setLoading(true);
    fetch(`http://localhost:5000/hospital/doctors?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("delete successfull");
          setUpdate((prev) => !prev);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <table className='w-full'>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>
            <button
              onClick={() => navigate("/desboard/add-doctor")}
              className='button'
            >
              Add+
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {doctors.map((doctor) => (
          <tr key={doctor._id}>
            <td className='p-0'>
              <img className='h-20 w-24' src={doctor.img} alt='' />
            </td>
            <td>{doctor.name}</td>
            <td>
              <div className='flex justify-center gap-2'>
                <Link
                  to={`/desboard/editdoctor/${doctor._id}`}
                  className='button normal-case'
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteDoctor(doctor._id)}
                  disabled={loading}
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

export default DesbordDoctors;
