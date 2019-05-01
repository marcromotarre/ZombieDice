import React from "react";
import PlayerInfo from './PlayerInfo'

class Ranking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Ranking">
        <PlayerInfo />
        <PlayerInfo />
        <PlayerInfo />
        <PlayerInfo />
        <PlayerInfo />
      </div>
    );
  }
}

export default Ranking;