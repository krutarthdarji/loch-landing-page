import Layer1 from "./Layer1";
import Layer2 from "./Layer2";
import "./leftBox.scss";
import Layer3 from "./Layer3";

function LeftBox() {
  return (
    <div className="leftBox">
      <Layer1 />
      <Layer2 />
      <div className="testimonial-header">Testimonials</div>
      <div className="line-separator"></div>
      <Layer3 />
    </div>
  );
}

export default LeftBox;
