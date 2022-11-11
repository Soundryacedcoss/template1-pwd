import React from 'react'
import { Link } from 'react-router-dom'
import img1 from './image/SVG-water-wave-animation.jpg'
export const Navbar = () => {
  return (
    <>
        <div className='image'>
      <img src={img1} alt="" />
      </div>
      <div className='Navbar'>
        <Link className='Link' to={"/"}>Sign Up</Link>
        <Link className='Link' to={"/SignIn"} >Sign In</Link>
    </div>
    </>
  )
}
