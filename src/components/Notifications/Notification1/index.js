import React from "react";
import "./notification1.scss";
import bellIcon from "../../../Resources/bell2.svg";
import Slide from "react-reveal/Slide";

const Notification1 = ({ index }) => {
  const Content = () => {
    return (
      <div className="notification1">
        <div className="header1">
          <img className="bell-icon1" src={bellIcon} alt="Notification Bell" />
          <span className="save-button1">Save</span>
        </div>
        <p className="message1">We'll be sending notifications to you here</p>
        <div className="footer1"></div>
      </div>
    );
  };
  if (index === 1) {
    return (
      <Slide right delay={1000}>
        <Content />
      </Slide>
    );
  } else if (index === 0) {
    return (
      <Slide right delay={500}>
        <Content />
      </Slide>
    );
  } else if (index === 2) {
    return (
      <Slide left delay={0}>
        <Content />
      </Slide>
    );
  } else {
    return <Content />;
  }
};

export default Notification1;
