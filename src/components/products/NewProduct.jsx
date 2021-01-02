import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import productService from "./../../services/ProductsService";
const NewProduct = (props) => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [category, setCategory] = React.useState("");
  const [details, setDetails] = React.useState("");

  const [image, setImage] = React.useState("");

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} style={{marginTop:"10%"}}>
        <h1>Add New Clothes</h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <TextField
          label="name"
          fullWidth
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
          <TextField
          label="price"
          fullWidth
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <TextField
          label="category"
          fullWidth
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <TextField
          label="details"
          fullWidth
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <TextField
          label="image"
          fullWidth
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            productService
              .addProduct({ name, price,image,details,category })
              .then((data) => {
                console.log(data);
                props.history.push("/products");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Add New
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewProduct;
