import React from "react";
import Dice from "./Dice";


class Library extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Library">
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

export default Library;
