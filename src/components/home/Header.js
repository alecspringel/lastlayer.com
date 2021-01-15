import React from "react";
import styled from "styled-components";
import BackgroundGradient from "../../assets/home-background-gradient.svg";
import DeviceImg from "../../assets/device-mockup.png";

const Header = () => {
  return (
    <>
      <Container>
        <TopCorner />
        <Content className="flex-row align just flex-1 wrapper">
          <TextDiv style={{ flex: 2 }}>
            <h1>Custom software &amp; app development</h1>
            <p className="wide-text" style={{ maxWidth: 485 }}>
              Last Layer creates beautiful looking, functional web and mobile
              apps for businesses, individuals, and creatives.
            </p>
            <div className="flex-row margin-t40">
              <a className="btn primary-btn shadow-btn">GET STARTED</a>
              <a
                className="btn white-btn shadow-btn"
                style={{ marginLeft: 20 }}
              >
                CONTACT US
              </a>
            </div>
          </TextDiv>
          <div className="flex-1 relative">
            <Devices src={DeviceImg} />
          </div>
        </Content>
      </Container>
    </>
  );
};

export default Header;

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

const Heading = styled.h1`
  @media (max-width: 670px) {
    font-size: 28px;
  }
`;

const Content = styled.div`
  margin: 40px auto;
  transform: skewY(7deg);
  height: 100%;

  @media (max-width: 670px) {
    flex-direction: column;
  }
`;

const TextDiv = styled.div`
  @media (max-width: 670px) {
    margin-top: 450px;
  }
`;

const Devices = styled.img`
  height: 900px;
  position: absolute;
  top: -180px;
  left: -50%;

  @media (max-width: 1050px) {
    height: 700px;
  }

  @media (max-width: 670px) {
    height: 500px;
    position: relative;
    top: auto;
    left: auto;
  }
`;
