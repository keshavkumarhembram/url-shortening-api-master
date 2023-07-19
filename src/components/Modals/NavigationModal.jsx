import classes from "./NavigationModal.module.css";

import Button from "./../UI/Button/Button.jsx";

const NavigationModal = () => {
  return (
    <div className={classes["nav-bar"]}>
      <ul>
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
      <hr className={classes["nav-hr"]} />
      <div className={classes["button"]}>
        <button className={classes["login-button"]} type="button">
          Login
        </button>
        <Button className="signup-button">Sign Up</Button>
      </div>
    </div>
  );
};

export default NavigationModal;
