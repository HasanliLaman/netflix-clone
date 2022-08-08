import React from "react";
import FooterStyle from "./style";
import FooterLinks from "./FooterLinks";
import FooterIcons from "./FooterIcons";
import FooterButton from "./FooterButton";

const Footer = () => {
  return (
    <FooterStyle>
      <FooterIcons />
      <FooterLinks />
      <FooterButton />
      <p>© 1997-2021 Netflix, Inc. {"{i-062d573a0ee099242}"}</p>
    </FooterStyle>
  );
};

export default Footer;
