import React from "react";
import CivListEntry from "./CivListEntry";
import CivListTierHeader from "./CivListTierHeader";

const CivList = ({ list, activeCivs, setActiveCivs }) => {
  let content = [];
  let prevTier = 0;
  console.log(activeCivs);
  for (let i = 0; i < list.length; i++) {
    if (prevTier !== list[i].tier) {
      content.push(
        <CivListTierHeader
          activeCivs={activeCivs}
          setActiveCivs={setActiveCivs}
          tier={list[i].tier}
        />
      );
    }
    content.push(
      <CivListEntry
        civ={list[i].civ}
        bias={list[i].bias}
        tier={list[i].tier}
        icon={list[i].icon}
        active={activeCivs.includes(list[i])}
        index={i}
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
};

export default CivList;
