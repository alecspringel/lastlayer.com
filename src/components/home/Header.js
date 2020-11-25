import React from "react";
import BackgroundImg from "../../assets/home-header.jpg";
import styled from "styled-components";
import LLLogo from "../../assets/ll-logo.svg";

const Header = () => {
  return (
    <div>
      <Background>
        <Overlay className="flex-row just align">
          <Logo src={LLLogo} />
          <h1 className="text-large">
            Software development for a better world.
          </h1>
        </Overlay>
      </Background>
    </div>
  );
};

export default Header;

const Background = styled.section`
  position: relative;
  width: 100%;
  background: url(${BackgroundImg});
  background-size: cover;
  height: 100vh;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000050;
`;

const Logo = styled.img`
  position: absolute;
  left: 30px;
  top: 30px;
  height: 43px;
`;
