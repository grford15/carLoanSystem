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
      deliveryDate: Date.now(),
      financeOption: 1
    };

    this.handleVehicleChange = this.handleVehicleChange.bind(this);
    this.handleDepositChange = this.handleDepositChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleFinanceChange = this.handleFinanceChange.bind(this);
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

  render() {
    const { vehiclePrice, deposit, deliveryDate, financeOption } = this.state;

    return (
      <div className="App">
        <header>
          <h1>Arnold Clark Loan Calculator</h1>
        </header>

        <form className="form">
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
        </form>
      </div>
    );
  }
}
export default App;
