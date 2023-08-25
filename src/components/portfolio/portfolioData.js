import SlacordHome from "../../assets/img/portfolio/slacord-home.gif";
import SlacordLanding from "../../assets/img/portfolio/slacord-landing.png";
import MeatupLanding from "../../assets/img/portfolio/meatup-landing.png";
import MeatupIntro from "../../assets/img/portfolio/meatup-intro.gif";
import SimpleFixLanding from "../../assets/img/portfolio/simplefix-landing.png";
import SimpleFixIntro from "../../assets/img/portfolio/simplefix-intro.gif";

const PortfolioData = [
  {
    id: 1,
    type: "simplefix",
    image: SimpleFixLanding,
    secondaryImage: SimpleFixIntro,
    tag: ["express"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "App Academy",
        language: "HTML, CSS, Javascript, React, Redux, Node.js, Express, PostgreSQL",
        preview: "www.slacord.com",
        link: "https://slacord.onrender.com/",
      },
    ],
  },
  {
    id: 2,
    type: "meat-up",
    image: MeatupLanding,
    secondaryImage: MeatupIntro,
    tag: ["express"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "App Academy",
        language: "HTML, CSS, Javascript, React, Redux, Node.js, Express, PostgreSQL",
        preview: "www.meat-up.com",
        link: "https://meat-up.onrender.com",
      },
    ],
  },
  {
    id: 3,
    type: "slacord",
    image: SlacordLanding,
    secondaryImage: SlacordHome,
    tag: ["python"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "App Academy",
        language: " HTML, CSS, Javascript",
        preview: "www.simplefix.com",
        link: "https://simplefix.onrender.com",
      },
    ],
  },
];

export default PortfolioData;
