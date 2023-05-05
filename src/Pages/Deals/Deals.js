import React from 'react';
import Sorry from '../../images/sorry.jpg';
const Deals = () => {
    return (
        <div className='container mt-5 mb-5'>
            <div className="row mt-5 mb-5">
            <h2>Dear User,</h2>
            <h3>Sorry For Not Offering Special Deals Right Now</h3>
            <h5 className='text-danger'>There is no deal available right now</h5>
            <h5 className='text-danger'>Please Keep Checking for deals on special occassion and days</h5>
            <img src={Sorry} alt="" />
            </div>
        </div>
    );
};

export default Deals;