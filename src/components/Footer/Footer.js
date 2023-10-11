   import React from "react";
   import "./Footer.css";
   import GitHub from '../Footer/Images/github.jpeg';
   import Linkedin from '../Footer/Images/linkedin.png';
   import Facebook from '../Footer/Images/facebook.png';
   import Twitter from '../Footer/Images/twitter.jpeg';
   import Instagram from '../Footer/Images/insta.jpeg';

export default function Footer(){
    return(
        <>
        <div className="footer">
          <h1 className="title">Uber</h1>
          <h4 className="title">Visit Help Center</h4>
         <div className= "footer section_padding">
          <div className="footer-links">
            <div  className="footer-links_div">
                <h4>Company</h4>
                <a href="/aboutus">
                  <p>About Us</p>
                </a>
                <a href="/ouroffering">
                  <p>Our Offerings</p>
                </a>
                <a href="/newsroom">
                  <p>Newsroom</p>
                </a>
                <a href="/investors">
                  <p>Investors</p>
                </a>
                <a href="/blog">
                  <p>Blog</p>
                </a>
                <a href="/careers">
                  <p>Careers</p>
                </a>
                <a href="/ai">
                  <p>AI</p>
                </a>
                <a href="/giftcards">
                  <p>Gift cards</p>
                </a>
              </div>

             <div className="footer-links_div">
                 <h4>Products</h4>
                 <a href = "/ride">
                      <p>Ride</p>
                 </a>
                 <a href = "/drive">
                      <p>Drive</p>
                 </a>
                 <a href = "/deliver">
                      <p>Deliver</p>
                 </a>
                 <a href = "/eat">
                      <p>Eat</p>
                 </a>
                 <a href = "/uberforbusiness">
                      <p>Uber for Business</p>
                 </a>
                 <a href = "/uberfreight">
                      <p>Uber Freight</p>
                 </a>
             </div>

             <div className="footer-links_div">
                <h4>Global citizenship</h4>
                <a href = "/safety">
                   <p>Safety</p>
                </a>
                <a href = "/diversityandinclusion">
                   <p>Diversity and Inclusion</p>
                </a>
                <a href = "/sustainability">
                   <p>Sustainability</p>
                </a>
             </div>

             <div className="footer-links_div">
                <h4>Travel</h4>
                <a href="./reserve">
                    <p>reserve</p>
                </a>
                <a href="./airports">
                    <p>Airports</p>
                </a>
                <a href="./cities">
                    <p>Cities</p>
                </a>
             </div>

             <div className="footer-links_div">
                <h4>Find Us On Social Media</h4> 
                 <div className="socialmedia"> 
                      <p><img src={GitHub} alt=""/></p>
                      <p><img src={Linkedin} alt=""/></p>
                      <p><img src={Facebook} alt=""/></p>  
                      <p><img src={Twitter} alt=""/></p>  
                      <p><img src={Instagram} alt=""/></p> 
                </div> 
            </div>
          </div>

          <hr></hr>

          <div className="footer-below">
            <div className="footer-copyright">
                <p className="footerbelow">
                    @{new Date().getFullYear()} Website Created By GoStreet Team.
                </ p>
           </div>

           {/* <div className="footer-below-links">
               <a href="/terms"><div><p>Terms & Conditions</p></div></a>
               <a href="/privacy"><div><p>Privacy</p></div></a>
               <a href="/security"><div><p>Security</p></div></a>
               <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
           </div> */}
          </div>

        </div>
        </div>
     </>
    )
}; 