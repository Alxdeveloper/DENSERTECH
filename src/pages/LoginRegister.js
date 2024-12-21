import React, { useState } from 'react';
import './LoginRegister.css';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle state for login/register

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form>
          {isLogin ? (
            <>
              <div className="input-group">
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="input-group">
                <label>Password:</label>
                <input type="password" placeholder="Enter your password" required />
              </div>
              <button type="submit" className="auth-button">Login</button>
            </>
          ) : (
            <>
              <div className="input-group">
                <label>Username:</label>
                <input type="text" placeholder="Choose a username" required />
              </div>
              <div className="input-group">
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="input-group">
                <label>Password:</label>
                <input type="password" placeholder="Enter your password" required />
              </div>
              <button type="submit" className="auth-button">Register</button>
            </>
          )}
        </form>

        <div className="toggle-link">
          <span onClick={toggleForm}>
            {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
