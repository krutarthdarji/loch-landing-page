import "./layer2.scss";
import eye from "../../../../Resources/Eye.svg";
function Layer2() {
  return (
    <div className="layer2">
      <div className="layer2__left">
        <div className="cohorts-image"></div>
      </div>
      <div className="layer2__right">
        <img className="eye-icon" src={eye} alt="bell-icon" />
        <div className="layer2__right__header">
          Watch what the whales are doing
        </div>
        <div className="layer2__right__subheader">
          All whales are not equal. Know exactly what the whales impacting YOUR
          portfolio are doing.
        </div>
      </div>
    </div>
  );
}

export default Layer2;
