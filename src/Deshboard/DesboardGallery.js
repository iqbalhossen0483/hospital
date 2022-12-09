import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const DesboardGallery = () => {
  const [gallery, setGallery] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://iqbal.diaryofmind.com/hospital/gallery")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);

  return (
    <table className='w-full'>
      <thead>
        <tr>
          <th>Image</th>
          <th>
            <button
              onClick={() => navigate("/desboard/add-gallery")}
              className='button'
            >
              Add+
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {gallery.map((img) => (
          <tr key={img._id}>
            <td className='p-0'>
              <img className='h-20 w-24' src={img.img} alt='' />
            </td>
            <td>
              <div className='flex justify-center'>
                <button className='button normal-case'>Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DesboardGallery;
