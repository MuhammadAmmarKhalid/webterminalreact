import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import userService from "../services/UserService";
const useStyles = makeStyles((theme) => ({
  link: {
    color: "Black",
    paddingRight: "1rem",
  },
}));

const TopMenu = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <div className="social">
              
               <div>

               <img src="https://icon-library.com/images/instagram-icon-free/instagram-icon-free-4.jpg" className="icon"/>
              <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png" className="icon"/>
              
              <img src="https://cdn.icon-icons.com/icons2/2119/PNG/512/google_icon_131222.png" className="icon"/> 

              <span className="textbar">
                <img src="https://i.pinimg.com/originals/ad/3b/21/ad3b213bc790807c25d8bb774dab3c35.jpg" className="icon"/>+92 321 4550 816</span>

                <span className="textbar-1">
                <img src="https://cdn.onlinewebfonts.com/svg/img_341916.png" className="icon"/>a1@gmail.com</span>

               </div>
               
      </div>
        
      <div className="Toolbar">
         

        <Typography variant="h6">
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/packages" className={classes.link}>
            Gallery
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/products" className={classes.link}>
          Clothes
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/products/new" className={classes.link}>
            New Clothes
          </Link>
        </Typography>
        {!userService.isLoggedIn() ? (
          <>
            <Typography variant="h6">
              <Link to="/login" className={classes.link}>
                Sign In
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/register" className={classes.link}>
                Sign Up
              </Link>
            </Typography>
          </>
        ) : (
          <Button
            variant="contained"
            onClick={(e) => {
              userService.logout();
              window.location.reload();
            }}
          >
            LogOut {userService.getLoggedInUser().name + userService.getLoggedInUser().role}
          </Button>
        )}
      </div>
    </AppBar>
  );
};

export default TopMenu;
