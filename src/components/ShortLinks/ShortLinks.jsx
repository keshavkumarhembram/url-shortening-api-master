import PropTypes from "prop-types";
import classses from "./ShortLinks.module.css";

import Link from "./Link.jsx";

const ShortLinks = ({ shortLinks }) => {
  const links = shortLinks.map((el, idx) => (
    <Link key={`link${idx}`} original={el.original} short={el.short} />
  ));
  return <ul className={classses["short-links-list"]}>{links}</ul>;
};

ShortLinks.propTypes = {
  shortLinks: PropTypes.array.isRequired,
};

export default ShortLinks;
