import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header />
        <Header />
        <p>This is your new project</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
