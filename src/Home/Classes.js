import React from 'react';
import ClassCard from './ClassCard';

const Classes = () => {

  const ourClasses = [
    {
      image:
        "https://images.pexels.com/photos/917653/pexels-photo-917653.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Aerobics",
    },
    {
      image:
        "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Cardio",
    },
    {
      image:
        "https://images.pexels.com/photos/3768722/pexels-photo-3768722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Dancing",
    },
    {
      image:
        "https://images.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Muscle Building",
    },
    {
      image:
        "https://images.pexels.com/photos/5384406/pexels-photo-5384406.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Rock Climbing",
    },
    {
      image:
        "https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Stretching",
    },
    {
      image:
        "https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Swimming",
    },
    {
      image:
        "https://images.pexels.com/photos/802417/pexels-photo-802417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Yoga",
    },
  ];
 return (
   <div id='classes'>
     <h1 className="text-3xl text-white font-bold font-[monospace] text-center mt-20">
       Classes We Offer
     </h1>

     <div className="lg:flex lg-items-center lg:justify-center lg:py-10">
       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-3">
         {ourClasses.map((classPlan, i) => (
           <ClassCard key={i} classPlan={classPlan}></ClassCard>
         ))}
       </div>
     </div>
   </div>
 );
};

export default Classes;