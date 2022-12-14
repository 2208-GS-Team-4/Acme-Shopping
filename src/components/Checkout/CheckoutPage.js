import React from "react";
import BillingShipping from "./BillingShipping";
import ContactInfo from "./ContactInfo";
import Delivery from "./Delivery";
import Payment from "./Payment";

const CheckoutPage = () => {
  return (
    <div>
      <ContactInfo />
      <BillingShipping />
      <Delivery />
      <Payment />
    </div>
  );
};

export default CheckoutPage;
