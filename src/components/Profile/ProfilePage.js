import React from "react";
import YourOrders from "./ProfileCards/YourOrders";
import LoginSecurity from "./ProfileCards/LoginSecurity";
import PaymentOptions from "./ProfileCards/PaymentOptions";
import ProfileSettings from "./ProfileCards/ProfileSettings";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      <h1>Profile</h1>
      <p>Access your personal info, order history, payment options and more.</p>
      <YourOrders />
      <LoginSecurity />
      <PaymentOptions />
      <ProfileSettings />
    </div>
  );
};

export default ProfilePage;
