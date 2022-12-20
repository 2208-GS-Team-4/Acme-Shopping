import React from "react";
import { Card, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileSettings = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div>
      <Card variant="outlined">
        <h3>Profile Settings</h3>
        <p>View & Edit Your Profile Information Here</p>
        <Link to="/settings">
          <Button>View</Button>
        </Link>
      </Card>
    </div>
  );
};

export default ProfileSettings;
