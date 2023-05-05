import React from 'react';
import Banner from '../../Banner/Banner';
import FoodCollection from '../../FoodCollection/FoodCollection';
import './Home.css';
import Divider from '../../Divider/Divider';
const Home = () => {
    return (
        <div className='home'>
           <Banner></Banner>
           <Divider></Divider> 
           <FoodCollection></FoodCollection>
        </div>
    );
};

export default Home;