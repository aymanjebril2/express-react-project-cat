import { useState } from "react";
import axios from "axios";
import FormCat from "./SharedComopnent/FormCat";

const CreateCat = ({ setCreateNewCat }) => {
  const [cat, setCat] = useState({
    name: "",
    chonkyness: "",
    imagelink: "",
    biography: "",
  });

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };

    const editedCat = Object.assign(cat, updatedField);

    setCat(editedCat);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios({
      url: `http://localhost:5000/api/cats`,
      method: "POST",
      data: cat,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setCat({
      name: "",
      chonkyness: "",
      imagelink: "",
      biography: "",
    });
    setCreateNewCat((crate) => !crate);
  };

  return (
    <div>
      <FormCat handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default CreateCat;
