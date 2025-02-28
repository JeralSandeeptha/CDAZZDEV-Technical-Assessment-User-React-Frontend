import './Footer.scss';
import logo from '../../assets/icons/pfizer.png';

const Footer = () => {

  return (
    <><div className="footer">
          <div className="footer-inner">

              <div className="upper-container">

                  <div className="left">
                      <img src={logo} alt="logo" className="logo" />
                      <h5>Upper is an innovative online learning platform offering flexible, expert-led courses tailored to help you advance your skills, boost your career, and reach your goals.</h5>
                      <div className="socials">
                          <div className="link-container">
                              <img src="https://res.cloudinary.com/djgwvmcdl/image/upload/v1734552570/texen_website/linkedin_ocfpfl.png" alt="social-link" className="social-link"/>
                              </div>
                          <div className="link-container">
                              <img src="https://res.cloudinary.com/djgwvmcdl/image/upload/v1734552621/texen_website/instagram_ovxgrf.png" alt="social-link" className="social-link"/>
                              </div>
                          <div className="link-container">
                              <img src="https://res.cloudinary.com/djgwvmcdl/image/upload/v1734552626/texen_website/youtube_sxajrt.png" alt="social-link" className="social-link"/>
                              </div>
                          <div className="link-container">
                              <img src="https://res.cloudinary.com/djgwvmcdl/image/upload/v1734552735/texen_website/twitter_jv63hq.png" alt="social-link" className="social-link" />
                          </div>
                      </div>
                  </div>
                  <div className="right">
                      <div className="box">
                          <h2 className="box-header">Courses We Offer</h2>
                          <div className="links-container">
                              <h5>Cloud Computing Solution</h5>
                              <h5>Cybersecurity & Compliance</h5>
                              <h5>Software Development</h5>
                              <h5>It Consulting & Support</h5>
                          </div>
                      </div>
                      <div className="box">
                          <h2 className="box-header">Useful Links</h2>
                          <div className="links-container">
                              <h5>About Us</h5>
                              <h5>Blog & News</h5>
                              <h5>Project</h5>
                              <h5>Contact Us</h5>
                          </div>
                      </div>
                      <div className="box">
                          <h2 className="box-header">Contact Us</h2>
                          <div className="contact-conatiner">
                              <img src="https://res.cloudinary.com/djgwvmcdl/image/upload/v1734542303/texen_website/footer1-icon1_bco4fu.png" alt="logo" />
                              <h5>0500 222 333</h5>
                          </div>
                          <div className="contact-conatiner">
                              <img src="https://res.cloudinary.com/djgwvmcdl/image/upload/v1734542306/texen_website/footer1-icon2_zmpfps.png" alt="logo" />
                              <h5>0500 222 333</h5>
                          </div>
                          <div className="contact-conatiner">
                              <img src="https://res.cloudinary.com/djgwvmcdl/image/upload/v1734542310/texen_website/footer1-icon3_wiguwa.png" alt="logo" />
                              <h5>admin@olp.org</h5>
                          </div>
                          <div className="contact-conatiner">
                              <img src="https://res.cloudinary.com/djgwvmcdl/image/upload/v1734542323/texen_website/footer1-icon4_fyajah.png" alt="logo" />
                              <h5>www.onlinelearningplatform.com</h5>
                          </div>
                      </div>
                  </div>

              </div>

          </div>
      </div><div className="footer">
              <div className="footer-inner">

                  <div className="inner-container">
                      <div className="lower-left">
                          <h5>Copyright &#64; 2025 OLP.All Rights Reserved</h5>
                      </div>
                      <div className="lower-right">
                          <h5>Terms & Conditions</h5>
                          <h5>Privacy Policy</h5>
                      </div>
                  </div>

              </div>
          </div></>
  );

}

export default Footer;
