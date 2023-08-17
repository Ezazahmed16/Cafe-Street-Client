import React from 'react'
import Banner from './Banner/Banner'
import About from '../About/About'
import Order from '../Order/Order'
import Menu from '../Menu/Menu'
import { EyeIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <div className="">
        <Menu numberOfItemsToShow={3}></Menu>
        <Link to='/menu'>
          <div className="btn btn-outline btn-base my-3 flex max-w-xs m-auto">See All
            <EyeIcon className="h-6 w-6 text-base" />
          </div>
        </Link>
      </div>

      <About></About>
      <Order></Order>
    </div>
  )
}

export default Home