import React, { useState } from "react";
import { IoMdTrash } from "react-icons/io";
import "../App.css";

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
        <IoMdTrash
          className={"button"}
          style={styles.ionicon}
          onClick={() => {
            setPlayers(
              players.filter((el) => {
                return el.index !== index;
              })
            );
          }}
        />
        <img
          src={civ.icon}
          style={styles.icon}
          alt={civ.civ + " icon"}
          className={"button"}
          onClick={randomizeMe}
        />
      </div>
      <div style={styles.subcontainer}>
        <input
          type="text"
          value={nameState}
          placeholder={"Name:"}
          style={styles.input}
          onChange={(event) => {
            setNameState(event.target.value);
          }}
        />
      </div>
      <div style={styles.subcontainer} onClick={randomizeMe}>
        <h2 style={styles.header} className={"button"}>
          {civ.civ}
        </h2>
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
    minHeight: "60px",
  },
  subcontainer: {
    minWidth: "25%",
  },
  icon: {
    height: "35px",
    width: "35px",
  },
  input: {
    width: "75px",
    height: "40px",
    fontSize: "17px",
  },
  header: {
    fontSize: "100%",
  },
  subText: {
    fontSize: "100%",
  },
  ionicon: {
    height: "25px",
    width: "25px",
    marginBottom: "4px",
  },
};

export default PlayerListEntry;
