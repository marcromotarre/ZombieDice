import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Header">
        <h1 className ="title">Zombie Dice</h1>
      </div>
    );
  }
}

export default Header;
