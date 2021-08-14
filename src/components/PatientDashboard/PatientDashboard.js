import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";

export default function PatientDashboard(props) {
  const [gsrAvg, setGsrAvg] = useState(0);
  const [micAvg, setMicAvg] = useState(0);
  const [gyroAvg, setGyroAvg] = useState(0);
  const [gsrList, setGsrList] = useState([]);
  const [micList, setMicList] = useState([]);
  const [gyroList, setGyroList] = useState([]);

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

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < Object.keys(props.gsrMeasurements).length; i++) {
      sum += props.gsrMeasurements[i];
      setGsrList((gsrList) => [...gsrList, props.gsrMeasurements[i]]);
    }
    setGsrAvg(Math.round(sum / Object.keys(props.gsrMeasurements).length));
    sum = 0;
    for (let i = 0; i < Object.keys(props.micMeasurements).length; i++) {
      sum += props.micMeasurements[i];
      setMicList((micList) => [...micList, props.micMeasurements[i]]);
    }
    setMicAvg(Math.round(sum / Object.keys(props.micMeasurements).length));
    sum = 0;
    for (let i = 0; i < Object.keys(props.gyroMeasurements).length; i++) {
      sum += props.gyroMeasurements[i];
      setGyroList((gyroList) => [...gyroList, props.gyroMeasurements[i]]);
    }
    setGyroAvg(Math.round(sum / Object.keys(props.gyroMeasurements).length));
  }, [props.gsrMeasurements, props.micMeasurements, props.gyroMeasurements]);

  console.log("gsrAvg:", gsrAvg);
  console.log("micAvg:", micAvg);
  console.log("gyroAvg:", gyroAvg);
  console.log("gsrList:", gsrList);
  console.log("micList:", micList);
  console.log("gyroList:", gyroList);

  return (
    <div className="row">
      <div className="col-md-4">
        <SwipeableTemporaryDrawer
          setStep={props.setStep}
          signOut={props.signOut}
        />
      </div>
      <div className="col-md-4">
          <h1>Hello, {props.username}</h1>
      </div>
      <div className="col-md-4">
          <h1>DeviceID: {props.deviceID}</h1>
      </div>
    </div>
  );
}
