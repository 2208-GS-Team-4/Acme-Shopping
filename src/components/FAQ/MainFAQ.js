import React from "react";
import SocialMedia from "./SocialMediaFAQ";
import Company from "./CompanyFAQ";
import Support from "./SupportFAQ";
import OurBrands from "./OurBrandsFAQ";
import Newsletter from "./NewsletterFAQ";

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
