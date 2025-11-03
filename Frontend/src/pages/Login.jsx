import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgot, setIsForgot] = useState(false);
  const [email, setEmail] = useState('');

  // 📨 Mock password reset handler
  const handleForgotPassword = (e) => {
    e.preventDefault();

    if (!email) {
      alert('⚠️ Please enter your email address.');
      return;
    }

    // Simulate backend email sending delay
    setTimeout(() => {
      alert(`📧 Password reset link has been sent to ${email}`);
      setEmail('');
      setIsForgot(false); // return to login screen
    }, 1000);
  };

  return (
    <div className="login-page">
      <div className="form-container">

        {/* Show toggle only if not on Forgot Password screen */}
        {!isForgot && (
          <div className="form-toggle">
            <button
              className={isLogin ? 'active' : ''}
              onClick={() => {
                setIsLogin(true);
                setIsForgot(false);
              }}
            >
              Login
            </button>
            <button
              className={!isLogin ? 'active' : ''}
              onClick={() => {
                setIsLogin(false);
                setIsForgot(false);
              }}
            >
              Sign Up
            </button>
          </div>
        )}

        {/* FORGOT PASSWORD SCREEN */}
        {isForgot ? (
          <div className="form">
            <h2>Forgot Password</h2>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>
              Enter your registered email address and we’ll send you a link to reset your password.
            </p>
            <form onSubmit={handleForgotPassword}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="formBtn">Send Reset Link</button>
            </form>
            <p>
              Remember your password?{' '}
              <a href="#" onClick={() => setIsForgot(false)}>
                Back to Login
              </a>
            </p>
          </div>
        ) : isLogin ? (
          // LOGIN SCREEN
          <div className="form">
            <h2>Login</h2>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#" onClick={() => setIsForgot(true)}>
              Forgot Password?
            </a>
            <button className="formBtn">Login</button>
            <p>
              Not a member?{' '}
              <a href="#" onClick={() => setIsLogin(false)}>
                Sign up now
              </a>
            </p>
          </div>
        ) : (
          // SIGNUP SCREEN
          <div className="form">
            <h2>Sign Up</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button className="formBtn">Sign Up</button>
            <p>
              Already have an account?{' '}
              <a href="#" onClick={() => setIsLogin(true)}>
                Login
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
