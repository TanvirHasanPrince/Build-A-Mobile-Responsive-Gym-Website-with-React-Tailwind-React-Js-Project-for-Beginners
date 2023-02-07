import React from 'react';

const Contact = () => {
 return (
   <div id="contact">
     <div className="w-9/12 flex flex-col justify-center m-auto py-10">
       <div>
         <div>
           <h1 className="text-3xl text-white font-[monospace] font-bold text-center mt-20">
             Contact Us
           </h1>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
           <div className="form-control">
             <label className="label">
               <span className="label-text">First Name</span>
             </label>
             <input
               type="text"
               placeholder="First Name"
               className="input input-bordered"
             />
           </div>

           <div className="form-control">
             <label className="label">
               <span className="label-text">Last Name</span>
             </label>
             <input
               type="text"
               placeholder="Last Name"
               className="input input-bordered"
             />
           </div>
         </div>

         <div className="form-control">
           <label className="label">
             <span className="label-text">Email</span>
           </label>
           <input
             type="text"
             placeholder="Email"
             className="input input-bordered"
           />
         </div>

         <div className="form-control">
           <label className="label">
             <span className="label-text">Your Message</span>
           </label>
           <textarea
             type="text"
             placeholder="Write Your Message here"
             className="input input-bordered"
           />
         </div>

         <div className="form-control mt-6">
<button className="btn btn-accent w-full m-auto">Send</button>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Contact;