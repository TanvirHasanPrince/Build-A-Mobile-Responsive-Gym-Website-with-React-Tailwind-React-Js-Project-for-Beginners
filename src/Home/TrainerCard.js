import React from 'react';

const TrainerCard = ({ trainers }) => {

 const { image, name } = trainers;

  return (
    <div>
      <div className="w-11/12 m-auto lg:w-full">
        <div className="card w-96 glass">
          <figure>
            <img src={image} alt={name} className="md:h-[300px] lg:h-[300px] h-auto" />
          </figure>
          <div className="card-body">
            <h2 className="card-title m-auto">{name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;