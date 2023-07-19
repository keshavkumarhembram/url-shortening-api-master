import classes from "./AdvancedStatistics.module.css";

import Summary from "./Summary";
import ServicesList from "./ServicesList/ServicesList";

const AdvancedStatistics = () => {
  return (
    <section className={classes["advanced-statistics"]}>
      <Summary />
      <ServicesList />
    </section>
  );
};

export default AdvancedStatistics;
