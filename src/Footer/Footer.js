import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <footer className='mt-3 footer py-3'>
            <div className="row mt-5">
                <div className="col-12 col-md-6 col-lg-6">
                    <h4>Quick Links</h4>
                    <Link to='/home'>Home</Link>
                    <br />
                    <Link to='/about'>About</Link>
                    <br />
                    <Link to='/products'>Products</Link>
                    <br />
                    <Link to='/contact'>Contact</Link>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <h4>Connect On Social Media</h4>
                    <a href="https://www.facebook.com/"><FontAwesomeIcon className='fa-2x text-color px-3' icon={faFacebook}></FontAwesomeIcon></a>
                        <a href="https://www.instagram.com/"><FontAwesomeIcon className='fa-2x text-color px-3' icon={faInstagram}></FontAwesomeIcon></a>
                </div>
            </div>
            <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 text-center">
                        <p>All Rights Reserved by Sharika Tanisha</p>
                    </div>
            </div>
        </footer>
    );
};

export default Footer;