import React from "react";
import "../css/Logo.css";

function Logo({ src, alt}) {
  return <img src={`../${src}`} className="logo" alt={ alt } />;
}

export default Logo;
