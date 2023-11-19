import LeftBox from "./LeftBox";
import RightBox from "./RightBox";
import "./parent.scss";
function Parent() {
  return (
    <div className="parentBox">
      <LeftBox />
      <RightBox />
    </div>
  );
}

export default Parent;
