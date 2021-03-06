import React, { useState } from "react";
import "./App.css";
import listOfCivs from "./civList.js";
import CivList from "./components/CivList";
import PlayerList from "./components/PlayerList";

const App = () => {
  const [activeCivs, setActiveCivs] = useState(listOfCivs);
  return (
    <div style={styles.upperContainer}>
      <h1 style={styles.header}>Civilization V Randomizer</h1>
      <div className="App" style={styles.container}>
        <PlayerList activeCivs={activeCivs} />
        <CivList
          list={listOfCivs}
          activeCivs={activeCivs}
          setActiveCivs={setActiveCivs}
        />
      </div>
    </div>
  );
};

const styles = {
  upperContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexWrap: "wrap",
    borderColor: "black",
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: "10px",
    margin: "10px",
    alignSelf: "center",
    maxWidth: "90vw",
    backgroundColor: "white",
  },
  header: {
    textAlign: "center",
    textDecoration: "underline",
    textDecorationLine: "solid",
    textDecorationColor: "yellow",
  },
};

export default App;
