import classes from "./Footer.module.css";
import logo from "./../../assets/images/logo.svg";

import Links from "./Links/Links.jsx";
import Socials from "./Links/Socials";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <img src={logo} />
      <Links />
      <Socials />
    </footer>
  );
};

export default Footer;
