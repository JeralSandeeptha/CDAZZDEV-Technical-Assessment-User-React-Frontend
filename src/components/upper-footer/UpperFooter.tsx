import { Link } from 'react-router-dom';
import './UpperFooter.scss';

const UpperFooter = () => {
  return (
    <div className="footer-upper">
  <div className="footer-upper-inner">

    <div className="footer-upper-left">
      <h2 className="footer-upper-title">Online Learning Platform</h2>
      <h5 className="footer-upper-description">This is your next generation online learning platform. Join us Today and get exclusive offers. We hav wide varity of online courses to upskill your skills.</h5>
    </div>

    <div className="footer-upper-right">
      <Link to='/register'>
        <button className="consultant-btn btn">Create Account</button>
      </Link>
      <Link to='/login'>
        <button className="consultant-btn btn">Log In</button>
      </Link>
    </div>

  </div>
</div>
  );

}

export default UpperFooter;
