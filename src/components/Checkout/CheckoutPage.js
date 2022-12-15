import React from "react";
import BillingShipping from "./BillingShipping";
import ContactInfo from "./ContactInfo";
import Delivery from "./Delivery";
import Payment from "./Payment";

const CheckoutPage = () => {
  
  return (
    <form>
      <ContactInfo />
      <BillingShipping />
      <Delivery />
      <Payment />
    </form>
  );
};

export default CheckoutPage;
