import React, { useState } from 'react';

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className='container'>
      <div className='form-container'>
        <div className='form-toggle'>
          <button className={isLogin ? 'active' : ""}onClick={() => setIsLogin(true)}>Login</button>
          <button className={!isLogin ? 'active' : ""}onClick={() => setIsLogin(false)}>Sign Up</button>
        </div>

        {isLogin ? (
          <div className='login-form'>
            <h2>Login</h2>
            <input type='text' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button className='formBtns'>Login</button>
          </div>
        ) : (
          <div className='signup-form'>
            <h2>Sign Up</h2>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button className='formBtns'>Sign Up</button>
          </div>
        )}
      </div>
    </div>
  );
}
