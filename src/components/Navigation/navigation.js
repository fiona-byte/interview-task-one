import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import '../../assets/css/style.css';
import './navigation.css';

export default class Navigation extends Component {
  render() {
    return (
      <div class="navigation">
        <h1 className="navigation__header">Complete your Purchase</h1>
        <div className="navigation__container">
          <ul className="navigation__item">
            <li className="navigation__list">
              <NavLink exact to="/" className="navigation__link" activeClassName="navigation__link--active">Personal Info</NavLink>
            </li>
            <li className="navigation__list">
              <NavLink exact to="/billing" className="navigation__link" activeClassName="navigation__link--active">Biling Info</NavLink>
            </li>
            <li className="navigation__list">
              <NavLink exact to="/confirm-payment" className="navigation__link" activeClassName="navigation__link--active">Confirm Payment</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
