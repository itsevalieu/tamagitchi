import React from "react";
import plant0 from "./stages/stg0.png";
import plant1 from "./stages/stg1.png";
import plant2 from "./stages/stg2.png";
import plant3 from "./stages/stg3.png";
import plant4 from "./stages/stg4.png";
import plant5 from "./stages/stg5.png";

const Plant = (props) => {
  let plant = props.plant;
  switch (plant) {
    case 0:
      return (
        <div>
          <img src={plant0} alt={`Plant State ${plant}`} />
        </div>
      );
    case 1:
      return (
        <div>
          <img src={plant1} alt={`Plant State ${plant}`} />
        </div>
      );
    case 2:
      return (
        <div>
          <img src={plant2} alt={`Plant State ${plant}`} />
        </div>
      );
    case 3:
      return (
        <div>
          <img src={plant3} alt={`Plant State ${plant}`} />
        </div>
      );
    case 4:
      return (
        <div>
          <img src={plant4} alt={`Plant State ${plant}`} />
        </div>
      );
    case 5:
      return (
        <div>
          <img src={plant5} alt={`Plant State ${plant}`} />
        </div>
      );
    default:
      return (
        <div>
          <p>No plant.</p>
        </div>
      );
  }
};

export default Plant;
