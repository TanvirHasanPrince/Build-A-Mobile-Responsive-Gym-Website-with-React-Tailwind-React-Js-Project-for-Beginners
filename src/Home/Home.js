import React from 'react';
import Banner from './Banner';
import Classes from './Classes';
import Navbar from './Navbar';
import Trainer from './Trainer';
import Usp from './Usp';
import Price from "./Price";
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
 return (
  <div>
   <Navbar></Navbar>
   <Banner></Banner>
   <Usp></Usp>
   <Classes></Classes>
   <Trainer></Trainer>
   <Price></Price>
   <Contact></Contact>
   <Footer></Footer>
  
  </div>
 );
};

export default Home;