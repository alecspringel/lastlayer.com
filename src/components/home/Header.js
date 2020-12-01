import React from "react";
import BackgroundImg from "../../assets/home-header.jpg";
import styled from "styled-components";
import LLLogo from "../../assets/ll-logo.png";
import BackgroundVid from "../../assets/blue.mp4";

const Header = () => {
  return (
    <div>
      <Background>
        <Video autoPlay loop muted>
          <source src={BackgroundVid} type="video/mp4" />
        </Video>
        <Overlay className="flex-col just align">
          <Logo src={LLLogo} />
          <h1 className="text-large text-center">
            Custom software design &amp; development
          </h1>
          <h2 className="poppins margin-t10">
            Last Layer provides complete web and mobile app development for your
            business.
          </h2>
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

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000050;
  padding: 30px;
`;

const Logo = styled.img`
  position: absolute;
  left: 30px;
  top: 30px;
  height: 43px;
`;
