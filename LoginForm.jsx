import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className='wrapper'>
      <form action=''>
        <h1>Login</h1>
        <div className="input-box">
          <input type='text' placeholder='Username' required />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input type='password' placeholder='Password' required />
          <FaLock className='icon' />
        </div>
        <div className="input-box">
          <input type='text' placeholder='First Name' required />
        </div>
        <div className="input-box">
          <input type='text' placeholder='Last Name' required />
        </div>
        <div className="input-box">
          <input type='email' placeholder='E-mail' required />
        </div>
        <div className="input-box">
          <input type='tel' placeholder='Phone Number' required />
        </div>
        <div className="input-box">
          <select required>
            <option value="">Select Country</option>
  <option value="USA">United States</option>
  <option value="CAN">Canada</option>
  <option value="UK">India</option>
</select>
        </div>
        <div className="input-box">
          <select required>
            <option value="">Select City</option>
            <option value="Jaipur">Jaipur</option>
  <option value="Udipur">Udipur</option>
  <option value="Delhi">Delhi</option>
          </select>
        </div>
        <div className="input-box">
          <input type='text' placeholder='PAN Number' required />
        </div>
        <div className="input-box">
          <input type='text' placeholder='Aadhar Number' required />
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
          <a href='#'>Forgot password?</a>
        </div>
        <button type='submit'>Login</button>
        <div className="register-link">
          <p>Don't have an account? <a href='#'>Register</a></p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;
