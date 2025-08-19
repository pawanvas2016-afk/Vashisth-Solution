import { useRef} from "react";
import "./Fillform.css"; 

const Fillform = () => {
  const nameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const queryRef = useRef();

  const sendData = async (e) =>{
    e.preventDefault();
    try {
      const dataToSend = {
        name: nameRef.current.value,
        address: addressRef.current.value,
        phone: phoneRef.current.value,
        query: queryRef.current.value,
      };
      alert("Form submitted successfully");
      nameRef.current.value = "";
      addressRef.current.value = "";
      phoneRef.current.value = "";
      queryRef.current.value = "";
      await fetch("https://vashisth-solution-b-5.onrender.com/usercont", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });
      
    } catch (error) {
      if (err.response && err.response.status === 400 || 401 || 402 || 403) {
        alert("Invalid input: " + err.response.data.message);
      } 
      else {
        alert("Something went wrong. Please try again.");
        console.error("Server error:", err);
      } 
    }
  }


  return (
    <div className="form-container">
      <h2>Contact Form</h2>
      <p>Fill the form to contact for any query or any online service.</p>

      <form onSubmit={sendData} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input placeholder="Parveen Vashisth" type="text" id="name" ref={nameRef} required />
        </div>
        <div className="form-group">
          <label htmlFor="query">Query</label>
          <input placeholder="Salary statement slip" type="text" id="query" ref={queryRef} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input placeholder="Delhi, India" type="text" id="address" ref={addressRef} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input placeholder="+91 9876543210" type="number" id="phone" ref={phoneRef} required />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Fillform;
