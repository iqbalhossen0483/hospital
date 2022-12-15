import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const DesboardGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://myserver-production-ddf8.up.railway.app/hospital/gallery")
      .then((res) => res.json())
      .then((data) => setGallery(data))
      .catch((err) => console.log(err));
  }, [update]);

  const deleteImage = (id) => {
    const confirm = window.confirm("Are you sure to delete?");
    if (!confirm) return;
    setLoading(true);
    fetch(
      `https://myserver-production-ddf8.up.railway.app/hospital/gallery?id=${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("An image Deleted successfully");
          setUpdate((prev) => !prev);
        }
      })
      .catch((err) => alert(err.message))
      .finally(() => setLoading(false));
  };

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
                <button
                  disabled={loading}
                  onClick={() => deleteImage(img._id)}
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

export default DesboardGallery;
