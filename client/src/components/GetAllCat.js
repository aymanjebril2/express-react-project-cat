import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import CardCat from "./SharedComopnent/CardCat";

const useStyles = makeStyles({
  rootCardDiv: {
    display: "flex",
    flexWrap: "wrap",
  },
});

const GetAllCat = ({
  createNewCat,
  deletCat,
  setDeletCat,
  setCat,
  updating,
}) => {
  const classes = useStyles();
  const [cats, setCats] = useState([]);

  const fetchAllCat = async () => {
    const URL = "http://localhost:5000/api/cats";
    const response = await axios.get(URL);
    setCats(response.data);
  };

  useEffect(() => {
    fetchAllCat();
  }, [createNewCat, deletCat, updating]);

  return (
    <div className={classes.rootCardDiv}>
      {cats?.map((item, index) => (
        <CardCat
          key={index}
          {...item}
          setDeletCat={setDeletCat}
          setCat={setCat}
        />
      ))}
    </div>
  );
};

export default GetAllCat;
