import React from "react";
import { useNavigate } from "react-router-dom";
import "./cta.css";

function CTA() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "register";
    navigate(path);
  };

  return (
    <div className="cta" id="cta">
      <div className="cta-content">
        <h3>Register Today & Build self-confidence in your coding skills .</h3>
      </div>
      <div className="cta-btn">
        <button type="button" onClick={routeChange}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default CTA;
