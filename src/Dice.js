import React from "react";

class Dice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="DiceSpace">
       <div className="Dice"></div>
      </div>
    );
  }
}

export default Dice;
