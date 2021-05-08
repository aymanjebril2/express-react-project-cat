import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const chonkynessCat = [
  {
    value: "skinny chonkyness",
    label: "skinny chonkyness",
  },
  {
    value: "Fat chonkyness",
    label: "Fat chonkyness",
  },
  {
    value: "Medium chonkyness",
    label: "Medium chonkyness",
  },
  {
    value: "so chonkyness ",
    label: "so chonkyness",
  },
];

const useStyles = makeStyles({
  root: {
    marginTop: 50,
    width: 500,
    margin: "0 auto",
    // height: 900,
  },
  titleOfCard: {
    textAlign: "center",
  },
  inputDiv: {
    textAlign: "center",
    margin: "0 auto",
  },
  input: {
    width: 300,
    margin: 10,
  },
  btnDiv: {
    textAlign: "center",
    margin: "0 auto",
  },
  btn: {
    backgroundColor: "#a8326f",
    marginTop: 20,
  },
});

const FormCat = ({ handleSubmit, handleChange, cat }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card style={{ height: 500 }}>
        <form onSubmit={handleSubmit}>
          <h3 className={classes.titleOfCard}> add a chonky Cat </h3>
          <div className={classes.inputDiv}>
            <TextField
              id="outlined-basic"
              label="Name "
              variant="outlined"
              className={classes.input}
              onChange={handleChange}
              name="name"
            />
            <div>
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                onChange={handleChange}
                variant="outlined"
                className={classes.input}
                name="chonkyness"
              >
                {chonkynessCat.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <TextField
              id="outlined-basic"
              label="image Link "
              variant="outlined"
              className={classes.input}
              name="imagelink"
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="biography"
              variant="outlined"
              className={classes.input}
              name="biography"
              onChange={handleChange}
            />
          </div>
          <div className={classes.btnDiv}>
            <Button type="submit" variant="contained" className={classes.btn}>
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default FormCat;
