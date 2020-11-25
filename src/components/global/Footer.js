import React from "react";
import styled from "styled-components";
import LogoImg from "../../assets/ll-logo.svg";

const Footer = () => {
  return (
    <Wrapper>
      <div
        className="wrapper flex-row"
        style={{ justifyContent: "space-between" }}
      >
        <LogoWrapper className="flex-col just align">
          <a href="https://lastlayer.com">
            <Logo src={LogoImg} />
          </a>
          <span
            className="margin-t20"
            style={{ fontFamily: "arial", fontSize: 14 }}
          >
            © 2020 Last Layer LLC · All rights reserved
          </span>
        </LogoWrapper>

        <div className="flex-col">
          <h6 className="margin-b10">Contact</h6>
          <a href="mailto:alec@lastlayer.com" className="roboto">
            alec@lastlayer.com
          </a>
        </div>
        <div className="flex-col">
          <h6 className="margin-b10">Links</h6>
          <a href="http://farmplot.com" target="_blank" className="roboto">
            farmPlot
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  padding: 40px;
  background: #30343c;
`;

const Logo = styled.img`
  height: 72px;
`;

const LogoWrapper = styled.div`
  opacity: 0.7;
`;
