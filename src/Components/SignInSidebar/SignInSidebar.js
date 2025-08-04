import React, { useState } from 'react';
import './SignInSidebar.css';

export default function SignInSidebar({ onLogin }) {
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleData = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = inputData;

    if (!name || !email || !password) {
      alert('All fields are mandatory');
      return;
    }

    alert('Logged in successfully!');
    onLogin(inputData);
  };

  return (
    <div className="sidebar-overlay" onClick={() => {}}>
      <div className="signin-sidebar" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => {}}>×</button>
        <form className='signin-form' onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className='signin-input'
            value={inputData.name}
            onChange={handleData}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className='signin-input'
            value={inputData.email}
            onChange={handleData}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className='signin-input'
            value={inputData.password}
            onChange={handleData}
          />
          <button className="login-btn">Login</button>
          <p className="disclaimer">
            By clicking on Login, I accept the Terms & Conditions & Privacy Policy
          </p>
        </form>
      </div>
    </div>
  );
}
