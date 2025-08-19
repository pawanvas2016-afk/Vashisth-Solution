import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import "./Administrator.css";

const Administrator = () => {
  const navigate = useNavigate();
  const Url = import.meta.env.ADMINURL;
  const keyRef = useRef();
  const [message, setMessage] = useState("");

  const checkKey = async() => {
    const enteredKey = keyRef.current.value.trim();
    const ownerKey = await import.meta.env.VITE_ADMINKEY;
    const Url = await import.meta.env.VITE_ADMIN;
    if (enteredKey === ownerKey) {
      setMessage("✅ Access Granted. Welcome Admin!");
       navigate(`/${Url}`); 
    } else {
      setMessage("❌ Wrong Key! Access Denied.");
    }

    keyRef.current.value = "";
  };

  return (
    <div className="admin-wrapper">
      <div className="admin-card">
        <h2 className="admin-title">🔐 Admin Panel</h2>
        <p className="admin-subtitle">(Only for Owner use)</p>

        <input
          type="password"
          placeholder="Enter Admin Key"
          ref={keyRef}
          className="admin-input"
        />
        <button onClick={checkKey} className="admin-btn">
          Confirm
        </button>

        {message && (
          <p
            className={`admin-message ${
              message.includes("✅") ? "success" : "error"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Administrator;
