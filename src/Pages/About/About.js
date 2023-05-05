import React from 'react';
import './About.css';
import treat from '../../images/treat.jpg';
import Velvet from '../../images/velvet.jpg';
const About = () => {
    return (
        <div className='container about'>
            <div className="row mt-5 d-flex d-flex flex-row align-items-center justify-content-between">
                <div className="col-12 col-md-6 col-lg-6">
                    <h1>Who We Are</h1>
                    <div className='text-start mt-3'>
                        <p>Empanada means to wrap or coat in bread, an empanada is a delicious stuffed pastry that can be either baked or fried. Empanadas can be filled with just about anything from meat, to veggies, and/or cheese. We, Empanadas is not only a food store, but we turned your hunger into its passion, fashion, and creativity.</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <img src={treat} alt="" />
                </div>
            </div>

            <div className="row mt-5 d-flex d-flex flex-row align-items-center justify-content-between">
                <div className="col-12 col-md-6 col-lg-6">
                    <img src={Velvet} alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                <h1>What We Do</h1>
                    <div className='text-start mt-3'>
                        <p>We make authentic Argentine empanadas and many more items that are unique in taste with our special spices and flavors. We believe in quality. We do care for your taste. We are heading towards our vision to create a legacy of taste!!</p>
                    </div>
                </div>
            </div>

            <div className="row mt-5 mb-3">
                <div className="col-12 col-md-12 col-lg-12 col-centered mb-5">
                    <div className="d-flex align-items-center">
                        <div className="maintxt mb-3">
                            <br />
                            <br />
                            <br />
                            <h3 className='mt-5'>Welcome to Our Shop</h3>
                            <h4 className='mt-2'>Check Out Our Latest Products</h4>
                            <button className='btn btn-danger px-4'>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;