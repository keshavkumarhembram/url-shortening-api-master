import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import classes from "./ShortenURLForm.module.css";

const ShortenURLForm = ({ onResponse }) => {
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(true);

  const onChangeHandler = (event) => {
    setIsValid(true);
    setUrl(event.target.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!url) {
      setIsValid(false);
    }
    try {
      const res = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      const shortLink = res.data.result.full_short_link;
      const newUrls = {
        original: url,
        short: shortLink,
      };
      onResponse(newUrls);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className={`${classes["shorten-url-form"]} ${
        isValid ? "" : classes["invalid"]
      }`}
    >
      <input
        id="url"
        name="url"
        type="text"
        placeholder="Shorten a link here..."
        value={url}
        onChange={onChangeHandler}
      ></input>
      <p className={classes["invalid-text"]}>Please add link</p>
      <button type="submit">Shorten It!</button>
    </form>
  );
};

ShortenURLForm.propTypes = {
  onResponse: PropTypes.func.isRequired,
};

export default ShortenURLForm;
