import React from "react";
import styled from "styled-components";

import { Facebook, Instagram, Linkedin, Pinterest, Youtube } from "../Icons";

const SocialMediaLinks = () => (
  <div>
    <h3>Share my results</h3>
    <div>
      <a href="#">
        <SocialMediaIcon src={Facebook} alt="Facebook" />
      </a>
      <a href="#">
        <SocialMediaIcon src={Linkedin} alt="Linkedin" />
      </a>
      <a href="#">
        <SocialMediaIcon src={Pinterest} alt="Pinterest" />
      </a>
      <a href="#">
        <SocialMediaIcon src={Instagram} alt="Instagram" />
      </a>
      <a href="#">
        <SocialMediaIcon src={Youtube} alt="Youtube" />
      </a>
    </div>
  </div>
);

const SocialMediaIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`;

export default SocialMediaLinks;
