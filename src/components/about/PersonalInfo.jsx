import React from "react";

const personalInfoContent = [
  { meta: "name", metaInfo: "Jun Park" },
  { meta: "Locale", metaInfo: "Greensboro, NC" },
  { meta: "Age", metaInfo: "29 Years" },
  { meta: "Nickname", metaInfo: "JP" },
  { meta: "Nationality", metaInfo: "Korean American" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "phone", metaInfo: "+8049204501" },
  { meta: "Email", metaInfo: "thejhp96@gmail.com" },
  { meta: "Discord", metaInfo: "thejhp" },
  { meta: "Languages", metaInfo: "English, Korean" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
