import React, { useState } from "react";
import { Button } from "@mui/material";
import UpdateProfileForm from "./UpdateProfileForm";
import { useSelector, useDispatch } from "react-redux";

const UpdateProfileButton = () => {
  const [displayForm, setDisplayForm] = useState(false);

  const handleDisplayForm = (event) => {
    setDisplayForm(!displayForm);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleDisplayForm}>
        Update Profile Information
      </Button>
      {displayForm && <UpdateProfileForm handleDisplayForm={handleDisplayForm}/>}
    </div>
  );
};

export default UpdateProfileButton;
