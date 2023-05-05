import React from 'react';
import './FoodCollection.css';
import { useNavigate } from 'react-router-dom';
const FoodCollection = () => {
    const navigate = useNavigate();
    const showMenu = () =>{
        navigate('/menu');
    }
    const showDeals = () =>{
        navigate('/deals');
    }
    return (
        <div className='container food'>
            <div className="row mt-5">
                <h1 className='mb-5'>Our Menu & Order Online</h1>
                <div className="col-12 col-md-6 col-lg-6">
                    <div className="d-flex align-items-center">
                        <div className="mainlft mb-3">
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <h1 className='mt-2'>Check Out Our Menu Items & Pricing</h1>
                            <button onClick={showMenu} className='btn btn-danger px-4'>See Menu</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                <div className="d-flex align-items-center">
                        <div className="mainrgt mb-3">
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <h1 className='mt-2'>Check Out Our Promos and Discounts</h1>
                            <button onClick={showDeals} className='btn btn-danger px-4'>Search Discount</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCollection;