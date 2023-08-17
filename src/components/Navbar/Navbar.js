import React, {  } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HomeIcon, Bars4Icon, IdentificationIcon, BuildingStorefrontIcon } from '@heroicons/react/24/solid'
import logo from "../../assets/icon1.png";


const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-content text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">

            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-content rounded-box w-52">
              <li className='my-1'>
                <NavLink to='/home'>
                  <div>
                    <HomeIcon className="h-5 w-5 text-base-100" />
                  </div>
                  Home
                </NavLink>
              </li>
              <li className='my-1'>
                <NavLink to='/menu'>
                  <div className="">
                    <Bars4Icon className="h-5 w-5 text-base-100" />
                  </div>
                  Menu
                </NavLink>
              </li>
              <li className='my-1'>
                <NavLink to='/about'>
                  <div className="">
                    <IdentificationIcon className="h-5 w-5 text-base-100" />
                  </div>
                  About
                </NavLink>
              </li>
              <li className='my-1'>
                <NavLink to='/order'>
                  <div className="">
                    <BuildingStorefrontIcon className="h-5 w-5 text-base-100" />
                  </div>
                  Book Table
                </NavLink>
              </li>
            </ul>
          </div>

          <Link to='/' className="font-semibold normal-case text-base md:text-2xl mx-2 flex items-center min-w-fit">Cafe Street 
            <img src={logo} className='w-10 h-10 mx-2' alt="" srcSet="" />
          </Link>

        </div>
        <div className="navbar-end mr-3 p-1 hidden lg:flex">
          <ul className="menu menu-horizontal mx-1">
            <li className='mx-1'>
              <NavLink to='/home'>
                <div>
                  <HomeIcon className="h-5 w-5 text-base-100" />
                </div>
                Home
              </NavLink>
            </li>
            <li className='mx-1'>
              <NavLink to='/menu'>
                <div className="">
                  <Bars4Icon className="h-5 w-5 text-base-100" />
                </div>
                Menu
              </NavLink>
            </li>
            <li className='mx-1'>
              <NavLink to='/about'>
                <div className="">
                  <IdentificationIcon className="h-5 w-5 text-base-100" />
                </div>
                About
              </NavLink>
            </li>
            <li className='mx-1'>
              <NavLink to='/order'>
                <div className="">
                  <BuildingStorefrontIcon className="h-5 w-5 text-base-100" />
                </div>
                Book Table
              </NavLink>
            </li>
          </ul>

        </div>
      </div>
    </div >
  )
}

export default Navbar