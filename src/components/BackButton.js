import React from "react";
import { useNavigate } from "react-router-dom";
const BackButton = () => {
  const navigate = useNavigate();
  return <button className="backBtn" onClick={()=>navigate(-1)}>Go Back</button>;
};

export default BackButton;
