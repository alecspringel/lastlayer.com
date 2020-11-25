import React from "react";
import styled from "styled-components";

const ProjectTile = ({ bgImg, logoImg, caption, url }) => {
  return (
    <Tile href={url}>
      <Overlay className="flex-col just align overlay">
        <LogoImg src={logoImg} />
        <h5 className="roboto text-center margin-t20">{caption}</h5>
      </Overlay>
      <BGImg src={bgImg} />
    </Tile>
  );
};

export default ProjectTile;

const Tile = styled.a`
  position: relative;
  background: #3c73fd;
  border-radius: 4px;
  max-width: 600px;
  min-width: 450px;
  box-shadow: 0px 0px 6px #00000070;
  transition: all 150ms;
  &:hover {
    box-shadow: 0px 0px 20px #00000057;
  }
  &:hover .overlay {
    opacity: 0;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  background: #000000a6;
  transition: all 150ms ease-in-out;
  border-radius: 4px 4px 0 0;
`;

const BGImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
`;

const CaptionDiv = styled.div`
  height: 77px;
`;

const LogoImg = styled.img`
  height: 50px;
`;
