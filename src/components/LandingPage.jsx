import React from "react";
import {Carousel} from 'react-bootstrap';
import "../App.css";
const LandingPage = () => {
  return (
    <div className="text">
             <img src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{marginTop:"8%"}} className="textimg"/>
            <div className="text-center">
                  <h1>CLOTHES </h1>
                  <p>You can have anything you want in life if you dress for it.</p>
                  </div>
       <div className="homeimg">
             <img className="homeimg" src="https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>
       </div>

       <div className="row">
       
           <img src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img1"/>
            
            
           <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img1"/>
                
    
          <img src="https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img1"/>
        
       </div>

       <div className="row-0">
       
       <img src="https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img2"/>
        
    
      <img src="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img2"/>


      <img src="https://images.pexels.com/photos/581087/pexels-photo-581087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img2"/>
   </div>

     

          <div className="footer">

                <div className="box">
                          <h2>Explore</h2>

                    <ul>
                            <a href=""><li>What We Do</li></a>
                            <a href=""><li>SALES</li></a>
                            <a href=""><li>ONLINE SALE</li></a>
                            
                    </ul>
                 </div>

                <div className="box">
                           <h2>About</h2>

                        <ul>
                            <a href=""><li>About us</li></a>
                            <a href=""><li>SUMMER CLOTHES</li></a>
                            <a href=""><li>WINTER CLOTHES</li></a>
                            <a href=""><li>SHOES</li></a>

                        </ul>
                </div>
                <div className="box">
                         <h2> Clothes </h2>

                      <ul>
                         <a href=""><li>SHIRTS</li></a>
                         <a href=""><li>JEANS</li></a>
                         <a href=""><li>JACKETS</li></a>
                         <a href=""><li>SHOES</li></a>
                         <a href=""><li>COAT SUITS</li></a>
                      </ul>
                </div>
          </div>
          <div class="footer-bottom"> 
                &copy Designed by Ammar Chawla
          </div>
    </div>
  );
};

export default LandingPage;
