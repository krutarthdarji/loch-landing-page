import "./notification3.scss";
import bellIcon from "../../../Resources/icon.svg";
import checkmarkIcon from "../../../Resources/clock.svg";
import Slide from "react-reveal/Slide";
function Notification3({ index }) {
  const Content = () => {
    return (
      <div className="notification3">
        <div className="header3">
          <img
            className="bell-icon3"
            src={checkmarkIcon}
            alt="Notification Bell"
          />
          <img className="checkmark3" src={bellIcon} alt="checkmark" />
        </div>
        <p className="message3">Notify me when any wallet dormant for</p>
        <div className="footer3">{`> 30 days`}</div>
        <p className="message3">becomes active</p>
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
}

export default Notification3;
