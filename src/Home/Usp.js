import React from 'react';
import {
  FaDumbbell,
  FaRegListAlt,
  FaCloudShowersHeavy,
  FaHeartbeat,
} from "react-icons/fa";
import UspCard from './UspCard';


const Usp = () => {

  const usps = [
    {
      icon: <FaDumbbell></FaDumbbell>,
      uspTitle: "Quality Equipmenet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
    },
    {
      icon: <FaRegListAlt></FaRegListAlt>,
      uspTitle: "Healthy Nutrition Plan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
    },

    {
      icon: <FaCloudShowersHeavy></FaCloudShowersHeavy>,
      uspTitle: "Shower Service",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
    },

    {
      icon: <FaHeartbeat></FaHeartbeat>,
      uspTitle: "Unique to your Needs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
    },
  ];

 return (
  <div>
   <h1 className='text-3xl text-white font-bold font-[monospace] text-center mt-20'>
    Why Choose Us?
   </h1>

   <div className='lg:flex lg-items-center lg:justify-center lg:py-10'>
<div className='grid grid-cols-1 lg:grid-cols-4 gap-5 py-3'>
 {
  usps.map((usp, i) => (
   <UspCard key={i} usp={usp}></UspCard>
  ))
 }
</div>
   </div>
  </div>
 );
};

export default Usp;