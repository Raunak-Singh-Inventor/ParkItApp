import React, { useState, useEffect } from "react";
import { Card } from "react-rainbow-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { API, graphqlOperation } from "aws-amplify";
import "./App.css";

import logo from "../src/images/Logo.jpg";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import AWS from "aws-sdk";

function App() {
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-west-2:us-west-2_3HXIrQxxg",
  });

  const [measurements, setMeasurements] = useState([]);
  const [gsrMeasurements, setGsrMeasurements] = useState({});
  const [micMeasurements, setMicMeasurements] = useState({});
  const [gyroMeasurements, setGyroMeasurements] = useState({});

  useEffect(() => {
    async function fetchData() {
      const customListMeasurements = /* GraphQL */ `
        query MyQuery {
          listMeasurements {
            items {
              id
              clientID
              measurementType
              measurementValue
            }
          }
        }
      `;
      const rResponses = [];
      const response = await API.graphql(
        graphqlOperation(customListMeasurements)
      );
      if (measurements.length !== response.data.listMeasurements.items.length) {
        for (let i = 0; i < response.data.listMeasurements.items.length; i++) {
          rResponses.push(response.data.listMeasurements.items[i]);
          setMeasurements(rResponses);
        }
      }
    }
    fetchData();
  }, [measurements]);

  console.log("measurements:", measurements);

  useEffect(() => {
    let gsr = {};
    let mic = {};
    let gyro = {};
    for (let i = 0; i < measurements.length; i++) {
      if (measurements[i].measurementType === "GSR") {
        gsr[measurements[i].id] = measurements[i].measurementValue;
      } else if (measurements[i].measurementType === "Mic") {
        mic[measurements[i].id] = measurements[i].measurementValue;
      } else {
        gyro[measurements[i].id] = measurements[i].measurementValue;
      }
    }
    setGsrMeasurements(gsr);
    setMicMeasurements(mic);
    setGyroMeasurements(gyro);
    // eslint-disable-next-line
  }, [measurements.length]);

  console.log("gsrMeasurements:", gsrMeasurements);
  console.log("micMeasurements:", micMeasurements);
  console.log("gyroMeasurements:", gyroMeasurements);

  return (
    <div className="App">
      <div className="row">
        <div className="col-md-4">
          <h1 style={{ color: "white", padding: 20 }}>Park It!</h1>
        </div>
        <div className="col-md-4">
          <img style={{ height: 100, width: 100 }} src={logo} alt={logo} />
        </div>
        <div className="col-md-4">
          {measurements.length !== 0 ? (
            <h1 style={{ color: "white", padding: 20 }}>
              Device ID: {measurements[0].clientID}
            </h1>
          ) : (
            <h1 style={{ color: "white", padding: 20 }}>Device ID: NA</h1>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-md-4" style={{ padding: 50 }}>
          <Card>
            <h1>Hello</h1>
          </Card>
        </div>
        <div className="col-md-4" style={{ padding: 50 }}>
          <Card>
            <h1>Hello</h1>
          </Card>
        </div>
        <div className="col-md-4" style={{ padding: 50 }}>
          <Card>
            <h1>Hello</h1>
          </Card>
        </div>
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
