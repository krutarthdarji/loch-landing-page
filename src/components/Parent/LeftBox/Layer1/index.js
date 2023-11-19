import "./layer1.scss";
import bellSvg from "../../../../Resources/Bell.svg";
import NotificationCarousel from "../../../Notifications/NotificationCarousel";
function Layer1() {
  return (
    <div className="layer1">
      <div className="notification-text">
        <img className="bell-icon" src={bellSvg} alt="bell-icon" />
        <div className="notification-text__header">
          Get notified when a highly correlated whale makes a move
        </div>
        <div className="notification-text__subheader">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </div>
      </div>
      <NotificationCarousel />
    </div>
  );
}

export default Layer1;
