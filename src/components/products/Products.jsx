import React from "react";
import SingleProduct from "./SingleProduct";

import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import productService from "./../../services/ProductsService";
import userService from "../../services/UserService";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.min.css";

const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Products = (props) => {
  const [products, setProducts] = React.useState([]);
  const classes = useStyles();
  const getData = () => {
    productService
      .getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // getData();
  React.useEffect(getData, []);
  // console.log("Inside Products Component");
  const handleNewProductClick = () => {
    console.log(props);
    props.history.push("/products/new");
  };
  return (
    <div  style={{marginTop:"10%"}}>
      
          <div className="container-fluid">
      <Jumbotron>
     <h1>SELLER</h1>
  <p>
    Life Is Too Short To Wear Boring Clothes
  </p>
  
</Jumbotron>
<Nav defaultActiveKey="/home" as="ul">
  <Nav.Item>
    <Nav.Link href="/home">MEN</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">WOMEN</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">KIDS</Nav.Link>
  </Nav.Item>
   </Nav>
</div>
  
  <div className="new">
     <h1>New Arrival</h1>
  </div>
      {userService.isLoggedIn() && (
        <Fab
          color="primary"
          aria-label="add"
          className={classes.addBtn}
          onClick={handleNewProductClick}
        >
          <AddIcon />
        </Fab>
      )}

      {products.length === 0 ? (
        <p>There are Clothes</p>
      ) : (
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <SingleProduct key={index} product={product} onDelete={getData} />
          ))}
        </Grid>
      )}
      <div class="footer-bottom"> 
     &copy Designed by Ammar Chawla
     </div> 
    </div>
  );
};

export default Products;
