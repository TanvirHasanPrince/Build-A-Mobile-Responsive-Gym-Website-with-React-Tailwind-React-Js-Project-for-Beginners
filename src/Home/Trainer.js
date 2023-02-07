import React from 'react';
import TrainerCard from './TrainerCard';

const Trainer = () => {

 const ourTrainers = [
   {
     image:
       "https://images.pexels.com/photos/6740056/pexels-photo-6740056.jpeg?auto=compress&cs=tinysrgb&w=1600",
     name: "Amanda",
   },
   {
     image:
       "https://images.pexels.com/photos/6295794/pexels-photo-6295794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     name: "Jamie",
   },

   {
     image:
       "https://images.pexels.com/photos/7928620/pexels-photo-7928620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     name: "Juliet",
   },
   {
     image:
       "https://images.pexels.com/photos/10551491/pexels-photo-10551491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     name: "Justin",
   },
   {
     image:
       "https://images.pexels.com/photos/8744815/pexels-photo-8744815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     name: "Khadija",
   },
   {
     image:
       "https://images.pexels.com/photos/2035066/pexels-photo-2035066.jpeg?auto=compress&cs=tinysrgb&w=1600",
     name: "Maya",
   },
   {
     image:
       "https://images.pexels.com/photos/3838977/pexels-photo-3838977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     name: "Michael",
   },
   {
     image:
       "https://images.pexels.com/photos/8436501/pexels-photo-8436501.jpeg?auto=compress&cs=tinysrgb&w=1600",
     name: "Steven",
   },
 ];

 return (
   <div id='trainers'>
     <h1 className="text-3xl text-white font-bold font-[monospace] text-center mt-20">
       Our Trainers
     </h1>

     <div className="lg:flex lg-items-center lg:justify-center lg:py-10">
       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-3">
         {ourTrainers.map((trainers, i) => (
           <TrainerCard key={i} trainers={trainers}></TrainerCard>
         ))}
       </div>
     </div>
   </div>
 );
};

export default Trainer;