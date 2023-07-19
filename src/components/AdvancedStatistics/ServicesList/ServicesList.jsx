import classes from "./ServicesList.module.css";

import ServicesCard from "./ServicesCard";
import brandRecognition from "./../../../assets/images/icon-brand-recognition.svg";
import detailedRecords from "./../../../assets/images/icon-detailed-records.svg";
import fullyCustomizable from "./../../../assets/images/icon-fully-customizable.svg";

const ServicesList = () => {
  return (
    <div className={classes["services-list"]}>
      <div className={classes["brand-recognition"]}>
        <ServicesCard src={brandRecognition}>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </ServicesCard>
      </div>
      <div className={classes["detailed-records"]}>
        <ServicesCard src={detailedRecords}>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </ServicesCard>
      </div>
      <div className={classes["fully-customizable"]}>
        <ServicesCard src={fullyCustomizable}>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </ServicesCard>
      </div>
      <hr />
    </div>
  );
};

export default ServicesList;
