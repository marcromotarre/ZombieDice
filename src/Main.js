import React from "react";
import Header from "./Header";
import Brains from "./Brains";
import Hits from "./Hits";
import Game from "./Game";
import Library from "./Library";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  /*
        
  */

  render() {
    return (
      <div className="Main">
        <Header />
        <Brains />
        <Hits />
        <Game />
        <Library />
      </div>
    );
  }
}

export default Main;
