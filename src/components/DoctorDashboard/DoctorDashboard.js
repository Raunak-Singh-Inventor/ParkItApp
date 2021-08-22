import React, { useState, useEffect } from "react";
import {
  Select,
  TextareaAutosize,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
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
import { API } from "aws-amplify";
import { listMessagesToDoctors } from "../../graphql/queries";

import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";

export default function DoctorDashboard(props) {
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
  const [deviceIDs, setDeviceIDs] = useState([]);
  const [orderedMessages, setOrderedMessages] = useState([]);
  const [orderedPatients, setOrderedPatients] = useState([]);

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
    const deviceIdSet = new Set();
    for (let i = 0; i < props.measurements.length; i++) {
      deviceIdSet.add(props.measurements[i].clientID);
    }
    setDeviceIDs(Array.from(deviceIdSet));
  }, [props.measurements]);

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
    props.deviceID,
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
  }, [gsrList, micList, pitchList, rollList, yawList, props.deviceID]);

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

  const deviceIdChange = (event) => {
    props.setDeviceID(event.target.value);
  };

  let messageTimes = [];
  let messages = [];
  let patients = [];
  useEffect(() => {
    async function fetchData() {
      const response = await API.graphql({
        query: listMessagesToDoctors,
        variables: {
          filter: { doctorName: { eq: props.username } },
        },
      });
      for (
        let i = 0;
        i < response.data.listMessagesToDoctors.items.length;
        i++
      ) {
        let updatedAt =
          response.data.listMessagesToDoctors.items[i]["updatedAt"];
        let updatedAtDate = updatedAt.split("T")[0];
        let updatedAtTime = updatedAt.split("T")[1];
        let updatedAtYear = updatedAtDate.split("-")[0];
        let updatedAtMonth = updatedAtDate.split("-")[1];
        let updatedAtDay = updatedAtDate.split("-")[2];
        let updatedAtHour = updatedAtTime.split(":")[0];
        let updatedAtMinute = updatedAtTime.split(":")[1];
        let updatedAtSecond = updatedAtTime
          .split(":")[2]
          .substring(0, updatedAtTime.split(":")[2].length - 1);
        let updatedAtTotal =
          parseFloat(updatedAtYear) * 31536000 +
          parseFloat(updatedAtMonth) * 2592000 +
          parseFloat(updatedAtDay) * 86400 +
          parseFloat(updatedAtHour) * 3600 +
          parseFloat(updatedAtMinute) * 60 +
          parseFloat(updatedAtSecond);
        console.log(response.data.listMessagesToDoctors.items);
        console.log("updatedAtTotal:", updatedAtTotal);
        response.data.listMessagesToDoctors.items[i]["updatedAt"] =
          updatedAtTotal;
        messageTimes.push(updatedAtTotal);
        messageTimes = messageTimes.sort().reverse();
      }
      console.log("messageTimes", messageTimes);
      for (let i = 0; i < messageTimes.length; i++) {
        for (
          let j = 0;
          j < response.data.listMessagesToDoctors.items.length;
          j++
        ) {
          if (
            messageTimes[i] ===
            response.data.listMessagesToDoctors.items[j]["updatedAt"]
          ) {
            messages.push(
              response.data.listMessagesToDoctors.items[j]["message"]
            );
            patients.push(
              response.data.listMessagesToDoctors.items[j]["patientName"]
            );
          }
        }
      }
      setOrderedMessages(messages);
      setOrderedPatients(patients);
    }

    fetchData();
  }, []);

  console.log("orderedMessages:", orderedMessages);
  console.log("orderedPatients:", orderedPatients);

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
          {deviceIDs.map((deviceID) => (
            <h5>
              DeviceID:{" "}
              <Select
                native
                value={props.deviceID}
                onChange={deviceIdChange}
                inputProps={{
                  name: "deviceID",
                  id: "deviceID-native-simple",
                }}
              >
                <option value={""}>{""}</option>
                <option value={deviceID}>{deviceID}</option>;
              </Select>
            </h5>
          ))}
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
      <div className="row" style={{ marginTop: 20 }}>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <h1>Send a message</h1>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <h1>Recent Messages</h1>
        </div>
      </div>
      <div className="row" style={{ marginTop: 5 }}>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <TextareaAutosize
            aria-label="message"
            placeholder="Message"
            style={{ width: 500, height: 200 }}
            onChange={(e) => {}}
          />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <List>
            {orderedMessages.map((message, i) => {
              return orderedPatients.map((patient, j) => {
                if (i <= 2 && j === i) {
                  return (
                    <>
                      <ListItem alignItems="flex-start" style={{ width: 800 }}>
                        <ListItemText primary={patient} secondary={message} />
                      </ListItem>
                      <Divider component="li" />
                    </>
                  );
                }
              });
            })}
          </List>
        </div>
      </div>
      <div className="row" style={{ marginTop: 0 }}>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <Button
            variant="contained"
            color="secondary"
            style={{ width: 500 }}
            onClick={() => {}}
          >
            Send to Patient
          </Button>
        </div>
      </div>
    </>
  );
}
