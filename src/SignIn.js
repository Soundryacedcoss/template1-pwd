import React from 'react'
export const SignIn = () => {
  return (
    <div>
        <div className='InputDiv'><input type="text" placeholder="Username" /></div>
        <div className='InputDiv'><input type="text" placeholder="Password" /></div>
        <div className='SignButtonDiv'><button className='button'>Sign In</button></div>
    </div>
  )
}
