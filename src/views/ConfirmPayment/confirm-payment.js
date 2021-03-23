import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/navigation";
import '../../assets/css/style.css';
import './confirm-payment.css';

export default class ConfirmPayment extends Component {
  render() {
    return (
      <div className="confirm-payment">
        <Navigation />
        <table className="confirm-payment__table">
          <thead>
            <div className="confirm-payment__thead--container">
              <p>Item Name</p>
              <p><span className="currency">₦</span>Price</p>
            </div>
          </thead>
          <div className="confirm-payment__flex">
            <tr className="confirm-payment__table-row">
              <td>Data science and usability</td>
              <td>50,000.00</td>
            </tr>
            <br />
            <tr className="confirm-payment__table-row">
              <td>Shipping</td>
              <td style={{color: '#161616'}}>0.00</td>
            </tr>
          </div>
          <div className="confirm-payment__total">
            <td>Total</td>
            <td>50,000.00</td>
          </div>
        </table>

        <div className="link-control__container">
          <div className="link__controls">
            <Link to="/finish-payment" className="btn">Pay</Link>
            <Link to="/" className="page__link">Cancel Payment</Link>
          </div>
        </div>
      </div>
    );
  }
}
