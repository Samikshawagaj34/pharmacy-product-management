import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [signupData, setSignupData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    address: '',
    role: 'customer',
  });
  const [loginData, setLoginData] = useState({
    emailOrPhone: '',
    password: '',
    role: 'customer',
  });

  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // ----------------- SIGNUP -----------------
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { name, phone, email, password, address, role } = signupData;

    if (!name || !phone || !email || !password || !address) {
      alert('⚠️ Please fill in all fields.');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('⚠️ Enter a valid email.');
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert('⚠️ Enter a valid 10-digit phone number.');
      return;
    }

    if (!passwordRegex.test(password)) {
      alert(
        '⚠️ Password must be at least 8 characters, include uppercase, lowercase, number & special character.'
      );
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/signup', signupData);
      if (response.data.success) {
        alert('✅ Signed up successfully! You can now login.');
        setSignupData({ name: '', phone: '', email: '', password: '', address: '', role: 'customer' });
        setIsLogin(true);
      } else {
        alert('⚠️ ' + response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert('❌ Something went wrong during signup.');
    }
  };

  // ----------------- LOGIN -----------------
  const handleLogin = async (e) => {
    e.preventDefault();
    const emailOrPhone = loginData.emailOrPhone.trim();
    const password = loginData.password.trim();
    const role = loginData.role;

    if (!emailOrPhone || !password) {
      alert('⚠️ Enter both credentials.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/login', { emailOrPhone, password, role });
      if (response.data.success) {
        alert(`✅ Welcome, ${response.data.user.name}!`);
        setLoginData({ emailOrPhone: '', password: '', role: 'customer' });
        if (role === 'admin') navigate('/admin-dashboard');
        else navigate('/');
      } else {
        alert('❌ ' + response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert('❌ Something went wrong during login.');
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body p-4">
                <div className="mb-3 text-center">
                  <button
                    className={`btn btn-outline-success me-2 ${isLogin ? 'active' : ''}`}
                    onClick={() => setIsLogin(true)}
                  >
                    Login
                  </button>
                  <button
                    className={`btn btn-outline-success ${!isLogin ? 'active' : ''}`}
                    onClick={() => setIsLogin(false)}
                  >
                    Regiter
                  </button>
                </div>

                {/* ----------------- LOGIN FORM ----------------- */}
                {isLogin ? (
                  <div>
                    <h3 className="text-center mb-4">Login</h3>
                    <form onSubmit={handleLogin}>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email or Phone"
                          value={loginData.emailOrPhone}
                          onChange={(e) =>
                            setLoginData({ ...loginData, emailOrPhone: e.target.value })
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          value={loginData.password}
                          onChange={(e) =>
                            setLoginData({ ...loginData, password: e.target.value })
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <select
                          className="form-select"
                          value={loginData.role}
                          onChange={(e) =>
                            setLoginData({ ...loginData, role: e.target.value })
                          }
                        >
                          <option value="customer">Customer</option>
                          <option value="admin">Admin</option>
                        </select>
                      </div>
                      <div className="d-grid mb-3">
                        <button type="submit" className="btn btn-success">
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  /* ----------------- SIGNUP FORM ----------------- */
                  <div>
                    <h3 className="text-center mb-4">Sign Up</h3>
                    <form onSubmit={handleSignUp}>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                          value={signupData.name}
                          onChange={(e) =>
                            setSignupData({ ...signupData, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                          value={signupData.phone}
                          onChange={(e) =>
                            setSignupData({ ...signupData, phone: e.target.value })
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          value={signupData.email}
                          onChange={(e) =>
                            setSignupData({ ...signupData, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          value={signupData.password}
                          onChange={(e) =>
                            setSignupData({ ...signupData, password: e.target.value })
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address"
                          value={signupData.address}
                          onChange={(e) =>
                            setSignupData({ ...signupData, address: e.target.value })
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <select
                          className="form-select"
                          value={signupData.role}
                          onChange={(e) =>
                            setSignupData({ ...signupData, role: e.target.value })
                          }
                        >
                          <option value="customer">Customer</option>
                          <option value="admin">Admin</option>
                        </select>
                      </div>
                      <div className="d-grid mb-3">
                        <button type="submit" className="btn btn-success">
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
