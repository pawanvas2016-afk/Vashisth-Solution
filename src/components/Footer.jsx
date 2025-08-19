import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {

  const [ct , setct] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await fetch("https://vashisth-solution-b-5.onrender.com/cont");
                const data = await res.json();  
                setct(data);
                console.log(data)
            } catch (err) {
                alert("something went wrong!!!");
                console.error(err);
            }
        };
        fetchContacts();
    }, []);

  return (
    <footer className="footer bg-dark text-light pt-4">
      <div className="container">
        <div className="row" style={{justifyContent:"space-between"}}>
          {/* Company Info */}
          <div className="col-md-4 mb-3">
            <h5>Vashisth Solutions</h5>
            <p>
              Your trusted Common Service Center for digital services, 
              government schemes, bill payments, PAN, Aadhaar, and more.
              <br /> <br />
              <b style={{color:"red"}}>Contact to get your own Website :  9812721510</b>
            </p>
          </div>

          {/* Contact + Social */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>
    📍 {ct[0]?.address || "Address not available"} <br />
    📞 {ct[0]?.phone || "Phone not available"} <br />
    ✉️ {ct[0]?.gmail || "Email not available"}
  </p>
            <div className="d-flex gap-3">
              <a href={ct[0]?.fb || "#"} className="text-light" target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
    </a>
    <a href={ct[0]?.insta || "#"} className="text-light" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />
        <p className="text-center mb-0 pb-2">
          © {new Date().getFullYear()} CSC Vashisth Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
