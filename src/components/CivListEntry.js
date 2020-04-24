import React, { useState } from "react";

const CivListEntry = ({ civ, tier, bias, icon, setActiveCivs, activeCivs }) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <div
      key="civ"
      style={isActive ? styles.container : styles.containerDisabled}
      onClick={() => {
        if (!isActive) {
          setActiveCivs([
            ...activeCivs,
            { civ: civ, tier: tier, bias: bias, icon: icon },
          ]);
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
    opacity: "0.2",
    filter: "alpha(opacity=40)",
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
