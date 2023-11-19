import vector from "../../../../Resources/Vector.svg";
import "./layer3.scss";
import TestimonialCarousel2 from "../../../Testimonial/TestimonialCarousel2";
function Layer3() {
  return (
    <div className="layer3">
      <div className="vector">
        <img src={vector} alt="" className="vector__img" />
      </div>
      <TestimonialCarousel2 />
    </div>
  );
}

export default Layer3;
