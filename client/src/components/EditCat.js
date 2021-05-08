import React, { useState, useEffect } from "react";
import axios from "axios";
import FormCat from "./SharedComopnent/FormCat";

const EditCat = ({ cat, setCat, setUpdating }) => {
  console.log(cat._id);

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };

    const editedCat = Object.assign(cat, updatedField);

    setCat(editedCat);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      url: `http://localhost:5000/api/cats/${cat._id}`,
      method: "PUT",
      data: cat,
    })
      .then((res) => {
        console.log(res);
        setUpdating(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <FormCat
        cat={cat}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditCat;
