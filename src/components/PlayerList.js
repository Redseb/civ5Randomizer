import React, { useState } from "react";
import PlayerListEntry from "./PlayerListEntry";

const PlayerList = ({ activeCivs }) => {
  const randomCiv = () => {
    if (activeCivs.length === 0) {
      return {
        civ: "Babylon",
        tier: 1,
        bias: "Avoid Tundra",
        icon: require("../images/civIcons/babylon.png"),
      };
    }
    return activeCivs[
      Math.floor(Math.random() * Math.floor(activeCivs.length))
    ];
  };

  const [players, setPlayers] = useState([
    {
      name: "Miko",
      civ: activeCivs[0],
      index: 0,
    },
  ]);
  console.log(players);
  let content = [];

  for (let player of players) {
    content.push(
      <PlayerListEntry
        name={player.name}
        civ={player.civ}
        players={players}
        setPlayers={setPlayers}
        randomCiv={randomCiv}
        key={player.index}
        index={player.index}
      />
    );
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Player List</h1>
      {content}
      <div
        style={styles.button}
        onClick={() => {
          setPlayers([
            ...players,
            {
              name: "oo",
              civ: activeCivs[players.length],
              index: players.length,
            },
          ]);
        }}
      >
        <p style={styles.buttonText}>Add</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minWidth: "45vw",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    textAlign: "center",
  },
  button: {
    borderRadius: "100%",
    backgroundColor: "tomato",
    width: "40px",
    height: "40px",
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: "15px",
    textAlign: "center",
    color: "white",
  },
};

export default PlayerList;
