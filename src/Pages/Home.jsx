import React, { useState } from "react";
import Main from "../Components/Main";
import Footer from "../Components/Footer";
import "../Styles/NavBar.css";
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate from react-router-dom

function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State to toggle the login modal
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const navigate = useNavigate(); // Hook to manage redirection

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "Morocco@gmail.com" && password === "vivamaroc") {
      navigate("/afterlogin"); // Redirect to afterlogin page
    } else {
      alert("Invalid email or password"); // Alert if credentials are incorrect
    }
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav>
        <img src="/logo/logo-equipe.png" alt="logo" />
        <div className="links">
          <Link to="/">Home</Link>
        </div>
        <button onClick={() => setIsLoginOpen(true)}>Login</button>
      </nav>

      {/* Main Content */}
      <Main />
      <Footer />

      {/* Modal for Login Form */}
      {isLoginOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsLoginOpen(false)} // Close modal when clicking on overlay
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button
              className="close-btn"
              onClick={() => setIsLoginOpen(false)}
            >
              &times;
            </button>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update password state
                  required
                />
              </div>
              
              <button type="submit" className="submit-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
