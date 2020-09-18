import React from 'react';
import './Header.scss';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
    return (
        <header id="header">
            <h1>ReSTy</h1>
            <ul>
              <li id="nav">
                <Link activeClassName="here" to="/" data-testid="homelink"id="clickNav">Home</Link>
              </li>
              <li id="nav">
                <Link activeClassName="here" to="/history" data-testid="homelink" id="clickNav">History</Link>
              </li>
              <li id="nav">
                <Link activeClassName="here" to="/help" data-testid="homelink"id="clickNav">Help</Link>
              </li>
            </ul>
        </header>
    )
}
