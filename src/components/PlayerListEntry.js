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
        <p style={styles.header} className={"button"}>
          {civ.civ}
        </p>
        <p style={styles.subText}>Tier: {civ.tier}</p>
      </div>
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
    backgroundColor: "#f7f7f7",
  },
  subcontainer: {
    minWidth: "20%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    height: "35px",
    width: "35px",
  },
  input: {
    minWidth: "50px",
    marginRight: "20px",
    marginLeft: "20px",
    height: "20px",
    fontSize: "17px",
    border: "none",
    borderBottom: "1px solid black",
    backgroundColor: "#f7f7f7",
  },
  header: {
    fontSize: "100%",
    fontWeight: "bold",
    marginLeft: "20px",
  },
  subText: {
    fontSize: "100%",
    marginLeft: "10px",
    marginBottom: "10px",
  },
  ionicon: {
    height: "25px",
    width: "25px",
    marginTop: "4px",
    marginLeft: "10px",
  },
};

export default PlayerListEntry;
