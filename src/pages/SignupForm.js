import React, { useState} from 'react';
import "../Styles/SignupForm.css";
import { Link, useNavigate } from 'react-router-dom';
import Snavbar from '../components/Snavbar';
function SignupForm({onClose}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (
    
      username === '' ||
      email === '' ||
      password === '' ||
      contactNumber === '' 
    ) {
      alert('Please fill in all fields');
    } else {
      try {
        const response = await fetch('/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
           
            username,
           
            email,
            password,
            contactNumber,
          }),
        });
      
        if (response.ok) {
          
              navigate('/loginform');
            
          } else {
          const data = await response.json();
          console.error(data); // Log the error response to the console
          alert('An error occurred during registration');
        }
      } catch (error) {
        console.error(error); // Log any unhandled exceptions to the console
        alert('An error occurred during registration');
      }
    }      
  };

  return (
    <div className="home-section">
      <Snavbar/>
    <div className="signup-form">
        <div className="form-container"style={{width: "580px"}}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label>Name:</label>
          <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
        </div>
        <div className="form-group">
          <label>Contact:</label>
          <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    required
                    placeholder="Contact Number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
        </div><br></br>
        <button type="submit">Sign Up</button>
      </form>
      <p>already have an account? <Link to="/loginform"><b>Login</b></Link></p>
    </div>
    </div>
        
        </div>
  );
}

export default SignupForm;