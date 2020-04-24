import React, { useState, useEffect } from "react";
import "../App.css";
import listOfCivs from "../civList.js";

const CivListEntry = ({
  civ,
  tier,
  bias,
  icon,
  active,
  setActiveCivs,
  activeCivs,
  index,
}) => {
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    setIsActive(active);
  });

  console.log("active: ", active);
  return (
    <div
      className="button"
      key="civ"
      style={isActive ? styles.container : styles.containerDisabled}
      onClick={() => {
        if (!isActive) {
          setActiveCivs([...activeCivs, listOfCivs[index]]);
        } else {
          setActiveCivs(
            activeCivs.filter((el) => {
              return el.civ !== civ;
            })
          );
        }
        setIsActive(!isActive);
      }}
    >
      <div style={styles.subcontainer}>
        <img src={icon} style={styles.icon} alt={civ + " icon"} />
      </div>
      <div style={styles.subcontainer}>
        <h2 style={styles.header}>{civ}</h2>
      </div>
      <p style={styles.subText}>
        {bias}
        {tier}
      </p>
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
  containerDisabled: {
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
    opacity: "0.4",
    filter: "grayscale(100%)",
  },
  subcontainer: {
    minWidth: "30%",
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

export default CivListEntry;
