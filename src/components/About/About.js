import React from 'react'
import burger from '../../assets/Burger-removebg-preview.png'
import about_bg from '../../assets/about.jpg'

const About = () => {
  return (
    <div className=''>
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${about_bg})`, backgroundSize: 'cover' }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center md:text-start text-neutral-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl">
            <div className="">
              <img src={burger} alt="" srcSet="" />
            </div>
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">We Are Feane</h1>
              <p className="mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
              <button className="btn btn-accent btn-outline">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About