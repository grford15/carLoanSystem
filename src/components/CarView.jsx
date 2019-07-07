import React from "react";

const CarView = props => {
  return (
    <div id="car-view">
      <table>
        <tbody>
          {props.searchResults.map((car, index) => {
            return (
              <tr key={index}>
                <th>Car Make & Model</th>
                <td>
                  {car.make} {car.model}
                </td>
                <th>Car Price</th>
                <td>{car.salesInfo.pricing.cashPrice}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CarView;
