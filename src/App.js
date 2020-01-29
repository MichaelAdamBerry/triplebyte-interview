import React from "react";
import "./App.css";
import "./components/SiteTitle";
import { SiteTitle } from "./components/SiteTitle";
import { Box } from "./components/Box";
import { Box2 } from "./components/Box2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SiteTitle title="Triplebyte Starter" />
      </header>
      <Box />
      <Box2 />
    </div>
  );
}

export default App;
