import React, { useState } from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/hero/heromain.png";
import heroImgMobile from "../../assets/img/hero/img-mobile.png";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";
import Typewriter from "typewriter-effect";

const heroContent = {
  heroImage: heroImg,
  heroMobileImage: heroImgMobile,
  heroTitleName: "jp",
  heroDesignation: "fullstack developer",
  heroDescriptions: `Welcome to my personal portfolio! I'm excited to show you my journey as a developer, featuring the projects that showcase my skills. From writing code to finding smart solutions, this portfolio is a glimpse into how I bring ideas to life. Join me as I share the challenges I've tackled and the lessons I've learned.`,
  heroBtn: "more about me",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              Hey there, im {heroContent.heroTitleName}.
              <span>
                <Typewriter
                  options={{
                    wrapperClassName: "color-font",
                    strings: [
                      "SOFTWARE ENGINEER",
                      "FULLSTACK DEVELOPER",
                      "CAT LOVER",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                  loop={true}
                  onInit={(typewriter) => {
                    typewriter
                    .pauseFor(1000)   // Pause for a second before starting
                    .start();
                  }}
                />

              </span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
