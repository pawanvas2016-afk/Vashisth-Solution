import { useState , useEffect } from "react";
import "./Home.css"; 
import pawan from "../../assets/pawan.jpeg"

const Home = () => {



    const [jobs , setjobs] = useState([]);


   useEffect(() => {
          const fetchContacts = async () => {
              try {
                  const res = await fetch("https://vashisth-solution-b-5.onrender.com/jobs");
                  const data = await res.json();  
                  setjobs(data.reverse());
              } catch (err) {
                  alert("something went wrong!!!");
                  console.error(err);
              }
          };
          fetchContacts();
      }, []);
  





    return(
        <>
       <div className="adjhomupa" >
            <div className="a" >  
                <h2 style={{color:"#212529", marginBottom:"1rem", fontSize:"1.8rem", fontWeight:"600"}}>
                    Common Service Center
                </h2>
                <p style={{textAlign:"justify", color:"#495057", lineHeight:"1.6", fontSize:"1rem"}}>
                    Welcome to our CSC Center, your one-stop solution for all government and digital services. We provide reliable support for Aadhar, PAN card, and other essential documents, along with banking, money transfer, and bill payment facilities. Our center also assists with government forms, certificates, online registrations, and exam applications, making the process simple and hassle-free. You can also avail mobile/DTH recharge, FASTag services, and job application support under one roof. With a commitment to fast, secure, and customer-friendly service, we aim to bring convenience to your doorstep. Visit us today and experience trusted digital services made easy.</p>
            </div>
            <div className="b">
                <img 
                    src="https://tse3.mm.bing.net/th/id/OIP.C4AXuIRDkHSgCmkjRL3Y4AHaEm?pid=Api&P=0&h=180" 
                    alt="image not found" 
                    style={{height:"90%", maxWidth:"100%", borderRadius:"10px", objectFit:"cover"}} 
                />
            </div>
        </div>

        <div className="adjhomupb" >
            <div className="b">
                <img 
                    src={pawan} 
                    alt="image not found" 
                    style={{height:"250px", maxWidth:"100%", borderRadius:"10px", objectFit:"cover" }} 
                />
            </div>
            <div className="a">  
                <h2 style={{color:"#212529", marginBottom:"1rem", fontSize:"1.8rem", fontWeight:"600"}}>
                    Mr. Pawan Vashisth
                </h2>
                <p style={{textAlign:"justify", color:"#495057", lineHeight:"1.6", fontSize:"1rem"}}>
                    At CSC Center by Pawaan Vashisth, we are dedicated to providing fast, secure, and reliable digital services for everyone. From Aadhar, PAN card, and government documentation to banking, money transfer, and bill payments, we make every process simple and stress-free. We also assist with online registrations, exam forms, certificates, and verification services, ensuring you never face delays. Our center offers mobile/DTH recharge, FASTag services, and job application support to make your life easier. Under the guidance of Pawaan Vashisth, we aim to deliver trusted services with a personal touch. Visit us today and experience the convenience of all essential services under one roof.</p>
            </div>
        </div>



         {/* Jobs Section */}
      <hr />
      <div className="jobs">
        <h2>New Jobs and more..</h2>
        <div className="job-list">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3>
                {job.type}: <span>{job.name}</span>
              </h3>
              <p>
                <b>Duration:</b> {new Date(job.fromDate).toLocaleDateString()} to {new Date(job.toDate).toLocaleDateString()}
              </p>
              <p>
                <b>Age Limit:</b> {job.age}
              </p>
              <p>
                <b>Qualification:</b> {job.qualification}
              </p>
              <p>
                <b>Office:</b> {job.department} | <b>Post:</b> {job.post}
              </p>
              <p>
                <b>Salary:</b> ₹{job.salary} / month
              </p>
              <p className="fees">
                Registration Fees: ₹{job.fees}
              </p>
            </div>
          ))}
        </div>
      </div>






      <div style={{marginTop:"3rem", padding:"2rem", background:"#f8f9fa", borderRadius:"10px", boxShadow:"0 4px 10px rgba(0,0,0,0.1)"}}>
    <h2 style={{color:"#007bff", marginBottom:"1.5rem", fontSize:"1.8rem", fontWeight:"600", textAlign:"center"}}>
        Frequently Asked Questions (FAQs)
    </h2>

    {/* FAQ Item 1 */}
    <div style={{marginBottom:"1rem", borderBottom:"1px solid #ddd", paddingBottom:"1rem"}}>
        <button 
            style={{width:"100%", textAlign:"left", background:"none", border:"none", fontSize:"1.1rem", fontWeight:"600", color:"#333", cursor:"pointer", padding:"0.5rem 0"}} 
            onClick={(e)=>{
                const answer = e.target.nextSibling;
                answer.style.display = (answer.style.display === "block") ? "none" : "block";
            }}
        >
            ➤ What services are provided at the Common Service Center?
        </button>
        <p style={{display:"none", marginTop:"0.5rem", color:"#555", lineHeight:"1.6"}}>
            The CSC offers various government and private sector services such as bill payments, banking, insurance, Aadhaar updates, PAN applications, and more. It acts as a one-stop digital service center for citizens.
        </p>
    </div>

    {/* FAQ Item 2 */}
    <div style={{marginBottom:"1rem", borderBottom:"1px solid #ddd", paddingBottom:"1rem"}}>
        <button 
            style={{width:"100%", textAlign:"left", background:"none", border:"none", fontSize:"1.1rem", fontWeight:"600", color:"#333", cursor:"pointer", padding:"0.5rem 0"}} 
            onClick={(e)=>{
                const answer = e.target.nextSibling;
                answer.style.display = (answer.style.display === "block") ? "none" : "block";
            }}
        >
            ➤ Who can use the CSC services?
        </button>
        <p style={{display:"none", marginTop:"0.5rem", color:"#555", lineHeight:"1.6"}}>
            Any citizen can avail services through a nearby CSC. It’s designed to serve both rural and urban communities, providing easy access to government schemes and digital services.
        </p>
    </div>

    {/* FAQ Item 3 */}
    <div style={{marginBottom:"1rem", borderBottom:"1px solid #ddd", paddingBottom:"1rem"}}>
        <button 
            style={{width:"100%", textAlign:"left", background:"none", border:"none", fontSize:"1.1rem", fontWeight:"600", color:"#333", cursor:"pointer", padding:"0.5rem 0"}} 
            onClick={(e)=>{
                const answer = e.target.nextSibling;
                answer.style.display = (answer.style.display === "block") ? "none" : "block";
            }}
        >
            ➤ How can I locate the nearest CSC?
        </button>
        <p style={{display:"none", marginTop:"0.5rem", color:"#555", lineHeight:"1.6"}}>
            You can visit the official CSC website and use the “Find a CSC” tool to locate your nearest center. Alternatively, you can ask local authorities for CSC details in your area.
        </p>
    </div>

    {/* FAQ Item 4 */}
    <div style={{marginBottom:"1rem", borderBottom:"1px solid #ddd", paddingBottom:"1rem"}}>
        <button 
            style={{width:"100%", textAlign:"left", background:"none", border:"none", fontSize:"1.1rem", fontWeight:"600", color:"#333", cursor:"pointer", padding:"0.5rem 0"}} 
            onClick={(e)=>{
                const answer = e.target.nextSibling;
                answer.style.display = (answer.style.display === "block") ? "none" : "block";
            }}
        >
            ➤ Is there any fee for using CSC services?
        </button>
        <p style={{display:"none", marginTop:"0.5rem", color:"#555", lineHeight:"1.6"}}>
            Some CSC services are free of cost, while others may have a minimal service fee depending on the type of service availed.
        </p>
    </div>
</div>

        </>
    )
}

export default Home;