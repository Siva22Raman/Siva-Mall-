import React,{useState,useEffect}from 'react';
import '../Styles/Snavbar.css';
import { FaSearch, FaUser, FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StoreList from '../pages/Storelist';
import Cloth from '../pages/Cloth';
function Nav1() {
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
        <img src="https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg" style={{width:"60px",height:"60px".at,borderRadius:"50%",marginLeft:"-120px"}} />
          </li>&emsp;&emsp;
          <li className="second-navbar-item">
            <a href="/">
              <button className="nav-button">Home</button>
            </a>
          </li>
          <li className="second-navbar-item">
            <a href="/about">
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
            <a href="/contact" >
              <button className="nav-button">Contact Us</button>
            </a>
          </li>
          &emsp;&emsp;&emsp;
          
          <li className="second-navbar-item">
            <div onClick={()=> navigate('/')}>
         <img src={"https://cdn-icons-png.flaticon.com/512/1053/1053210.png"} className="logout" style={{width:"50px",height:"50px",marginLeft:"526px"}}/>
         
         </div>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Nav1;
