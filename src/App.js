import React from "react";
import './App.css';

// Components
import EmptySlot from "./EmptySlot";
import MoleContainer from "./MoleContainer";

function App() {
  return (
    <div className="App">
      <MoleContainer />
      <EmptySlot />
    </div>
  );
}

export default App;
