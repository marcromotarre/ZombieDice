import React from "react";
import Dice from "./Dice";

class Hits extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Hits">
       <Dice />
       <Dice />
       <Dice />
      </div>
    );
  }
}

export default Hits;