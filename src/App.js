import React, { Component } from "react";
import Posts from "./components/lists/Posts";
import Header from "./components/parts/Header";
import ContainerFluid from "./components/parts/ContainerFluid";
import "./App.css";

class App extends Component {
  render() {
    return (
      <ContainerFluid>
        <Header />
        <Posts />
      </ContainerFluid>
    );
  }
}

export default App;
