import React, { useState, useEffect } from "react";
import { Card } from "@material-ui/core";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
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
  const [gsrData, setGsrData] = useState([]);
  const [micData, setMicData] = useState([]);
  const [pitchData, setPitchData] = useState([]);
  const [rollData, setRollData] = useState([]);
  const [yawData, setYawData] = useState([]);

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

  useEffect(() => {
    let data = [];
    for (let i = 0; i < gsrList.length; i++) {
      data.push({ name: i, value: gsrList[i] });
    }
    setGsrData(data);
    data = [];
    for (let i = 0; i < micList.length; i++) {
      data.push({ name: i, value: micList[i] });
    }
    setMicData(data);
    data = [];
    for (let i = 0; i < pitchList.length; i++) {
      data.push({ name: i, value: pitchList[i] });
    }
    setPitchData(data);
    data = [];
    for (let i = 0; i < rollList.length; i++) {
      data.push({ name: i, value: rollList[i] });
    }
    setRollData(data);
    data = [];
    for (let i = 0; i < yawList.length; i++) {
      data.push({ name: i, value: yawList[i] });
    }
    setYawData(data);
  }, [gsrList, micList, pitchList, rollList, yawList]);

  console.log("gsrData:", gsrData);
  console.log("micData:", micData);
  console.log("pitchData:", pitchData);
  console.log("rollData:", rollData);
  console.log("yawData:", yawData);

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
          <h1>Hello, {props.username}</h1>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <h1>DeviceID: {props.deviceID}</h1>
        </div>
      </div>
      <div className="row">
        <Card className="col-md-4 d-flex align-items-center justify-content-center">
          <h1>Average Gsr Reading: {gsrAvg}</h1>
        </Card>
        <Card className="col-md-4 d-flex align-items-center justify-content-center">
          <h1>Average Mic Reading: {micAvg}</h1>
        </Card>
        <Card className="col-md-4 d-flex align-items-center justify-content-center">
          <h1>Average Pitch Reading: {pitchAvg}</h1>
        </Card>
        <Card className="col-md-4 d-flex align-items-center justify-content-center">
          <h1>Average Roll Reading: {rollAvg}</h1>
        </Card>
        <Card className="col-md-4 d-flex align-items-center justify-content-center">
          <h1>Average Yaw Reading: {yawAvg}</h1>
        </Card>
      </div>
      <LineChart
        width={1000}
        height={300}
        data={gsrData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <YAxis />
        <Tooltip />
      </LineChart>
      <LineChart
        width={1000}
        height={300}
        data={micData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <YAxis />
        <Tooltip />
      </LineChart>
      <LineChart
        width={1000}
        height={300}
        data={pitchData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <YAxis />
        <Tooltip />
      </LineChart>
      <LineChart
        width={1000}
        height={300}
        data={rollData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <YAxis />
        <Tooltip />
      </LineChart>
      <LineChart
        width={1000}
        height={300}
        data={yawData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </>
  );
}
