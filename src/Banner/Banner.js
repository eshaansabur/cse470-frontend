import React from 'react';
import c1 from '../../src/images/cupcake.jpg';
import c2 from '../../src/images/cupcake-two.jpg';
import c3 from '../../src/images/cupcake-three.jpg';
const Banner = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={c1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={c2} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={c3} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;