import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 50,
  },
});

const CardCat = ({
  _id,
  name,
  imagelink,
  biography,
  setDeletCat,
  setCat,
  setUpdating,
}) => {
  const classes = useStyles();

  const deletingCat = async () => {
    await axios({
      url: `http://localhost:5000/api/cats/${_id}`,
      method: "DELETE",
    }).then((res) => console.log(res));
    setDeletCat((deleting) => !deleting);
  };

  const updatingCat = async () => {
    const response = await axios.get(`http://localhost:5000/api/cats/${_id}`);
    setCat(response.data);
    setUpdating(true);
  };

  return (
    <Card className={classes.root} key={_id}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name ? name : ""}
          height="140"
          src={imagelink ? imagelink : ""}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name ? name : ""}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {biography ? biography : ""}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={updatingCat}>
          Edit
        </Button>
        <Button size="small" color="primary" onClick={deletingCat}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardCat;
