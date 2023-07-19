import PropTypes from "prop-types";

import classes from "./ServicesCard.module.css";

const ServicesCard = (props) => {
  return (
    <div className={classes["services-card"]}>
      <img src={props.src}></img>
      {props.children}
    </div>
  );
};

ServicesCard.propTypes = {
  src: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
};

export default ServicesCard;
