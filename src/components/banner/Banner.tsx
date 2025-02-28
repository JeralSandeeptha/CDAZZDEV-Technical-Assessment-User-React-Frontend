import { BannerProps } from '../../types/component.types';
import './Banner.scss';
import logo from '../../assets/svgs/approved.png';

const Banner = (props: BannerProps) => {

  return (
    <div className="top-banner">
      <img src={logo} alt="top-banner-logo" className="top-banner-logo" />
      <h5 className="top-banner-text">{ props.title }</h5>
    </div>
  );

}

export default Banner;