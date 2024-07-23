import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import config from "../../../config";
import { toast } from "react-toastify";
import "./UpdateForm.css";

const { BASE_API_URL } = config;

function UpdateForm({ details, userInfo, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { rating, description, images, numberOfDepartments, numberOfDoctors } =
    details;
  const [newRating, setNewRating] = useState(rating);
  const [newDescription, setNewDescription] = useState(description);
  const [newImages, setNewImages] = useState(images);
  const [newNumberOfDepartments, setNewNumberOfDepartments] =
    useState(numberOfDepartments);
  const [newNumberOfDoctors, setNewNumberOfDoctors] = useState(numberOfDoctors);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${BASE_API_URL}/hospitals/update?id=${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
      body: JSON.stringify({
        rating: newRating,
        description: newDescription,
        images: newImages,
        numberOfDepartments: newNumberOfDepartments,
        numberOfDoctors: newNumberOfDoctors,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Hospital Details Successfully updated!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          onUpdate(data.data);
          navigate("../");
          console.log(`${id}`)
        } else {
          console.log(data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    fetch(`${BASE_API_URL}/hospitals/delete?id=${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          navigate("/");
        } else {
          console.log(data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="update-form">
      <h1>Update Hospital Data</h1>
      <form className="update" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            name="rating"
            value={newRating}
            onChange={(e) => setNewRating(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows={7}
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="images">Images</label>
          <textarea
            name="images"
            rows={7}
            value={newImages}
            onChange={(e) => setNewImages(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="numberOfDepartments">Number of Departments</label>
          <input
            type="number"
            name="numberOfDepartments"
            value={newNumberOfDepartments}
            onChange={(e) =>
              setNewNumberOfDepartments(parseInt(e.target.value, 10))
            }
          />
        </div>
        <div>
          <label htmlFor="numberOfDoctors">Number of Doctors</label>
          <input
            type="number"
            name="numberOfDoctors"
            value={newNumberOfDoctors}
            onChange={(e) =>
              setNewNumberOfDoctors(parseInt(e.target.value, 10))
            }
          />
        </div>
        <button type="submit" className="update" onClick={onUpdate}>
          Update
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </form>
    </div>
  );
}

export default UpdateForm;
