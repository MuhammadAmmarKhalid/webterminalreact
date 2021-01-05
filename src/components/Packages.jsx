import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Styles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function packages() {
  const classes = Styles();
  return (
       <div className="package" style={{marginTop:"10%"}}>
              <h1>Shirts & Pents</h1>
        

        <div className="row-01">
             <div className="container-2">
         <Card className={classes.root}>

      <CardActionArea>  
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Suit & Boots
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="Medium" color="primary">
          PKR: 5000
        </Button>
        <Button size="Medium" color="primary">
          Add To Cart
        </Button>
      </CardActions>
    </Card>
        
       </div>

       <div className="container-2">
         <Card className={classes.root}>

      <CardActionArea>  
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            T Shirts
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="Medium" color="primary">
          PKR: 3000(per)
        </Button>
        <Button size="Medium" color="primary">
          Add To Cart
        </Button>
      </CardActions>
    </Card>
        
       </div>
        
        <div className="container-2">
    <Card className={classes.root}>
       <CardActionArea>  
      <CardMedia
        className={classes.media}
       image="https://images.pexels.com/photos/581087/pexels-photo-581087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
       title="Contemplative Reptile"
     />
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
             Shirt & Trousers
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              
         </Typography>
         </CardContent>
        </CardActionArea>
         <CardActions>
          <Button size="Medium" color="primary">
            PKR: 3000
          </Button>
         <Button size="Medium" color="primary">
            Add To Cart
          </Button>
         </CardActions>
       </Card>
         </div>
    </div>
         

    <div className="row-02">
             <div className="container-2">
         <Card className={classes.root}>

      <CardActionArea>  
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Casual Shirts
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="Medium" color="primary">
          PKR: 2000(per)
        </Button>
        <Button size="Medium" color="primary">
          Add To Cart
        </Button>
      </CardActions>
    </Card>
        
       </div>
        
        <div className="container-2"> 
    <Card className={classes.root}>
       <CardActionArea>  
      <CardMedia
        className={classes.media}
       image="https://images.pexels.com/photos/2112648/pexels-photo-2112648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
       title="Contemplative Reptile"
     />
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            White Shirts
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
  
         </Typography>
         </CardContent>
        </CardActionArea>
         <CardActions>
          <Button size="Medium" color="primary">
            PKR: 3000
          </Button>
         <Button size="Medium" color="primary">
            Add To Cart
          </Button>
         </CardActions>
       </Card>
         </div>


          
        <div className="container-2">
    <Card className={classes.root}>
       <CardActionArea>  
      <CardMedia
        className={classes.media}
       image="https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
       title="Contemplative Reptile"
     />
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
             Jeans Pents
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             
         </Typography>
         </CardContent>
        </CardActionArea>
         <CardActions>
          <Button size="Medium" color="primary">
            PKR: 2500
          </Button>
         <Button size="Medium" color="primary">
            Add To Cart
          </Button>
         </CardActions>
       </Card>
         </div>

    </div>
           


    <div class="footer-bottom"> 
     &copy Designed by Ammar Chawla
     </div> 
   </div>
     
  );
}
