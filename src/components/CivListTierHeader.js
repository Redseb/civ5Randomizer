import React, { useState } from "react";
import listOfCivs from "../civList.js";

const CivListTierHeader = ({ tier, activeCivs, setActiveCivs }) => {
  const [isEnabling, setIsEnabling] = useState(false);
  const toggleAllTier = () => {
    console.log(activeCivs);
    if (isEnabling) {
      setActiveCivs(listOfCivs);
    } else {
      setActiveCivs(
        activeCivs.filter((item) => {
          return item.tier !== tier;
        })
      );
    }

    setIsEnabling(!isEnabling);
  };
  return (
    <div style={styles.header} onClick={toggleAllTier}>
      <h1>Tier {tier}</h1>
    </div>
  );
};

const styles = {
  header: {
    textAlign: "center",
  },
};

export default CivListTierHeader;
