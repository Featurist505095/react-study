import React, { FunctionComponent } from "react";
import FooterStyled from "../../UI/Footer.styled";
import CompanyName from "../CompanyName";

const Footer: FunctionComponent = () => {
  return (
    <FooterStyled>
      <CompanyName />
    </FooterStyled>
  );
};

export default Footer;