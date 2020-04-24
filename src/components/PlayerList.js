import React, { useState } from "react";
import PlayerListEntry from "./PlayerListEntry";
import "../App.css";

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
      name: "",
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
      <h1 style={styles.header}>Players</h1>
      {content}
      <div
        style={styles.button}
        className={"utilButton"}
        onClick={() => {
          setPlayers([
            ...players,
            {
              name: "",
              civ: activeCivs[players.length % activeCivs.length],
              index:
                players.length === 0
                  ? 0
                  : players[players.length - 1].index + 1,
            },
          ]);
        }}
      >
        <p style={styles.buttonText}>Add</p>
      </div>
      <div
        style={styles.button}
        className={"utilButton"}
        onClick={() => {
          setPlayers(
            players.map((item, index) => {
              return {
                name: players[index].name,
                civ: randomCiv(),
                index: index,
              };
            })
          );
        }}
      >
        <p style={styles.buttonText}>Randomize</p>
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
    textDecoration: "underline",
    textDecorationLine: "solid",
    textDecorationColor: "yellow",
    paddingBottom: "35px",
  },
  button: {
    borderRadius: "10px",
    minWidth: "100px",
    minheight: "40px",
    margin: "10px",
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
