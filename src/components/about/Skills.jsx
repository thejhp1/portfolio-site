import React from "react";

const skillsContent = [
  { skillClass: "p93", skillPercent: "93", skillName: "HTML5" },
  { skillClass: "p92", skillPercent: "92", skillName: "JAVASCRIPT" },
  { skillClass: "p95", skillPercent: "95", skillName: "CSS3" },
  { skillClass: "p82", skillPercent: "82", skillName: "EXPRESS.JS" },
  { skillClass: "p60", skillPercent: "60", skillName: "PYTHON" },
  { skillClass: "p55", skillPercent: "55", skillName: "FLASK" },
  { skillClass: "p85", skillPercent: "85", skillName: "REACT" },
  { skillClass: "p88", skillPercent: "88", skillName: "REDUX" },
  { skillClass: "p96", skillPercent: "96", skillName: "NODE.JS" },
  { skillClass: "p75", skillPercent: "75", skillName: "MYSQL" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
