import React from "react";
import "./styling/LoanView.css";

const LoanView = props => {

  const { vehiclePrice, deposit, deliveryDate, financeOption } = props;

  const amountToPay = vehiclePrice - deposit;
  const monthsToPay = financeOption * 12;
  const monthlyPayment = amountToPay / monthsToPay;
  const firstMonthlyPayment = monthlyPayment + 88;
  const finalMonthlyPayment = monthlyPayment + 20;



  const getFirstMonday = date => {
    const dateObject = new Date(date);
    dateObject.setMonth(dateObject.getMonth() + 1)

    const month = dateObject.getMonth();
    const monday = [];

    dateObject.setDate(1);

    while (dateObject.getDay() !== 1) {
      dateObject.setDate(dateObject.getDate() + 1);
    }

    while (dateObject.getMonth() === month) {
      monday.push(new Date(dateObject.getTime()));
      dateObject.setDate(dateObject.getDate() + 7);
    }

    return monday[0];
  };

  const firstMonday = getFirstMonday(deliveryDate);

  return (
    <div className="repayment-container">
      <table className="loan-view-table">
        <tbody className="loan-view-tbody">
          <tr className="loan-view-tr">
            <th>Vehicle Price</th>
            <td>£ {Number(vehiclePrice).toFixed(2)}</td>
          </tr>
          <tr className="loan-view-tr">
            <th>Deposit</th>
            <td>£ {Number(deposit).toFixed(2)}</td>
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
          <tr className="loan-view-tr">
            <th>Payments will commence</th>
            <td>{firstMonday.toDateString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LoanView;
