import React from 'react';
import bg from '../../../assets/bg.jpg';

const Banner = () => {
    return (
        <div className="block">

            <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>


                <div className="hero-overlay bg-opacity-60"></div>

                <div className="hero-content text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">Fast Food Restaurant</h1>
                        <p className="mb-5">Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
                        <button className="btn btn-accent">Book Table Now</button>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Banner;


