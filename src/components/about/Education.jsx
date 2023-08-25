import React from "react";

const educationContent = [
  {
    year: "2023",
    degree: "FULLSTACK WEB DEVELOPMENT",
    institute: "APP ACADEMY",
    details: `A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, Node.JS, MySQL, Express, Python, Flask & ReactJS.`,
  },
  {
    year: "2020",
    degree: "EPA CERTIFICATION",
    institute: "UNITED STATES ENVIRONMENTAL PROTECTION AGENCY",
    details: `Section 608 Technician Certification`,
  },
  {
    year: "2012-2014",
    degree: "BACHELOR DEGREE",
    institute: "UNIVERSITY OF NORTH CAROLINA AT CHARLOTTE",
    details: `Computer Science and Mathematics`
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
