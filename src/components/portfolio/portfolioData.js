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
        client: "Envato",
        language: "HTML, CSS, Javascript",
        preview: "www.envato.com",
        link: "https://www.envato.com/",
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
        project: "video",
        client: "Videohive",
        language: " Adobe After Effects",
        preview: "www.videohive.net",
        link: "https://www.videohive.net",
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
        client: "Themeforest",
        language: " HTML, CSS, Javascript",
        preview: "www.envato.com",
        link: "https://www.envato.com",
      },
    ],
  },
];

export default PortfolioData;
