import React, { useState, useEffect } from "react";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import {
  AreaChart,
  Area,
  YAxis,
  CartesianGrid,
  Tooltip,
  XAxis,
} from "recharts";
import { useMediaQuery } from "react-responsive";

import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";

export default function PatientDashboard(props) {
  const [gsrAvg, setGsrAvg] = useState(0);
  const [micAvg, setMicAvg] = useState(0);
  const [pitchAvg, setPitchAvg] = useState(0);
  const [rollAvg, setRollAvg] = useState(0);
  const [yawAvg, setYawAvg] = useState([]);
  const [gsrList, setGsrList] = useState([]);
  const [micList, setMicList] = useState([]);
  const [pitchList, setPitchList] = useState([]);
  const [rollList, setRollList] = useState([]);
  const [yawList, setYawList] = useState([]);
  const [data, setData] = useState([]);
  const [types, setTypes] = useState(["GSR", "Mic", "Gyro"]);
  const [isGsrSelected, setIsGsrSelected] = useState(true);
  const [isMicSelected, setIsMicSelected] = useState(true);
  const [isGyroSelected, setIsGyroSelected] = useState(true);

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
    setGsrList([]);
    setMicList([]);
    setPitchList([]);
    setRollList([]);
    setYawList([]);
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
    for (let i = 0; i < Object.keys(props.pitchMeasurements).length; i++) {
      sum += props.pitchMeasurements[i];
      setPitchList((pitchList) => [...pitchList, props.pitchMeasurements[i]]);
    }
    setPitchAvg(Math.round(sum / Object.keys(props.pitchMeasurements).length));
    for (let i = 0; i < Object.keys(props.rollMeasurements).length; i++) {
      sum += props.rollMeasurements[i];
      setRollList((rollList) => [...rollList, props.rollMeasurements[i]]);
    }
    setRollAvg(Math.round(sum / Object.keys(props.rollMeasurements).length));
    for (let i = 0; i < Object.keys(props.yawMeasurements).length; i++) {
      sum += props.yawMeasurements[i];
      setYawList((yawList) => [...yawList, props.yawMeasurements[i]]);
    }
    setYawAvg(Math.round(sum / Object.keys(props.yawMeasurements).length));
  }, [
    props.gsrMeasurements,
    props.micMeasurements,
    props.pitchMeasurements,
    props.rollMeasurements,
    props.yawMeasurements,
  ]);

  console.log("gsrAvg:", gsrAvg);
  console.log("micAvg:", micAvg);
  console.log("pitchAvg:", pitchAvg);
  console.log("rollAvg:", rollAvg);
  console.log("yawAvg:", yawAvg);
  console.log("gsrList:", gsrList);
  console.log("micList:", micList);
  console.log("pitchList:", pitchList);
  console.log("rollList:", rollList);
  console.log("yawList:", yawList);

  let cd = [];
  useEffect(() => {
    for (let i = 0; i < 50; i++) {
      let dict = {};
      dict["id"] = i;
      if (i < gsrList.length) {
        dict["gsr"] = gsrList[i];
      } else {
        dict["gsr"] = 0;
      }
      if (i < micList.length) {
        dict["mic"] = micList[i];
      } else {
        dict["mic"] = 0;
      }
      if (i < pitchList.length) {
        dict["pitch"] = pitchList[i];
      } else {
        dict["pitch"] = 0;
      }
      if (i < rollList.length) {
        dict["roll"] = rollList[i];
      } else {
        dict["roll"] = 0;
      }
      if (i < yawList.length) {
        dict["yaw"] = yawList[i];
      } else {
        dict["yaw"] = 0;
      }
      cd.push(dict);
      setData(cd);
    }
  }, [gsrList, micList, pitchList, rollList, yawList]);

  console.log("data:", data);

  const handleType = (event, newTypes) => {
    setTypes(newTypes);
    setIsGsrSelected(false);
    setIsMicSelected(false);
    setIsGyroSelected(false);
    for (let i = 0; i < newTypes.length; i++) {
      if (newTypes[i] === "GSR") {
        setIsGsrSelected(true);
      }
      if (newTypes[i] === "Mic") {
        setIsMicSelected(true);
      }
      if (newTypes[i] === "Gyro") {
        setIsGyroSelected(true);
      }
    }
  };

  console.log("isGsrSelected", isGsrSelected);
  console.log("isMicSelected", isMicSelected);
  console.log("isGyroSelected", isGyroSelected);

  return (
    <>
      <div className="row">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <SwipeableTemporaryDrawer
            setStep={props.setStep}
            signOut={props.signOut}
          />
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <h5>What measurement would you like to view?</h5>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <h5>DeviceID: {props.deviceID}</h5>
        </div>
      </div>
      <div className="row">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <ToggleButtonGroup
              value={types}
              onChange={handleType}
              aria-label="text formatting"
            >
              <ToggleButton value="GSR" aria-label="GSR">
                GSR
              </ToggleButton>
              <ToggleButton value="Mic" aria-label="Mic">
                Mic
              </ToggleButton>
              <ToggleButton value="Gyro" aria-label="Gyro">
                Gyro
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
      </div>
      <AreaChart
        width={window.innerWidth}
        height={500}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
        <YAxis />
        <Tooltip />
        {isGsrSelected === true && (
          <Area
            type="monotone"
            dataKey="gsr"
            stackId="1"
            stroke="#fc0303"
            fill="#fc0303"
          />
        )}
        {isMicSelected === true && (
          <Area
            type="monotone"
            dataKey="mic"
            stackId="1"
            stroke="#fc5e03"
            fill="#fc5e03"
          />
        )}
        {isGyroSelected === true && (
          <Area
            type="monotone"
            dataKey="pitch"
            stackId="1"
            stroke="#fcb103"
            fill="#fcb103"
          />
        )}
        {isGyroSelected === true && (
          <Area
            type="monotone"
            dataKey="roll"
            stackId="1"
            stroke="#fc035a"
            fill="#fc035a"
          />
        )}
        {isGyroSelected === true && (
          <Area
            type="monotone"
            dataKey="yaw"
            stackId="1"
            stroke="#ad03fc"
            fill="blue"
          />
        )}
      </AreaChart>
      <div className="row">
        <div className="col-md-4 d-flex align-items-center justify-content-center"></div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <h2>Showing readings of&nbsp;</h2>
          {types.map((type) => (
            <h2>{type}&nbsp;</h2>
          ))}
        </div>
      </div>
    </>
  );
}
