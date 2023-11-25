import clean from "./images/cleanTheRoofOfReactor.png";
import dead from "./images/deadFish.png";
import demonstrators from "./images/demonstrators.png";
import measure from "./images/measureRadiation.jpg";
import "./Child.css";

const imageMap = {
  clean: clean,
  dead: dead,
  demonstrators: demonstrators,
  measure: measure,
};

function Child({ imageName }) {
  return (
    <div className="childDiv">
      <img className="imageAtt" src={imageMap[imageName]} alt=""></img>
    </div>
  );
}

export default Child;
