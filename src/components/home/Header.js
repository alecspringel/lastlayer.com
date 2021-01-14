import React from "react";
import styled from "styled-components";
import LLLogo from "../../assets/ll-logo-white.svg";
import BackgroundGradient from "../../assets/home-background-gradient.svg";
import DeviceImg from "../../assets/device-mockup.png";

const Header = () => {
  return (
    <>
      <Logo src={LLLogo} />
      <Container>
        <TopCorner />
        <Content className="flex-row align just flex-1">
          <div style={{ flex: 2, padding: 30 }}>
            <h1>Custom software &amp; app development</h1>
            <p className="wide-text">
              Last Layer creates beautiful looking, functional web and
              <br />
              mobile apps for businesses, individuals, and creatives.
            </p>
          </div>
          <div className="flex-1 relative">
            <Devices src={DeviceImg} />
          </div>
        </Content>
      </Container>
    </>
  );
};

export default Header;

const Logo = styled.img`
  position: absolute;
  left: 30px;
  top: 30px;
  height: 43px;
  z-index: 1;
`;

const TopCorner = styled.div`
  position: absolute;
  top: -98%;
  left: 0;
  background: #3f57d4;
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  position: relative;
  background: linear-gradient(
    133.45deg,
    #4a5aed 19.68%,
    #4e96ec 43.56%,
    #6ac4e0 63.01%,
    #6acbe0 67.41%
  );
  transform: skewY(-7deg);
  height: 600px;
`;

const Content = styled.div`
  max-width: 89em;
  margin: 0 auto;
  transform: skewY(7deg);
  height: 100%;
`;

const Devices = styled.img`
  height: 900px;
  position: absolute;
  top: -180px;
  left: -50%;
`;
