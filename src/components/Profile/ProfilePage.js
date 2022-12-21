import React from "react";
import YourOrders from "./ProfileCards/YourOrders";
import LoginSecurity from "./ProfileCards/LoginSecurity";
import PaymentOptions from "./ProfileCards/PaymentOptions";
import ProfileSettings from "./ProfileCards/ProfileSettings";
import { useSelector } from "react-redux";
import FAQMain from "../FAQ/MainFAQ";
const ProfilePage = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div
      style={{
        margin: "180px auto auto auto",
        width: "800px",
        display: "block",
      }}
    >
      <h1
        style={{
          color: "#f0f014",
          backgroundColor: "navy",
          padding: "5px 15px 10px 15px",
          width: "150px",
          borderRadius: "5px",
        }}
      >
        Your Profile
      </h1>
      <h3>
        Access your personal info, order history, payment options and more.
      </h3>
      <YourOrders />
      <LoginSecurity />
      <PaymentOptions />
      <ProfileSettings />
      <FAQMain />
    </div>
  );
};

export default ProfilePage;
