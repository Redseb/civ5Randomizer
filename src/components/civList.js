import React from "react";
import CivListEntry from "./CivListEntry";

const CivList = ({ list, activeCivs, setActiveCivs }) => {
  let content = [];
  let prevTier = 0;
  console.log(activeCivs);
  for (let i = 0; i < list.length; i++) {
    if (prevTier !== list[i].tier) {
      content.push(<h1 style={styles.header}>Tier {list[i].tier}</h1>);
    }
    content.push(
      <CivListEntry
        civ={list[i].civ}
        bias={list[i].bias}
        tier={list[i].tier}
        icon={list[i].icon}
        setActiveCivs={setActiveCivs}
        activeCivs={activeCivs}
      />
    );
    prevTier = list[i].tier;
  }
  return <div style={styles.container}>{content}</div>;
};

const styles = {
  container: {
    minWidth: "45vw",
  },
  header: {
    textAlign: "center",
  },
};

export default CivList;
