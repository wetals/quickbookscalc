import React from "react";
import styled from "styled-components";

import Collapsible from "./Collapsible";

const Footer = () => (
  <FooterWrapper>
    <h2>Frequently asked questions</h2>
    <Collapsible
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    />
    <Collapsible
      title="Nam ullamcorper, magna a laoreet consequat, ligula orci?"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    />
    <Collapsible
      title="Praesent quis varius nulla. Vestibulum et efficitur elit?"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    />
    <Collapsible
      title="Donec elementum elit purus, posuere rutrum sapien pellentesque in?"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    />
  </FooterWrapper>
);

const FooterWrapper = styled.div`
  margin-bottom: 40px;

  h2 {
    margin-left: 40px;
  }
`;

export default Footer;
