import {useState} from "react";

const NotFound = () => {

     const [hovered, setHovered] = useState(false);




  return (
    <div style={{ paddingTop: "3rem", textAlign: "center" , justifyContent:'center' , height:'65vh' , width:'100vw' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <a href={"/"}>
      <span style={{fontSize:'2rem' , fontWeight:'3rem' , justifyContent:'center', color:'red' , border:'2px solid red' , borderRadius:'15px' , padding:'2rem' ,  color: hovered ? "white" : "red",
    backgroundColor: hovered ? "red" : "transparent", }}
        onMouseEnter={() => setHovered(true)}  onMouseLeave={() => setHovered(false)}>
            Go to Homepage
    </span>
    </a>
      
    </div>
  );
};

export default NotFound;