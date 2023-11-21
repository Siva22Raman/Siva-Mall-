import React from "react";
import Snavbar from "./Snavbar";
function Contact(){
    return(
        <div>
        <Snavbar/><br></br><br></br><br></br><br></br>
            <iframe
        title="Embedded Google Map"
        width={600}
        height={450}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.683750729461!2d80.21278157830243!3d12.992067915187421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526763b48e60eb%3A0xdb3a29009036c251!2sPhoenix%20Marketcity!5e0!3m2!1sen!2sin!4v1696351754178!5m2!1sen!2sin"
        frameBorder={0}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 'none' }}
        ></iframe></div>
    );
}
export default Contact;

