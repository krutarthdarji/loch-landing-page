import "./notification2.scss";
import bellIcon from "../../../Resources/bar-chart-2.svg";
import checkmarkIcon from "../../../Resources/icon.svg";
import Slide from "react-reveal/Slide";
function Notification2({ index }) {
  const Content = () => {
    return (
      <div className="notification2">
        <div className="header2">
          <img className="bell-icon2" src={bellIcon} alt="Notification Bell" />
          <img className="checkmark2" src={checkmarkIcon} alt="checkmark" />
        </div>
        <p className="message2">We'll be sending notifications to you here</p>
        <div className="footer2">$1000</div>
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

export default Notification2;
