import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {

    const [show , setshow] = useState("noshow");

    const handlenav =  () =>  {
        if(show === "noshow"){
            setshow("show")
        }else{
            setshow("noshow")
        }
    }


  return (
        <>
        <div className="headerbar">
           <div className="head-sm">
                <div className="logo">
                    <h1><a href="/">Vashisth Solutions</a></h1>
                </div>
                <div className="hamburger" onClick={handlenav}>
                    <GiHamburgerMenu />
                </div>
           </div>
           <div className={show}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/form">Direct form</a></li>
                        <li><a href="/admin">Administrator</a></li>
                    </ul>
           </div>
        </div>
        </>
  );
};

export default Header;
