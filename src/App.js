import React, { Component } from "react";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";

class App extends Component {
  render() {
    return (
      <main>
        <div className="container">
          {/* Screens */}
          <HomeScreen></HomeScreen>
        </div>
      </main>
    );
  }
}

export default App;
