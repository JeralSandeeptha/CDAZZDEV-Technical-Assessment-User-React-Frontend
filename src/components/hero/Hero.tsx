import { Link } from "react-router-dom";
import logo from '../../assets/svgs/approved.png';
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="home-hero">
      <div className="home-hero-inner">
        <div className="home-hero-left">
          <div className="top-banner-hero">
            <img
              src={logo}
              alt="logo"
              className="logo"
            />
            <h5 className="top-banner-text">
              Online Learning Platform
            </h5>
          </div>
          <h1 className="hero-title">
            Transform Your Success With Next Generation{" "}
            <span>Education</span>
          </h1>
          <h5 className="hero-description">
            Welcome to OLP where we specialise in Online Education with delivering and designed online courses for you. Join with us and make your path success.
          </h5>
          <div className="hero-cta-container">
            <Link to='/register' className="get-link">
            <button className="cta-button">
                <h5 className="cta-button-text">
                  Get Started Now
                </h5>
              <img
                src="https://res.cloudinary.com/djgwvmcdl/image/upload/v1734512131/texen_website/arrow-small-right_qpjbju.png"
                alt="arrow-left"
                className="arrow-left"
              />
            </button>
            </Link>
            <button className="cta-button-transparent">
              <img
                src="https://res.cloudinary.com/djgwvmcdl/image/upload/v1734512131/texen_website/play_pyqyid.png"
                alt="play-button"
                className="play-button"
              />
              <h5 className="cta-button-transparent-text">Watch Demo Video</h5>
            </button>
          </div>
        </div>

        <div className="home-hero-right">
          <img
            src="https://res.cloudinary.com/djgwvmcdl/image/upload/v1734511369/texen_website/hero1-image2_muf7dj.png"
            alt="hero-one"
            className="hero-one"
          />
          <img
            src="https://res.cloudinary.com/djgwvmcdl/image/upload/v1734514223/texen_website/header1-shape1_tkv8xz.png"
            alt="header2"
            className="header2"
          />
          <img
            src="https://res.cloudinary.com/djgwvmcdl/image/upload/v1734514255/texen_website/hero1-image1_p5oii8.png"
            alt="hero-two"
            className="hero-two"
          />
          <img
            src="https://res.cloudinary.com/djgwvmcdl/image/upload/v1734514223/texen_website/header1-shape2_adjejh.png"
            alt="header1"
            className="header1"
          />
          <img
            src="https://res.cloudinary.com/djgwvmcdl/image/upload/v1734511369/texen_website/hero1-image3_ncrp6q.png"
            alt="hero-three"
            className="hero-three"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
