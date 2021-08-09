import React, { useState, useEffect } from "react";
import { Card, Input } from "react-rainbow-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { API, graphqlOperation, Auth } from "aws-amplify";
import "./App.css";

import logo from "../src/images/LogoTransparent.png";
import AWS from "aws-sdk";

function App() {
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-west-2:us-west-2_3HXIrQxxg",
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [authenticationCode, setAuthenticationCode] = useState("");
  const [role, setRole] = useState("");
  const [step, setStep] = useState(0);
  const [measurements, setMeasurements] = useState([]);
  const [gsrMeasurements, setGsrMeasurements] = useState({});
  const [micMeasurements, setMicMeasurements] = useState({});
  const [gyroMeasurements, setGyroMeasurements] = useState({});

  const onChange = (e) => {
    console.log("e.target.name:", e.target.name);
    console.log("e.target.value:", e.target.value);
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "phone_number") {
      setPhoneNumber(e.target.value);
    } else if (e.target.name === "authenticationCode") {
      setAuthenticationCode(e.target.value);
    } else if (e.target.name === "role") {
      setRole(e.target.value);
    } else {
      console.log("unvalid attribute for name:", e.target.name);
    }
  };

  const signUp = async () => {
    try {
      await Auth.signUp({
        username: username,
        password: password,
        attributes: {
          email: email,
          phone_number: phoneNumber,
          "custom:Role": role,
        },
      });
      setStep(3);
      console.log("succesfully signed up!");
    } catch (err) {
      console.log("error signing up:", err);
    }
  };

  const confirmSignUp = async () => {
    try {
      await Auth.confirmSignUp(username, authenticationCode);
      setStep(1);
      console.log("user succesfully signed up!");
    } catch (err) {
      console.log("error confirming sign up:", err);
    }
  };

  async function signIn() {
    try {
      await Auth.signIn(username, password);
      setStep(1);
      console.log("user succesfully signed in!");
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  async function signOut() {
    try {
      await Auth.signOut();
      setStep(0);
      console.log("user succesfully signed out");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  const createAccount = (e) => {
    e.preventDefault();
    setStep(2);
  };

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
    if (step === 1) {
      fetchData();
    }
  }, [measurements, step]);

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
      {step === 2 && (
        <div>
          <Input placeholder="username" onChange={onChange} name="username" />
          <Input
            placeholder="password"
            onChange={onChange}
            name="password"
            type="password"
          />
          <Input
            placeholder="email"
            onChange={onChange}
            name="email"
            type="email"
          />
          <Input
            placeholder="phone number"
            onChange={onChange}
            name="phone_number"
            type="phone_number"
          />
          <Input
            placeholder="doctor/patient"
            onChange={onChange}
            name="role"
            type="role"
          />
          <button onClick={signUp}>Sign Up</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <Input placeholder="username" onChange={onChange} name="username" />
          <Input
            placeholder="authentication code"
            onChange={onChange}
            name="authenticationCode"
            type="authenticationCode"
          />
          <button onClick={confirmSignUp}>Confirm Sign Up</button>
        </div>
      )}
      {step === 0 && (
        <div>
          <Input placeholder="username" onChange={onChange} name="username" />
          <Input
            placeholder="password"
            onChange={onChange}
            name="password"
            type="password"
          />
          <button onClick={signIn}>Sign In</button>
          <button onClick={createAccount}>Create Account</button>
        </div>
      )}
      {step === 1 && (
        <>
          <button onClick={signOut}>Sign Out</button>
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
        </>
      )}
    </div>
  );
}

export default App;
