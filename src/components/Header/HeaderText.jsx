import classes from "./HeaderText.module.css";

import Button from "./../UI/Button/Button.jsx";

const HeaderText = () => {
  return (
    <div className={classes["header-text"]}>
      <h1>More than just shorter links</h1>
      <p>
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <Button className={classes['get-started-button']}>Get Started</Button>
    </div>
  );
};

export default HeaderText;
