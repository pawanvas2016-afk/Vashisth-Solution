import { useState , useEffect  } from "react";
import "./Services.css";

const Services = () => {

  const [services , setservices] = useState([]);
  
  useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await fetch("https://vashisth-solution-b-5.onrender.com/services");
                const data = await res.json();  
                setservices(data.reverse());
            } catch (err) {
                alert("something went wrong!!!");
                console.error(err);
            }
        };
        fetchContacts();
    }, []);




  return (
    <div className="services-wrapper">
      <h2 className="services-title">⚡ Our Services</h2>

      <div className="services-grid">
        {services.map((job, index) => (
          <div className="service-card" key={index}>
            <h3 className="service-name">{job.name}</h3>
            <p className="service-type">
              <span className="badge">{job.type}</span>
            </p>
            <p className="service-about">{job.about}</p>
            <div className="service-footer">
              <span className="service-fee">💰 Fee: ₹{job.fees}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;