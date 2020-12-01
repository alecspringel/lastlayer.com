import React from "react";
import ProjectTile from "./ProjectTile";
import FarmplotImg from "../../assets/farmplot-img.jpg";
import FarmplotLogo from "../../assets/farmplot-white.png";

const Projects = () => {
  return (
    <div className="padtop wrapper" style={{ padding: "80px 30px" }}>
      <h1 className="text-large text-center">Projects</h1>
      <div className="padtop flex-row just align">
        <ProjectTile
          bgImg={FarmplotImg}
          logoImg={FarmplotLogo}
          caption="Cannabis compliance made easy."
          url="http://www.farmplot.com"
        />
      </div>
    </div>
  );
};

export default Projects;
