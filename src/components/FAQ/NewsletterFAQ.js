import React, { useState } from "react";
import { Card } from "@mui/material";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const submitEmail = () => {
    setEmail("");
    alert("Thank you for signing up for our newsletter!");
  };
  const styleChoice = {
    width: "80px",
    marginLeft: "230px",
    marginTop: "-22px",
    marginRight: "20px",
    marginBottom: "20px",
    display: "block",
    border: "none",
    backgroundColor: "navy",
    color: "white",
    height: "22px",
    fontSize: "12px",
  };
  return (
    <div>
      <Card variant="none">
        <p
          style={{
            color: "navy",
            marginLeft: "20px",
            marginTop: "10px",
            fontSize: "12px",
          }}
        >
          Sign Up For Our Newsletters
        </p>
        <div
          style={{
            color: "navy",
            marginLeft: "20px",
            marginTop: "15px",
            fontSize: "12px",
          }}
        >
          <label>Email: </label>

          <input value={email} onChange={handleEmail} />
        </div>
        <button onClick={submitEmail} style={styleChoice}>
          Sign Up
        </button>
      </Card>
    </div>
  );
};

export default Newsletter;
