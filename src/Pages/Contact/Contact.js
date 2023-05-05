import React from 'react';
import ContactImg from '../../images/contact.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import './Contact.css';
const Contact = () => {
    return (
        <div className='container contact'>
            <div className="row mt-5">
                <div className="col-12 col-md-6 col-lg-6">
                    <h1>Contact Us</h1>
                    <div className='text-start mt-3'>
                        <h3>Call Us</h3>
                        <p>Phone: 0170 1XXX XXX</p>
                        <h3>Reach Us at</h3>
                        <p>Email: sharikasrestaurant@gmail.com</p>
                        <h3>Opening Hours</h3>
                        <p>Monday-Friday from 10:00 a.m. to 10:00 p.m.</p>
                        <h3>Location</h3>
                        <p>House # 11/B, Block # D, Rd # 1, Banani.</p>
                        <h3 className='mb-2'>Connect Us On</h3>
                        <a href="https://www.facebook.com/"><FontAwesomeIcon className='fa-2x text-danger px-3' icon={faFacebook}></FontAwesomeIcon></a>
                        <a href="https://www.instagram.com/"><FontAwesomeIcon className='fa-2x text-danger px-3' icon={faInstagram}></FontAwesomeIcon></a>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <img className='img-fluid' src={ContactImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;