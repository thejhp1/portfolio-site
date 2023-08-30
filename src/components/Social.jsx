import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/jun-park-3b23b7285/",
  },
  { iconName: "fa fa-github", link: "https://github.com/thejhp1" },
  { iconName:"fa fa-angellist", link: "https://wellfound.com/u/jun-park-35"}
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
