import React from 'react'
export const SignUp = () => {
  return (
    <div className='SignUp'>
      <div className='InputDiv'><input type="text" placeholder="Username" /></div>
      <div className='InputDiv'><input type="text" placeholder="Full Name" /></div>
      <div className='InputDiv'><input type="text" placeholder="Email" /></div>
      <div className='InputDiv'><input type="text" placeholder="Password" /></div>
      <label class="container">Agree With <a href="">Term & conditions</a>
      <input type="checkbox" />
      <span class="checkmark"></span>
       </label>
       
     <div className='SignButtonDiv'><button className='button'>SignUp</button></div>
       <p>I am already a member</p>
    </div>
  )
}
