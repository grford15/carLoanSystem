import React from "react";
import "./styling/CarView.css";

const CarView = props => {
  const myMonthlyPayment =
    (props.vehiclePrice - props.deposit) / (props.financeOption * 12);

  const carsAvailable = props.searchResults.filter(car =>
    car.salesInfo.pricing.hasOwnProperty("monthlyPayment")
  );

  const filteredList = carsAvailable
    .slice(0, 6)
    .filter(i => i.salesInfo.pricing.monthlyPayment < myMonthlyPayment)
    .sort(
      (a, b) =>
        a.salesInfo.pricing.monthlyPayment - b.salesInfo.pricing.monthlyPayment
    );

  return (
    <div id="car-view">
      {filteredList.length < 1 && (
        <div className="no-cars-message">
          <p>Sorry, There are no cars that suit your monthly budget</p>
        </div>
      )}
      {filteredList.map((car, index) => {
        return (
          <div className="car-card" key={index}>
            <img src={car.photos[0]} alt="car" />
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
