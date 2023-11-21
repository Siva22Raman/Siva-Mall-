import React,{useState,useEffect}from 'react';
import '../Styles/Snavbar.css';
import { FaSearch, FaUser, FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StoreList from '../pages/Storelist';
import Cloth from '../pages/Cloth';
function Snavbar() {
  const [user, setUser]=useState(null);
  const navigate=useNavigate();
  const navigatetopay=()=>{
    navigate('/loginform');
  }
  const navigatetosign=()=>{
    navigate('/signform');
  }
  useEffect(() => {
    // Fetch user details from the server using the JWT token
    const token = localStorage.getItem("token");
    if (token) {
      fetch("/getUserDetails", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, []);

  return (
    <nav className="second-navbar">
      <div className="second-navbar-container">
        <ul className="second-navbar-list">
          <li className="second-navbar-item">
            <a href="/">
              <button className="nav-button">Home</button>
            </a>
          </li>
          <li className="second-navbar-item">
            <a href="/Blog">
              <button className="nav-button" >About</button>
            </a>
          </li>
          <li className="second-navbar-item">
            {/* Add a nested ul for the dropdown menu */}
            <div className="nav-dropdown">
              <button className="nav-button">Store List</button>
              <ul className="dropdown-menu">
                <li><a href="/Cloth">Clothing</a></li>
                {/* <Link to="/cloth" >Clothing</Link> */}
                <li><a href="/Storelist">Dining</a></li>
                {/* Add more items as needed */}
              </ul>
            </div>
          </li>
          <li className="second-navbar-item">
            <a href="#Footer" >
              <button className="nav-button">Contact Us</button>
            </a>
          </li>
         &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          
          <li className="second-navbar-item">
         
            <a href="/loginform">
              <button className="nav-button" onClick={navigatetopay}>
                <FaSignInAlt /> Log In
              </button>
            </a>
          </li>
          <li className="second-navbar-item">
            <a href="/signupform">
              <button className="nav-button"onClick={navigatetosign}> Sign Up</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Snavbar;
