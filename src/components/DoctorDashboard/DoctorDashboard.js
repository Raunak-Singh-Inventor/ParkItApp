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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import {
  faMicrophoneAlt,
  faHandScissors,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";

import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";
import Header from "../Header";

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
  const [orderedMessages, setOrderedMessages] = useState([]);
  const [orderedPatients, setOrderedPatients] = useState([]);
  const [patientsToDeviceIDs, setPatientsToDeviceIDs] = useState({});
  const [selectedPatient, setSelectedPatient] = useState("");
  const [message, setMessage] = useState("");

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

  const createData = () => {
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
  };

  let cd = [];
  useEffect(() => {
    createData();
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

  let messageTimes = [];
  let messages = [];
  let patients = [];
  let deviceIDs = {};
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
            deviceIDs[
              response.data.listMessagesToDoctors.items[j]["patientName"]
            ] = response.data.listMessagesToDoctors.items[j]["deviceID"];
          }
        }
      }
      setOrderedMessages(messages);
      setOrderedPatients(patients);
      setPatientsToDeviceIDs(deviceIDs);
    }

    fetchData();
  }, []);

  console.log("orderedMessages:", orderedMessages);
  console.log("orderedPatients:", orderedPatients);
  console.log("patientsToDeviceIDs", patientsToDeviceIDs);

  const onSelectChange = (e) => {
    setSelectedPatient(e.target.value);
    props.setDeviceID(patientsToDeviceIDs[e.target.value]);
  };

  return (
    <>
      <Header text1={"Welcome " + props.username} isPatient={false} />
      <div style={{ backgroundColor: "#ebd8ed", height: 1020 }}>
        <div className="row">
          <div className="col-md-3">
            <SwipeableTemporaryDrawer
              setStep={props.setStep}
              signOut={props.signOut}
            />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <h1>What measurement would you like to view?</h1>
          </div>
          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <h3>
              Patient:{" "}
              <Select
                style={{ backgroundColor: "#fc035a", color: "white" }}
                native
                value={selectedPatient}
                onChange={(e) => {
                  onSelectChange(e);
                  props.getMeasurements();
                  createData();
                }}
                inputProps={{
                  name: "patient",
                  id: "patient-native-simple",
                }}
              >
                <option value={undefined}>{""}</option>
                {[...new Set(orderedPatients)].map((patient) => (
                  <option value={patient}>{patient}</option>
                ))}
                ;
              </Select>
            </h3>
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
                <ToggleButton
                  value="GSR"
                  aria-label="GSR"
                  style={{ width: 200, backgroundColor: "#1d8f2c" }}
                >
                  <FontAwesomeIcon
                    icon={faHandScissors}
                    style={{ height: 50, width: 30, marginRight: 20 }}
                  />
                  <h5 style={{ color: "white" }}>GSR</h5>
                </ToggleButton>
                <ToggleButton
                  value="Mic"
                  aria-label="Mic"
                  style={{ width: 200, backgroundColor: "#fc5e03" }}
                >
                  <FontAwesomeIcon
                    icon={faMicrophoneAlt}
                    style={{ height: 50, width: 30, marginRight: 20 }}
                  />
                  <h5 style={{ color: "white" }}>Mic</h5>
                </ToggleButton>
                <ToggleButton
                  value="Gyro"
                  aria-label="Gyro"
                  style={{ width: 200, backgroundColor: "#ad03fc" }}
                >
                  <FontAwesomeIcon
                    icon={faCompass}
                    style={{ height: 50, width: 30, marginRight: 20 }}
                  />
                  <h5 style={{ color: "white" }}>Gyro</h5>
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
          style={{ backgroundColor: "white" }}
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
        <Divider
          component="li"
          style={{ height: 10, backgroundColor: "#fc035a" }}
        />
        <div className="row">
          <div className="col-md-3 d-flex align-items-center justify-content-center"></div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <h1>Showing readings of&nbsp;</h1>
            {types.map((type) => (
              <h1>{type}&nbsp;</h1>
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
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <List style={{ backgroundColor: "white" }}>
              {orderedMessages.map((message, i) => {
                return orderedPatients.map((patient, j) => {
                  if (i <= 2 && j === i) {
                    return (
                      <>
                        <ListItem
                          alignItems="flex-start"
                          style={{ width: 800 }}
                        >
                          <FontAwesomeIcon
                            icon={faPaperPlane}
                            style={{ height: 50, width: 30, marginRight: 20 }}
                          />
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
              onClick={() => {
                props.sendMessageToPatient(
                  selectedPatient,
                  message,
                  props.username
                );
              }}
              disabled={selectedPatient === ""}
            >
              Send to {selectedPatient}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
