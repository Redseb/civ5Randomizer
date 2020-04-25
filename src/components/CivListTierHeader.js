import React, { useState } from "react";
import listOfCivs from "../civList.js";

const CivListTierHeader = ({ tier, activeCivs, setActiveCivs }) => {
  const [isEnabling, setIsEnabling] = useState(false);
  const toggleAllTier = () => {
    console.log([
      ...activeCivs,
      ...listOfCivs.filter((item) => {
        return item.tier === tier;
      }),
    ]);
    if (isEnabling) {
      setActiveCivs([
        ...activeCivs,
        ...listOfCivs.filter((item) => {
          return item.tier === tier;
        }),
      ]);
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
    <div
      style={!isEnabling ? styles.header : styles.headerDisabled}
      onClick={toggleAllTier}
      className={"button"}
    >
      <h1>Tier {tier}</h1>
    </div>
  );
};

const styles = {
  header: {
    textAlign: "center",
    fontSize: "75%",
  },
  headerDisabled: {
    textAlign: "center",
    opacity: "0.4",
    filter: "grayscale(100%)",
    fontSize: "75%",
  },
};

export default CivListTierHeader;
