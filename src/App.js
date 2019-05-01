import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import Ranking from "./Ranking";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Main />
        <Ranking />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
