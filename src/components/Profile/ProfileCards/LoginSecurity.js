import React from "react";
import { Card, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LoginSecurity = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div>
      <Card variant="outlined">
        <h3>Login Security</h3>
        <p>View your login security information here</p>
        <Link to="/loginsecurity">
          <Button>View</Button>
        </Link>
      </Card>
    </div>
  );
};

export default LoginSecurity;
