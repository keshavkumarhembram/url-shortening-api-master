import classes from "./Socials.module.css";

import facebookLogo from "./../../../assets/images/icon-facebook.svg";
import twitterLogo from "./../../../assets/images/icon-twitter.svg";
import pintrestLogo from "./../../../assets/images/icon-pinterest.svg";
import instagramLogo from "./../../../assets/images/icon-instagram.svg";

const Socials = () => {
  return (
    <ul className={classes["social-list"]}>
      <li>
        <a href="#">
          <img className={classes['social-images']} src={facebookLogo}></img>
        </a>
      </li>
      <li>
        <a href="#">
          <img className={classes['social-images']} src={twitterLogo}></img>
        </a>
      </li>
      <li>
        <a href="#">
          <img className={classes['social-images']} src={pintrestLogo}></img>
        </a>
      </li>
      <li>
        <a href="#">
          <img className={classes['social-images']} src={instagramLogo}></img>
        </a>
      </li>
    </ul>
  );
};

export default Socials;
