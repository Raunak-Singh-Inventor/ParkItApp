import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import SwipeableTemporaryDrawer from "../SwipeableTemporaryDrawer/SwipeableTemporaryDrawer";

export default function PatientDashboard(props) {
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-width: 1224px)",
  // });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  // eslint-disable-next-line
  useEffect(() => {
    if (isTabletOrMobile === true && isPortrait === true) {
    } else if (isTabletOrMobile === true && isPortrait === false) {
    } else {
    }
  });

  return (
    <div style={{ height: 80, backgroundColor: "#f50057" }}>
      <Button onClick={props.signOut}>Sign Out</Button>
      <SwipeableTemporaryDrawer setStep={props.setStep} />
    </div>
  );
}
