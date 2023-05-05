import React from 'react';
import Menupic from '../../images/menu.jpg';
const Menu = () => {
    return (
        <div className='container menu'>
            <div className="row mt-5">
                <div className="col-12 col-md-12 col-lg-12">
                   <img src={Menupic} alt="" /> 
                </div>
            </div>
        </div>
    );
};

export default Menu;