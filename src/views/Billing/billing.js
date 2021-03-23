import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/navigation";
import '../../assets/css/style.css';
import './billing.css';

export default class Billing extends Component {
  render() {
    return (
      <div classNAme="billing">
        <Navigation />
        <form className="billing__form">
          <div className="billing__form--control">
            <p className="billing__form--title">
              Name on Card <span className="required">*</span>
            </p>
            <label class="billing__form--label">
              <input type="text" placeholder="Opara Linus Ahmed" className="billing__form--input"/>
            </label>
            <br />
          </div>
          <div className="billing__form--control">
            <p className="billing__form--title">
              Card Type <span className="required">*</span>
            </p>
            <label class="billing__form--label">
              <select className="billing__form--select">
                <option>Visa</option>
                <option>Verve</option>
                <option>Master</option>
              </select>
            </label>
            <br />
          </div>
          <div className="billing__form--flex">
            <div className="billing__form--control">
              <p className="billing__form--title">
                Card details <span className="required">*</span>
              </p>
              <label class="billing__form--label">
                <input
                  type="number"
                  placeholder="44960  44960  44960 44960"
                  className="billing__form--input"
                />
              </label>
            </div>
            <div className="card__info">
              <div className="billing__form--control">
                <p className="billing__form--title expiry">
                  Expiry date <span className="required">*</span>
                </p>
                <label class="billing__form--label">
                  <input
                    type="text"
                    placeholder="04 / 23"
                    className="billing__form--input"
                  />
                </label>
              </div>
              <div className="billing__form--control">
                <p className="billing__form--title">
                  CVV <span className="required">*</span>
                </p>
                <label class="billing__form--label">
                  <input
                    type="number"
                    placeholder="923"
                    className="billing__form--input placeholder-bold"
                  />
                </label>
              </div>
            </div>
          </div>

          <div class="billing__link--controls">
            <div className="link__controls">
              <Link to="/confirm-payment" className="btn">Next</Link>
              <Link to="/" className="page__link">Cancel Payment</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
