import React from "react";
import "./styling/LoanView.css";

const LoanView = props => {
  const amountToPay = props.vehiclePrice - props.deposit;
  const monthsToPay = props.financeOption * 12;
  const monthlyPayment = amountToPay / monthsToPay;
  const firstMonthlyPayment = monthlyPayment + 88;
  const finalMonthlyPayment = monthlyPayment + 20;

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Vehicle Price</th>
            <td>£ {Number(props.vehiclePrice).toFixed(2)}</td>
          </tr>
          <tr>
            <th>Deposit</th>
            <td>£ {Number(props.deposit).toFixed(2)}</td>
          </tr>
          <tr>
            <th>Months to Pay</th>
            <td>{monthsToPay}</td>
          </tr>
          <tr>
            <th>Initial Month's Payment</th>
            <td>£ {Number(firstMonthlyPayment).toFixed(2)}</td>
          </tr>
          <tr>
            <th>Last Month's Payment</th>
            <td>£ {Number(finalMonthlyPayment).toFixed(2)}</td>
          </tr>
          <tr>
            <th>Monthly Payments</th>
            <td>£ {Number(monthlyPayment).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LoanView;
