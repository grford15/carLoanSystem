import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import LoanView from "./components/LoanView";
import CarView from "./components/CarView";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehiclePrice: 0,
      deposit: 0,
      deliveryDate: new Date(),
      financeOption: 1,
      submitted: false,
      searchResults: [],
      error: false
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const url =
      "https://cors-anywhere.herokuapp.com/https://www.arnoldclark.com/used-cars/search.json";
    axios.get(url).then(res =>
      this.setState({
        searchResults: res.data.searchResults
      })
    );
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: parseInt(e.target.value)
    });
  }

  handleDateChange(date) {
    this.setState({
      deliveryDate: date
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.deposit >= this.state.vehiclePrice * 0.15) {
      this.setState({
        submitted: true,
        error: false
      });
    } else {
      this.setState({
        error: true,
        submitted: false
      });
    }
  }

  render() {
    const {
      vehiclePrice,
      deposit,
      deliveryDate,
      financeOption,
      searchResults
    } = this.state;

    return (
      <div className="App">
        <header>
          <h1>Arnold Clark Loan Calculator</h1>
        </header>

        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-element">
            <label>Vehicle Price</label>
            <input
              type="number"
              value={vehiclePrice}
              onChange={this.handleChange}
              name="vehiclePrice"
            />
          </div>
          <div className="form-element">
            <label>Deposit Amount</label>
            <input
              type="number"
              value={deposit}
              onChange={this.handleChange}
              name="deposit"
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
            <select
              value={financeOption}
              onChange={this.handleChange}
              name="financeOption"
            >
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3">3 Years</option>
            </select>
          </div>
          <div id="form-btn">
            <button type="submit" className="loan-btn">
              Calculate Loan
            </button>
          </div>
        </form>
        {this.state.error && (
          <div className="error-message">
            <p>The deposit must be at least £{vehiclePrice * 0.15}</p>
          </div>
        )}
        {this.state.submitted && (
          <div className="results-container">
            <LoanView
              vehiclePrice={vehiclePrice}
              deposit={deposit}
              deliveryDate={deliveryDate}
              financeOption={financeOption}
            />
            <CarView
              searchResults={searchResults}
              vehiclePrice={vehiclePrice}
              deposit={deposit}
              financeOption={financeOption}
            />
          </div>
        )}
      </div>
    );
  }
}
export default App;
