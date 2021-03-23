import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Check } from "react-feather"
import '../../assets/css/style.css';
import './finish-payment.css';

class FinishPayment extends Component {
  render() {
    return (
      <div className="finish-payment">
        <div className="finish-payment__container">
          <div className="check-container">
            <Check style={{strokeWidth:"4", color: '#2ca75fc7'}} className="check" />
          </div>
          <div className="finish-payment__prompt">
            <h2 className="finish-payment__prompt--heading">Purchase Completed</h2>
            <p className="finish-payment__prompt--subheading">
              Please check your email for details concerning this transaction.
            </p>
            <Link to="/" className="finish-payment__link">Return Home</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default FinishPayment;
