import classes from "./Header.module.css";

import HeaderText from "./HeaderText";
const Header = () => {
  return (
    <header className={classes.header}>
      <HeaderText />
    </header>
  );
};

export default Header;
