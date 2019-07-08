import React from "react";

const CarView = props => {
  const myMonthlyPayment =
    (props.vehiclePrice - props.deposit) / (props.financeOption * 12);

  console.log(props.searchResults.length);

  const carsAvailable = props.searchResults.filter(car =>
    car.salesInfo.pricing.hasOwnProperty("monthlyPayment")
  );

  console.log(myMonthlyPayment);

  return (
    <div id="car-view">
      {carsAvailable
        .filter(i => i.salesInfo.pricing.monthlyPayment < myMonthlyPayment)
        .map((car, index) => {
          return (
            <div className="car-card" key={index}>
              <h1>{car.title.name}</h1>
              <h3>{car.title.variant}</h3>
              <p>{car.branch.name}</p>
              <ul>
                <li>£{car.salesInfo.pricing.cashPrice} Cash Price</li>
                <li>£{car.salesInfo.pricing.monthlyPayment} per month</li>
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default CarView;
