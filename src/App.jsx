import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehiclePrice: 0,
      deposit: 0,
      deliveryDate: new Date(),
      financeOption: 1,
      submitted: false
    };

    this.handleVehicleChange = this.handleVehicleChange.bind(this);
    this.handleDepositChange = this.handleDepositChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleFinanceChange = this.handleFinanceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleVehicleChange(e) {
    this.setState({
      vehiclePrice: parseInt(e.target.value)
    });
  }

  handleDepositChange(e) {
    this.setState({
      deposit: parseInt(e.target.value)
    });
  }

  handleDateChange(date) {
    this.setState({
      deliveryDate: date
    });
  }

  handleFinanceChange(e) {
    this.setState({
      financeOption: parseInt(e.target.value)
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState => ({
      submitted: !prevState.submitted
    }));
  }

  render() {
    const { vehiclePrice, deposit, deliveryDate, financeOption } = this.state;

    const repaymentAmount = vehiclePrice - deposit;
    const repaymentTerm = financeOption * 12;
    const monthlyAmount = repaymentAmount / repaymentTerm;

    return (
      <div className="App">
        <header>
          <h1>Arnold Clark Loan Calculator</h1>
        </header>

        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-element">
            <label>Vehicle Price</label>
            <input
              type="text"
              pattern="[0-9]*"
              value={vehiclePrice}
              onChange={this.handleVehicleChange}
            />
          </div>
          <div className="form-element">
            <label>Deposit Amount</label>
            <input
              type="text"
              pattern="[0-9]*"
              value={deposit}
              onChange={this.handleDepositChange}
            />
          </div>
          <div className="form-element">
            <label>Delivery Date</label>
            <DatePicker
              selected={deliveryDate}
              onChange={this.handleDateChange}
              todayButton={"Today"}
            />
          </div>
          <div className="form-element">
            <label>Length of Finance</label>
            <select value={financeOption} onChange={this.handleFinanceChange}>
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3">3 Years</option>
            </select>
          </div>
          <div className="form-element">
            <button type="submit">Calculate Loan</button>
          </div>
        </form>
        {this.state.submitted && (
          <ul>
            <li>The car cost £ {this.state.vehiclePrice}</li>
            <li>Your deposit £ {this.state.deposit}</li>
            <li>
              The car will be delivered {this.state.deliveryDate.toDateString()}
            </li>
            <li>Your monthly amount is £ {Number(monthlyAmount).toFixed(2)}</li>
            <li>
              Your first month will be £ {Number(monthlyAmount + 88).toFixed(2)}
            </li>
            <li>
              Your last month will be £ {Number(monthlyAmount + 20).toFixed(2)}
            </li>
          </ul>
        )}
      </div>
    );
  }
}
export default App;
