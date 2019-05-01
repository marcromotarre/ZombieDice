import React from "react";
import GamePlayer from "./GamePlayer";
import GameDices from "./GameDices";
import GameActions from "./GameActions";


class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Game">
        <GamePlayer />
        <GameDices />
        <GameActions />
       
      </div>
    );
  }
}

export default Game;
