import React, { useState } from "react";
import { Card, Button, TextField } from "@mui/material";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const submitEmail = () => {
    setEmail("");
    alert("Thank you for signing up for our newsletter!");
  };
  return (
    <div>
      <Card>
        <h2>Sign Up For Our Newsletters</h2>
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          required
          type="text"
          value={email}
          onChange={handleEmail}
        ></TextField>
        <Button onClick={submitEmail}>Sign Up</Button>
      </Card>
    </div>
  );
};

export default Newsletter;
