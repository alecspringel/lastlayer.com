import React from "react";
import styled from "styled-components";
import LLLogo from "../../assets/ll-logo-white.svg";

const NavBar = () => {
  return (
    <div className="wrapper">
      <Logo src={LLLogo} />
    </div>
  );
};

export default NavBar;

const Logo = styled.img`
  position: absolute;
  left: 30px;
  top: 30px;
  height: 43px;
  z-index: 1;
`;
