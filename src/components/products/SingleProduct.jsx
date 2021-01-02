import React from "react";
import { Grid, Button } from "@material-ui/core";
import productService from "./../../services/ProductsService";
import { withRouter } from "react-router";
import userService from "../../services/UserService";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "../../App.css";
const SingleProduct = (props) => {
  const [value, setValue] = React.useState(2);
  const { product, onDelete, history } = props;
  console.log(props);
  return (
    <Grid item xs={4}>
      
        {product.name}{" "}
        {product.price}{" "}
        <img className="imgset" src={product.image} />{""}
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        </Box>
        { userService.isLoggedIn() &&(
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                console.log("navigate to update");
                history.push("/products/update/" + product._id);
              }}
            >
              Edit
            </Button>{" "}
            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => {
                productService
                  .deleteProduct(product._id)
                  .then((data) => {
                    console.log(data);
                    onDelete();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Delete
            </Button>
            </>
            )}
      <hr />
    </Grid>
  );
};

export default withRouter(SingleProduct);
