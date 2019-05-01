import React from "react";
import Dice from "./Dice";

class Brains extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Brains">
       <Dice />
       <Dice />
       <Dice />
       <Dice />
       <Dice />
       <Dice />
       <Dice />
       <Dice />
       <Dice />
       <Dice />
       <Dice />
       <Dice />
       <Dice />
      </div>
    );
  }
}

export default Brains;