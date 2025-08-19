import { useEffect } from "react";
import { useRef , useState} from "react";

const Admin = () => {

  const Url = import.meta.env.VITE_ADMIN;

    const nameRef = useRef();
    const typeRef = useRef();
    const feesRef = useRef();
    const aboutRef= useRef();

    const namejRef = useRef();
    const typejRef = useRef();
    const feesjRef = useRef();
    const fromjRef = useRef();
    const tojRef = useRef();
    const deptjsRef = useRef();
    const postjRef = useRef();
    const agejRef = useRef();
    const salaryjRef = useRef();
    const qualificationjRef = useRef();

    const namecref = useRef();
    const gmailcref = useRef();
    const phonecref = useRef();
    const fbcref = useRef();
    const instacref = useRef();
    const addresscref = useRef();


    const sendservice = async (e) =>{
        e.preventDefault();
        try {
        const dataToSend = {
            name: nameRef.current.value,
            type: typeRef.current.value,
            fees: feesRef.current.value,
            about: aboutRef.current.value,
        };
        alert("Form submitted successfully");
        nameRef.current.value = "";
        typeRef.current.value = "";
        feesRef.current.value = "";
        aboutRef.current.value = "";
        await fetch("https://vashisth-solution-b-5.onrender.com/services", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataToSend),
        });
        } catch (err) {
        if (err.response && err.response.status === 400 || 401 || 402 || 403) {
            alert("Invalid input: " + err.response.data.message);
        } 
        else {
            alert("Something went wrong. Please try again.");
            console.error("Server error:", err);
        } 
        }
    }


    const sendjob = async (e) =>{
        e.preventDefault();
        try {
        const dataToSend = {
            name: namejRef.current.value,
            type: typejRef.current.value,
            fees: feesjRef.current.value,
            fromDate: fromjRef.current.value,
            toDate: tojRef.current.value,
            department: deptjsRef.current.value,
            post: postjRef.current.value,
            age: agejRef.current.value,
            salary: salaryjRef.current.value,
            qualification: qualificationjRef.current.value,
        };
        alert("Form submitted successfully");
        namejRef.current.value = "";
        typejRef.current.value = "";
        feesjRef.current.value = "";
        fromjRef.current.value = "";
        tojRef.current.value = "";
        deptjsRef.current.value = "";
        postjRef.current.value = "";
        agejRef.current.value = "";
        salaryjRef.current.value = "";
        qualificationjRef.current.value = "";
        await fetch("https://vashisth-solution-b-5.onrender.com/jobs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataToSend),
        });
        } catch (err) {
        if (err.response && err.response.status === 400 || 401 || 402 || 403) {
            alert("Invalid input: " + err.response.data.message);
        } 
        else {
            alert("Something went wrong. Please try again.");
            console.error("Server error:", err);
        } 
        }
    }

    const sendCont = async (e) => {
        e.preventDefault();
        const dataToSend = {
        name: namecref.current.value,
        gmail: gmailcref.current.value,
        phone: phonecref.current.value,
        fb: fbcref.current.value,
        insta: instacref.current.value,
        address: addresscref.current.value,
        };
        alert("Contact saved successfully!");
        namecref.current.value = "";
        gmailcref.current.value = "";
        phonecref.current.value = "";
        fbcref.current.value = "";
        instacref.current.value = "";
        addresscref.current.value = "";
        try {
        const res = await fetch("https://vashisth-solution-b-5.onrender.com/cont", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataToSend),
        });
        }catch (err) {
            if (err.response && err.response.status === 400 || 401 || 402 || 403) {
                alert("Invalid input: " + err.response.data.message);
            } 
            else {
                alert("Something went wrong. Please try again.");
                console.error("Server error:", err);
            } 
        }
    }

    const [m , setm] = useState([]);
    
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await fetch("https://vashisth-solution-b-5.onrender.com/usercont");
                const data = await res.json();  
                setm(data.reverse());
            } catch (err) {
                alert("something went wrong!!!");
                console.error(err);
            }
        };
        fetchContacts();
    }, []);

    
  const inputStyle = {
    padding: "10px",
    margin: "6px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: "#f8f9fa",
    color: "#212529",
  };

  const formWrapperStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "25px",
    backgroundColor: "#f1f1f1",
    color: "#212529",
    maxWidth: "800px",
    margin:"auto"
  };

  const buttonStyle = {
    backgroundColor: "#212529",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const sectionTitleStyle = {
    color: "#212529",
    marginBottom: "10px",
    borderBottom: "1px solid #ccc",
    paddingBottom: "5px",
  };

  const cardListStyle = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  };

  const cardItemStyle = {
    padding: "10px",
    borderBottom: "1px solid #ccc",
  };





    return (
        <>
            <h2 style={{ color: "#212529", textAlign: "center", marginBottom: "25px" }}>
        Admin Panel
      </h2>
            
                  <div style={formWrapperStyle}>
        <h3 style={sectionTitleStyle}>Services</h3>
        <form onSubmit={sendservice}>
          <input placeholder="Name - PAN card" type="text" ref={nameRef} style={inputStyle} required />
          <input placeholder="Type - Document" type="text" ref={typeRef} style={inputStyle} required />
          <input placeholder="Fees" type="number" ref={feesRef} style={inputStyle} required />
          <input placeholder="About" type="text" ref={aboutRef} style={inputStyle} required />
          <button style={buttonStyle}>Done</button>
        </form>
      </div>


            <div style={formWrapperStyle}>
        <h3 style={sectionTitleStyle}>Add Jobs</h3>
        <form onSubmit={sendjob}>
          <input placeholder="Job name" type="text" ref={namejRef} style={inputStyle} required />
          <input placeholder="Type" type="text" ref={typejRef} style={inputStyle} required />
          <input placeholder="Fees" type="number" ref={feesjRef} style={inputStyle} required />
          <input placeholder="From date" type="date" ref={fromjRef} style={inputStyle} required />
          <input placeholder="To date" type="date" ref={tojRef} style={inputStyle} required />
          <input placeholder="Department" type="text" ref={deptjsRef} style={inputStyle} required />
          <input placeholder="Post" type="text" ref={postjRef} style={inputStyle} required />
          <input placeholder="Age" type="number" ref={agejRef} style={inputStyle} required />
          <input placeholder="Salary" type="number" ref={salaryjRef} style={inputStyle} required />
          <input placeholder="Qualification required" type="text" ref={qualificationjRef} style={inputStyle} required />
          <button style={buttonStyle}>Done</button>
        </form>
      </div>

            <div style={formWrapperStyle}>
        <h3 style={sectionTitleStyle}>My Contacts</h3>
        <form onSubmit={sendCont}>
          <input placeholder="Name" type="text" ref={namecref} style={inputStyle} required />
          <input placeholder="Gmail" type="text" ref={gmailcref} style={inputStyle} required />
          <input placeholder="Phone" type="number" ref={phonecref} style={inputStyle} required />
          <input placeholder="Facebook" type="text" ref={fbcref} style={inputStyle} required />
          <input placeholder="Instagram" type="text" ref={instacref} style={inputStyle} required />
          <input placeholder="Address" type="text" ref={addresscref} style={inputStyle} required />
          <button style={buttonStyle}>Done</button>
        </form>
      </div>

            <div style={formWrapperStyle}>
        <h3 style={sectionTitleStyle}>Connectors</h3>
        <ul style={cardListStyle}>
          {m.map((c, i) => (
            <li key={i} style={cardItemStyle}>
              <strong>{c.name}</strong> - {c.phone} - {c.address} - {c.query}
            </li>
          ))}
        </ul>
      </div>


        </>
    )
}

export default Admin;