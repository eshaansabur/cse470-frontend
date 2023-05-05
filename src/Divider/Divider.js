import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock, faCoins, faMoneyBill, faMoneyBillWave, faShield, faShieldHalved} from "@fortawesome/free-solid-svg-icons";
import './Divider.css'
const Divider = () => {
    return (
        <div className="container-fluid">
            <div className='row'>
                <div className="col-4 col-md-4 col-lg-4 divider">
                    <FontAwesomeIcon className='fa-5x' icon={faClock}></FontAwesomeIcon>
                    <h2>Fast Delivery</h2>
                </div>
                <div className="col-4 col-md-4 col-lg-4 divider">
                    <FontAwesomeIcon  className='fa-5x'  icon={faCoins}></FontAwesomeIcon>
                    <h2>Cash On Delivery</h2>
                </div>
                <div className="col-4 col-md-4 col-lg-4 divider">
                    <FontAwesomeIcon  className='fa-5x'  icon={faShieldHalved}></FontAwesomeIcon>
                    <h2>Shop without Hesitation</h2>
                </div>
            </div>
        </div>
    );
};

export default Divider;