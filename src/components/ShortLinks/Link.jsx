import { useState } from "react";
import PropTypes from "prop-types";
import classes from "./Link.module.css";

const Link = ({ original, short }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <li className={classes["list-item"]}>
      <span className={classes.original}>{original}</span>
      <div>
        <span className={classes.short}>{short}</span>
        <button
          className={
            isCopied ? classes["copied-button"] : classes["copy-button"]
          }
          type="button"
          onClick={() => handleCopyClick(short)}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </li>
  );
};

Link.propTypes = {
  original: PropTypes.string.isRequired,
  short: PropTypes.string.isRequired,
};

export default Link;
