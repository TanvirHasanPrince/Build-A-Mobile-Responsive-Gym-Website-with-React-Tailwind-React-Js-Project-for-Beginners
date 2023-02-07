import React from 'react';

const Banner = () => {
 return (
   <div>
     <div className="grid w-full place-items-center bg-cover col-start-1 row-start-1 bg-center bg-base-100 py-20">
       <div className="z-0 flex items-center justify-center max-w-screen-xl gap-4 p-4 flex-col lg:flex-row-reverse">
         <img
           src="https://images.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           className="w-3/4 lg:w-1/2 classes rounded-lg shadow-2xl"
           alt="A man working out"
         />
         <div>
           <h1 className="md:text-7xl text-2xl ">
             It's all about what you can{" "}
             <span className="text-red-600">achieve</span>
           </h1>
           <br></br>
           <p className="py-6 text-sm lg:text-lg">
             Believe in yourself and all that you are. Know that there is
             something inside you that is greater than any obstacle. Embrace the
             challenge and push through the pain, for it is in those moments
             that you will find your strength. Remember why you started and
             never give up on your goals. You are capable of accomplishing great
             things, so go out there and crush your workout today! You got this!
           </p>
         
         </div>
       </div>
     </div>
   </div>
 );
};

export default Banner;