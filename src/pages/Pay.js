import React,{useState,useEffect} from "react";
import Nav1 from "../components/Nav1";
import BillingAddressForm from "./BillingAddressForm";
import Paytm from '../images/Pa.png';
import Phonepe from '../images/Phon.png';

function Pay(){
    const [user, setUser]=useState(null);
    const [showFirstImage, setShowFirstImage] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false); 
  
    const toggleImages = () => {
      setShowFirstImage(!showFirstImage);
    };
    const handleFormSubmit = () => {
      setFormSubmitted(true);
      setShowFirstImage(true);
    };
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
    
    return(
        <div>
          <Nav1 />
            <div className="profile">
         {user && (
            <div>
              <p style={{fontSize:"20px",color:"black"}}><b>LOGGEDIN BY, {user.username}</b></p>
              {/* Add more user details here */}
            </div>
          )}
          </div>
          <div className="form-with-image">
        <BillingAddressForm onFormSubmit={handleFormSubmit}/>
      </div>
      {formSubmitted && (
        <>
     
      {showFirstImage ? (
        <img
          src={Phonepe}// Adjust the path as per your folder structure
          alt="Your Image Alt Text"
          className="image-style" // Add your preferred CSS class for styling the image
          style={{ width: "400px", height: "500px", marginTop: "-700px", marginLeft: "800px" }}
        />
      ) : (
        <img
          src={Paytm} // Adjust the path as per your folder structure
          alt="Your Image Alt Text"
          className="image-style" // Add your preferred CSS class for styling the image
          style={{ width: "400px", height: "500px", marginTop: "-700px", marginLeft: "800px" }}
        />
      )}

      <button onClick={toggleImages} style={{ marginTop: "20px" ,color:"purple",fontFamily:"sans-serif",fontSize:"20px",fontWeight:"bolder"}}>
        {showFirstImage ? "Procced with Paytm" : "Proceed with Phonepe"}
      </button>
      </>
      )}
          </div>
    );
}
export default Pay;