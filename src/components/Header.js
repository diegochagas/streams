import React from 'react';
import './Header.css';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <header className="App-header menu">
            <Link to="/" className="App-link">
                <figure>
                    <img src={logo} className="App-logo" alt="logo" />
                    <figcaption>Stremy</figcaption>
                </figure>
            </Link>
            <Link to="/" className="App-link">
                All Streams
            </Link>
            <GoogleAuth/>
        </header>
    );
}

export default Header;