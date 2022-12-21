import React from "react";
import SocialMedia from "./SocialMedia";
import Company from "./Company";
import Support from "./Support";
import OurBrands from "./OurBrands";
import Newsletter from "./Newsletter";

const FAQMain = () => {
  const styleChoice = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  };
  return (
    <div style={styleChoice}>
      <div
        style={{
          display: "flexbox",
          flexDirection: "column",
        }}
      >
        <Newsletter />
        <SocialMedia />
      </div>
      <Company />
      <Support />
      <OurBrands />
    </div>
  );
};

export default FAQMain;
