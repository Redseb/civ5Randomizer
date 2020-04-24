import React, { useState } from "react";

const PlayerListEntry = ({
  name,
  civ,
  players,
  setPlayers,
  randomCiv,
  index,
}) => {
  const [nameState, setNameState] = useState(name);

  const randomizeMe = () => {
    setPlayers(
      players.map((item, ind) => {
        if (ind === index) {
          return { name: name, civ: randomCiv(), index: index };
        }
        return item;
      })
    );
  };
  return (
    <div key="civ" style={styles.container}>
      <div style={styles.subcontainer}>
        <img src={civ.icon} style={styles.icon} alt={civ.civ + " icon"} />
      </div>
      <div style={styles.subcontainer}>
        <input
          type="text"
          value={nameState}
          style={styles.header}
          onChange={(event) => {
            setNameState(event.target.value);
          }}
        />
      </div>
      <div style={styles.subcontainer} onClick={randomizeMe}>
        <h2 style={styles.header}>{civ.civ}</h2>
      </div>
      <p style={styles.subText}>Tier: {civ.tier}</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    borderColor: "black",
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: "10px",
    margin: "10px",
  },
  subcontainer: {
    minWidth: "25%",
  },
  icon: {
    height: "35px",
    width: "35px",
  },
  header: {
    fontSize: "100%",
  },
  subText: {
    fontSize: "100%",
  },
};

export default PlayerListEntry;
