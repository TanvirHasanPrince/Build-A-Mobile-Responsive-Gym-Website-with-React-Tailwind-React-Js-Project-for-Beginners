import React from 'react';
import PriceCard from './PriceCard.js';

const Price = () => {
  const pricingPlan = [
    {
      title: "BASIC",
      price: "20",
      service1: "Gym",
      service2: "Shower",
      service3: "Sauna",
      service4: "Yoga Studio",
      cssClass: "card-basic",
      header: "basic",
    },

    {
      title: "STANDARD",
      price: "49",
      service1: "Full Gym Facility Access",
      service2: "All class Excess",
      service3: "Personalized diet",
      service4: "Personal Trainning session",
      cssClass: "card-standard",
      header: "standard",
    },

    {
      title: "VIP",
      price: "150",
      service1: "Full Gym Facility Access",
      service2: "All class Excess",
      service3: "Membership Card",
      service4: "1-1 Trainning & coaching session",
      cssClass: "card-premium",
      header: "premium",
    },
  ];

 return (
   <div id='price'>
     <h1 className="text-3xl text-white font-bold font-[monospace] text-center mt-20">
       Choose Your Plan
     </h1>

     <div className="lg:flex lg-items-center lg:justify-center lg:py-10">
       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 py-3 m-auto">
         {pricingPlan.map((pricePlan, i) => (
           <PriceCard key={i} pricePlan={pricePlan}></PriceCard>
         ))}
       </div>
     </div>
   </div>
 );
};

export default Price;