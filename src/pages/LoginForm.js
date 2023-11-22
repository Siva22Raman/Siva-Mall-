import React, { useState } from 'react';
import "../Styles/LoginForm.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Snavbar from '../components/Snavbar';
import Swal from 'sweetalert2';
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const correctPassword = '1234567'; // Replace this with your actual authentication logic

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }

    if (password === correctPassword) {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Billing information received successfully!',
      });
      navigate('/Pay');
    } else {
      alert('Invalid username or password');
    }
  };
  

  return (
   
    <div className="home-section">
      <Snavbar/>
    <div className="login-form">
      <div className="form-container"style={{width: "580px", height:"500px"}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="username"
                  name="username"
                  required
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
          />
        </div><br></br>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
                  name="password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
          />
        </div><br></br><br></br>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signupform"><b>Sign up</b></Link></p>
    </div>
    </div>
        
      </div>
      
  );
}

export default LoginForm;
