import PropTypes from "prop-types";
import classes from "./NavList.module.css";

const NavList = ({ hamburgerIconClick }) => {
  return (
    <div>
      <ul className={classes["nav-list"]}>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
      </ul>
      <button
        aria-label="Hamburger Icon"
        onClick={hamburgerIconClick}
        className={classes["hamburger-icon"]}
      >
        <div></div>
      </button>
    </div>
  );
};

NavList.propTypes = {
  hamburgerIconClick: PropTypes.func.isRequired,
};

export default NavList;
