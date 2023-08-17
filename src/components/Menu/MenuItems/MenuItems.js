import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const MenuItems = ({ menuItem }) => {
    const { name, image, price, description } = menuItem;

    return (
        <div className="max-w-xs rounded-md shadow-md bg-base-content text-gray-100 m-auto">
            <img src={image} alt={name} className="object-cover object-center w-full rounded-t-md h-52 bg-gray-500" />

            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-wide">{name}</h2>
                    <p className="text-gray-300">{description}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-gray-100">{price}</p>
                    <Link to='/order'>
                        <div className="btn btn-outline btn-accent">
                            <ShoppingCartIcon className="h-6 w-6 rounded-full text-base-100" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MenuItems;
