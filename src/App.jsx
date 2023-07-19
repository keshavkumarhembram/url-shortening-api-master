import { useState, useEffect } from "react";

import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import NavigationModal from "./components/Modals/NavigationModal";
import Header from "./components/Header/Header.jsx";
import ShortenURLForm from "./components/ShortenURLForm/ShortenURLForm";
import AdvancedStatistics from "./components/AdvancedStatistics/AdvancedStatistics";
import BoostLink from "./components/BoostLink/BoostLink";
import Footer from "./components/Footer/Footer.jsx";
import ShortLinks from "./components/ShortLinks/ShortLinks";

function App() {
  const [shortLinks, setShortLinks] = useState([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const shortLinksJSON = localStorage.getItem("short-links");
    let shortlinks = [];
    if (shortLinksJSON) {
      shortlinks = JSON.parse(shortLinksJSON);
      setShortLinks(shortlinks);
    }
  }, []);

  const hamburgerIconClickHandler = () => {
    if (showList === false) {
      setShowList(true);
    } else {
      setShowList(false);
    }
  };

  const onResponseHandler = (url) => {
    setShortLinks((prevState) => [...prevState, url]);
    const shortLinksJSON = localStorage.getItem("short-links");
    let shortlinks = [];
    if (shortLinksJSON !== "") {
      shortlinks = JSON.parse(shortLinksJSON);
    }
    shortlinks.push(url);
    const shortLinksString = JSON.stringify(shortlinks);
    localStorage.setItem("short-links", shortLinksString);
  };
  return (
    <>
      <Navigation hamburgerIconClick={hamburgerIconClickHandler} />
      {showList && <NavigationModal />}
      <Header />
      <main>
        <ShortenURLForm onResponse={onResponseHandler} />
        <ShortLinks shortLinks={shortLinks} />
        <AdvancedStatistics />
      </main>
      <BoostLink />
      <Footer />
    </>
  );
}

export default App;
