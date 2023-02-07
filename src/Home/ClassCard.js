import React from 'react';

const ClassCard = ({ classPlan }) => {
 const { image, title } = classPlan;

 
  return (
    <div className="w-11/12 m-auto lg:w-full">
      <div className="card w-96 glass">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title m-auto">{title}</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions m-auto mt-3">
            <button className="btn btn-success">Learn More!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;