import React from 'react'
import icon1 from '../../../assets/icon1.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content  justify-center md:justify-stretch items-start md:items-center">

        <div className=''>
          <div className="flex items-center">
            <div className="px-2">
              <img className='w-12 h-12' src={icon1} alt="" />
            </div>
            <Link to='/' className="font-semibold normal-case text-xl md:text-2xl">Cafe Street</Link>
          </div>
          <div className="ml-2 md:ml-12">
            <p> Call +01 1234567890</p>
            <p>demo@gmail.com</p>
          </div>
        </div>

        <div>
          <span className="footer-title">Developed BY</span>
          <div className="">
            <p className="">Ezaz Ahmed</p>
            <p className="">E-mail : ezazrahul794@gmail.com</p>
            <p className="">Call : +8801726065822</p>
          </div>

          <div className="grid grid-flow-col gap-4">

          </div>
        </div>

      </footer>
    </div>
  )
}

export default Footer