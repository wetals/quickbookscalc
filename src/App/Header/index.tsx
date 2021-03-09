import React from "react";
import styled from "styled-components";

const Header = () => (
  <StyledHeader>
    <div>
      <img
        src="https://s3-us-west-2.amazonaws.com/designsystems-sbgde-096068918679-us-west-2/wp-content/uploads/2020/03/25162615/logotype-04-reversedbw.svg"
        alt="QuickBooks"
      />
    </div>
    <StyledMenu role="navigation">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </StyledMenu>
  </StyledHeader>
);

export default Header;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledMenu = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-right: 10px;
  }
`;
