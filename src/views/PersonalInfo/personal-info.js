import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/navigation";
import './personal-info.css';

export default class PersonalInfo extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="personal-info">
          <form className="personal-info__form">
            <div className="personal-info__form--control">
              <p className="personal-info__form--title">Name</p>
              <label className="personal-info__form--label">
                <input type="text" placeholder="Opara Linus Ahmed" className="personal-info__form--input" />
              </label>
            </div>
            <div>
              <p className="personal-info__form--title">Email Address <span className="required">*</span></p>
              <p className="personal-info__form--description">
                The purchase receipt will be sent to this address
              </p>
              <label className="personal-info__form--label">
                <input type="email" placeholder="OparaLinusAhmed@devmail.com" className="personal-info__form--input" />
              </label>
            </div>
            <div>
              <p className="personal-info__form--title">Address 1</p>
              <label className="personal-info__form--label">
                <input type="text" placeholder="The Address of the user goes here" className="personal-info__form--input" />
              </label>
            </div>
            <div>
              <p className="personal-info__form--title">Address 2</p>
              <label className="personal-info__form--label">
                <input type="text" placeholder="and here" className="personal-info__form--input" />
              </label>
            </div>

            <div className="personal-info__form--flex">
              <div className="personal-info__location">
                <p className="personal-info__form--title">Local Government</p>
                <label className="personal-info__form--label">
                  <input type="text" placeholder="Surulere" className="personal-info__form--input" />
                </label>
              </div>

              <div className="personal-info__select--location">
                <p className="personal-info__form--title">State</p>
                <label className="personal-info__form--label">
                  <select className="personal-info__select">
                    <option>Lagos</option>
                    <option>Abuja</option>
                    <option>Kano</option>
                    <option>Anambra</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="link__controls">
              <Link to="/billing" className="btn">Next</Link>
              <Link to="/" className="page__link">Cancel Payment</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
