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
      <table className="loan-view-table">
        <tbody className="loan-view-tbody">
          <tr className="loan-view-tr">
            <th>Vehicle Price</th>
            <td>£ {Number(props.vehiclePrice).toFixed(2)}</td>
          </tr>
          <tr className="loan-view-tr">
            <th>Deposit</th>
            <td>£ {Number(props.deposit).toFixed(2)}</td>
          </tr>
          <tr className="loan-view-tr">
            <th>Months to Pay</th>
            <td>{monthsToPay}</td>
          </tr>
          <tr className="loan-view-tr">
            <th>Initial Month's Payment</th>
            <td>£ {Number(firstMonthlyPayment).toFixed(2)}</td>
          </tr>
          <tr className="loan-view-tr">
            <th>Last Month's Payment</th>
            <td>£ {Number(finalMonthlyPayment).toFixed(2)}</td>
          </tr>
          <tr className="loan-view-tr">
            <th>Monthly Payments</th>
            <td>£ {Number(monthlyPayment).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LoanView;
