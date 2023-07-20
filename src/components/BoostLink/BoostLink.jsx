import classes from "./BoostLink.module.css";

import Button from "./../UI/Button/Button.jsx";

const BoostLink = () => {
  return (
    <section className={classes["boost-link"]}>
      <h2>Boost your links today</h2>
      <Button className="get-started">Get Started</Button>
    </section>
  );
};

export default BoostLink;
