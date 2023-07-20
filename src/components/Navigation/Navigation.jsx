import PropTypes from "prop-types";

import NavList from "./NavList";
import Button from "../UI/Button/Button";

import logo from "./../../assets/images/logo.svg";
import classes from "./Navigation.module.css";

const Navigation = ({ hamburgerIconClick }) => {
  return (
    <nav className={classes["nav-bar"]}>
      <div className={classes["nav-list"]}>
        <img alt="Shortly logo" src={logo}></img>
        <NavList hamburgerIconClick={hamburgerIconClick} />
      </div>
      <div className={classes["button"]}>
        <button type="button" className={classes["login-button"]}>
          Login
        </button>
        <Button className="signup-button">Sign Up</Button>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  hamburgerIconClick: PropTypes.func.isRequired,
};

export default Navigation;
