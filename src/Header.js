import React from "react";
import zombieIcon from "./../assets/zombie.svg"; // Tell Webpack this JS file uses this image
import genieIcon from "./../assets/genie.svg"; // Tell Webpack this JS file uses this image

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header />
        <p>This is your header</p>
        <img src={zombieIcon} alt="Logo" />;
        <img src={genieIcon} alt="Logo" />;
      </div>
    );
  }
}

export default Header;
