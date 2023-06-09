import React from "react";
import { useState } from "react";
import {
  ListItemWithProgress,
  ProgressBar,
  TotalVolumeProgressBar,
  VolumeVsMarketCapDiv,
} from "./SubNavVolumeVsMarketCap.styles";
import { BulletPoint } from "../NavBar/NavBar.styles";

export const SubNavVolumeVsMarketCap = ({
  totalVolume,
  text,
  percent,
  totalMarketCap,
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <ListItemWithProgress
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        color={hovered && "#BDBDBD"}
      >
        <BulletPoint />
        {totalVolume}
        {text}
        <ProgressBar>
          <TotalVolumeProgressBar percent={percent} />
        </ProgressBar>
      </ListItemWithProgress>
      {hovered && (
        <VolumeVsMarketCapDiv
          volume={totalVolume}
          totalMarketCap={totalMarketCap}
          totalVolumePercent={percent}
        />
      )}
    </>
  );
};
