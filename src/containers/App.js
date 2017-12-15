import React, { Component } from "react";
import GitHubUserRepos from "containers/GitHubUserRepos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GitHubUserRepos top={10} />
      </div>
    );
  }
}

export default App;
