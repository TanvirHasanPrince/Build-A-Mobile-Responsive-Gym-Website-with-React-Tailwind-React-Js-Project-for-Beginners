import React from 'react';
import { IconContext } from 'react-icons';

const UspCard = ({usp}) => {
 const {icon, uspTitle, description} = usp;


 return (
   <div className='w-11/12 m-auto lg:w-full'>
   <IconContext.Provider value={{size: "3rem"}}>
 <div className='service-card'>

<i>{icon}</i>
<h3 className='py-3 font-bold'>{uspTitle}</h3>
<p>{description}</p>
 </div>
   </IconContext.Provider>
   </div>
 );
};

export default UspCard;