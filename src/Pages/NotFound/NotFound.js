import React from 'react';
import Sorry from '../../images/sorry.jpg';
const NotFound = () => {
    return (
        <div className='container mt-5 mb-5'>
            <div className="row mt-5 mb-5">
            <h3 className='text-danger'>The page you requested for can not be reached</h3>
            <img src={Sorry} alt="" />
            </div>
        </div>
    );
};

export default NotFound;