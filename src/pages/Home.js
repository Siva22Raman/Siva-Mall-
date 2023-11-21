import React from 'react';
/*import { BrowserRouter, Routes, Route } from "react-router-dom";*/
/*import Navbar from '../components/Navbar';*/
/*import Snavbar from '../components/Snavbar';*/// Adjust the import path as needed
import ImageSlideshow from '../components/ImageSildeshow';
import ShopCard from '../components/Shopcard';
/*import Footer from '../components/Footer';*/
import '../Styles/Home.css';

function Home() {
  return (
    <div className="home-background">
      
      <ImageSlideshow/>
      <div className="shop-card-container">
        <ShopCard
          title="StarBucks"
          description="It’s not just coffee. It’s Starbucks."
          imageUrl="https://www.shutterstock.com/shutterstock/photos/2275800769/display_1500/stock-vector-starbucks-icon-logo-famous-identity-symbol-isolated-white-background-design-template-vector-2275800769.jpg"
        />
        <ShopCard
          title="KFC"
          description="Nobody does chicken like KFC"
          imageUrl="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1488265976/k2htrr9z4vsxkjbthskk.png"
        />
        <ShopCard
          title="Zudio"
          description="Winning isn't everything, but wanting to win is."
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ785KSx5yATqkhr3pp_GqClIQH6gy3MscDGg&usqp=CAU"
        />
      </div>
      <iframe
  title="Embedded Google Map"
  width={600}
  height={450}
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.683750729461!2d80.21278157830243!3d12.992067915187421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526763b48e60eb%3A0xdb3a29009036c251!2sPhoenix%20Marketcity!5e0!3m2!1sen!2sin!4v1696351754178!5m2!1sen!2sin"
  frameBorder={0}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  style={{ border: 'none' }}
></iframe>
    </div>
  );
}

export default Home;
