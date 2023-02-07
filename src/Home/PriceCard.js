import React from "react";
import "./PriceCard.css";

const PriceCard = ({ pricePlan }) => {
  const {
    title,
    price,
    service1,
    service2,
    service3,
    service4,
    cssClass,
    header,
  } = pricePlan;

  console.log(header);
  return (
    <div>
      <div class={cssClass}>
        <div class={`card-header header-${header}`}>
          <h1>{title}</h1>
        </div>
        <div class="card-body">
          <p>
            <h2>${price} /mo</h2>
          </p>
          <div class="card-element-hidden-basic">
            <ul class="card-element-container">
              <li class="card-element">{service1}</li>
              <li class="card-element">{service2}</li>
              <li class="card-element">{service3}</li>
              <li class="card-element">{service4}</li>
            </ul>
            <button class={`price-btn btn-${header}`}>Order Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
