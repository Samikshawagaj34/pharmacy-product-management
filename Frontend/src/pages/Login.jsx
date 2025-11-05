import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer/Footer'; // ✅ Import Footer
import './Login.css';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgot, setIsForgot] = useState(false);
  const [email, setEmail] = useState('');
  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!email) {
      alert('⚠️ Please enter your email address.');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('⚠️ Please enter a valid email address.');
      return;
    }

    setTimeout(() => {
      alert(`📧 Password reset link has been sent to ${email}`);
      setEmail('');
      setIsForgot(false);
    }, 1000);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = signupData;

    if (!email || !password || !confirmPassword) {
      alert('⚠️ Please fill in all fields.');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('⚠️ Please enter a valid email address.');
      return;
    }

    if (!passwordRegex.test(password)) {
      alert(
        '⚠️ Password must be at least 8 characters long, include uppercase, lowercase, number, and special character.'
      );
      return;
    }

    if (password !== confirmPassword) {
      alert('⚠️ Passwords do not match.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find((u) => u.email === email);

    if (userExists) {
      alert('⚠️ An account with this email already exists.');
      return;
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('✅ Signed up successfully! You can now log in.');
    setSignupData({ email: '', password: '', confirmPassword: '' });
    setIsLogin(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = loginData;

    if (!email || !password) {
      alert('⚠️ Please enter both email and password.');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('⚠️ Please enter a valid email address.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (validUser) {
      alert(`✅ Welcome back, ${email}!`);
      setLoginData({ email: '', password: '' });
      navigate('/');
    } else {
      alert('❌ Invalid credentials. Please try again.');
    }
  };

  return (
    <>
      {/* ✅ Main Login / Signup Section */}
      <div className="login-page">
        <div className="form-container">
          {/* Toggle only if not on Forgot Password screen */}
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
            // ✅ LOGIN SCREEN
            <div className="form">
              <h2>Login</h2>
              <form onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="Email"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
                <a href="#" onClick={() => setIsForgot(true)}>
                  Forgot Password?
                </a>
                <button type="submit" className="formBtn">Login</button>
              </form>
              <p>
                Not a member?{' '}
                <a href="#" onClick={() => setIsLogin(false)}>
                  Sign up now
                </a>
              </p>
            </div>
          ) : (
            // ✅ SIGNUP SCREEN
            <div className="form">
              <h2>Sign Up</h2>
              <form onSubmit={handleSignUp}>
                <input
                  type="email"
                  placeholder="Email"
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData({ ...signupData, email: e.target.value })
                  }
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={signupData.confirmPassword}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                <button type="submit" className="formBtn">Sign Up</button>
              </form>
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

      {/* ✅ Full-width Footer (same style as AboutUs & ContactUs) */}
      <div className="m-0 p-0 w-100" style={{ marginTop: 0 }}>
        <Footer />
      </div>
    </>
  );
}
