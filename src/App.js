import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, TextField, Card } from "@material-ui/core";
import signupgril from "../src/images/signupgirl.png";
import { useMediaQuery } from "react-responsive";
import "bootstrap/dist/css/bootstrap.min.css";
import { API, graphqlOperation, Auth } from "aws-amplify";
import "./App.css";

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
  const [documentHeight, setDocumentHeight] = useState(0);
  const [documentWidth, setDocumentWidth] = useState(0);
  const [isUsernameError, setIsUsernameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPhoneNumberError, setIsPhoneNumberError] = useState(false);
  const [isRoleError, setIsRoleError] = useState(false);
  const [cardHeight, setCardHeight] = useState(0);
  const [textboxWidth, setTextboxWidth] = useState(0);

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
      if (String(err).toLowerCase().includes("username")) {
        setIsUsernameError(true);
      } else if (
        err.code !== undefined &&
        err.code.toLowerCase().includes("username")
      ) {
        setIsUsernameError(true);
      } else {
        setIsUsernameError(false);
      }
      if (String(err).toLowerCase().includes("password")) {
        setIsPasswordError(true);
      } else if (
        err.code !== undefined &&
        err.code.toLowerCase().includes("password")
      ) {
        setIsPasswordError(true);
      } else {
        setIsPasswordError(false);
      }
      if (String(err).toLowerCase().includes("email")) {
        setIsEmailError(true);
      } else if (
        err.message !== undefined &&
        err.message.toLowerCase().includes("email")
      ) {
        setIsEmailError(true);
      } else {
        setIsEmailError(false);
      }
      if (String(err).toLowerCase().includes("phone number")) {
        setIsPhoneNumberError(true);
      } else {
        setIsPhoneNumberError(false);
      }
      if (String(err).toLowerCase().includes("role")) {
        setIsRoleError(true);
      } else {
        setIsRoleError(false);
      }
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

  const onRolePickerChange = (value) => {
    setRole(value.target.innerText.toLowerCase());
  };

  // eslint-disable-next-line
  useEffect(() => {
    setDocumentHeight(document.documentElement.offsetHeight);
    setDocumentWidth(document.documentElement.offsetWidth);
  });

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  useEffect(() => {
    if (isTabletOrMobile === false) {
      setCardHeight(550);
      setTextboxWidth(500);
    } else {
      setCardHeight(700);
      setTextboxWidth(300);
    }
  });

  return (
    <div className="App">
      {step === 2 && (
        <>
          <div style={{ height: 80, backgroundColor: "#f50057" }}>
            <div className="row"></div>
            <div className="row" style={{ marginTop: documentHeight / 8 }}>
              <div className="col-md-4"></div>
              <Card
                className="col-md-4"
                style={{ width: 1100, height: cardHeight }}
              >
                <div className="row">
                  <div className="col-md-6" style={{ textAlign: "center" }}>
                    <h1 style={{ fontSize: 64 }} className="SignUpText">
                      Sign up to Park It!
                    </h1>
                    {(isTabletOrMobile === false || isPortrait===false) && (
                      <img src={signupgril} alt={"signUp"} />
                    )}
                  </div>
                  <div className="col-md-6">
                    <div style={{ marginTop: 20 }}>
                      <ButtonGroup
                        disableElevation
                        size="large"
                        color="secondary"
                        onClick={onRolePickerChange}
                      >
                        <Button>Patient</Button>
                        <Button>Doctor</Button>
                      </ButtonGroup>
                      <form
                        noValidate
                        autoComplete="off"
                        style={{ marginTop: 30 }}
                      >
                        <div>
                          <TextField
                            label="username"
                            name="username"
                            onChange={onChange}
                            style={{ width: textboxWidth }}
                            error={isUsernameError}
                            required
                          />
                        </div>
                        <div style={{ marginTop: 30 }}>
                          <TextField
                            label="password"
                            name="password"
                            type="password"
                            onChange={onChange}
                            style={{ width: textboxWidth }}
                            error={isPasswordError}
                            required
                          />
                        </div>
                        <div style={{ marginTop: 30 }}>
                          <TextField
                            label="email"
                            name="email"
                            type="email"
                            onChange={onChange}
                            style={{ width: textboxWidth }}
                            error={isEmailError}
                            required
                          />
                        </div>
                        <div style={{ marginTop: 30 }}>
                          <TextField
                            label="phone number"
                            name="phone number"
                            onChange={onChange}
                            style={{ width: textboxWidth }}
                            error={isPhoneNumberError}
                          />
                        </div>
                        <div style={{ marginTop: 30 }}>
                          <TextField
                            onChange={onChange}
                            value={role}
                            name="role"
                            disabled
                            style={{ width: textboxWidth }}
                            error={isRoleError}
                            required
                          />
                        </div>
                      </form>
                      <Button
                        style={{ marginTop: 30, marginBottom: 10 }}
                        color="secondary"
                        variant="contained"
                        onClick={signUp}
                      >
                        Sign Up
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
              <div className="col-md-4"></div>
            </div>
          </div>
          <div
            style={{
              height: 1200,
              background: "#f3f3f3",
            }}
          ></div>
        </>
      )}
      {step === 3 && (
        <div>
          <TextField
            placeholder="username"
            onChange={onChange}
            name="username"
          />
          <TextField
            placeholder="authentication code"
            onChange={onChange}
            name="authenticationCode"
            type="authenticationCode"
          />
          <Button onClick={confirmSignUp}>Confirm Sign Up</Button>
        </div>
      )}
      {step === 0 && (
        <div>
          <TextField
            placeholder="username"
            onChange={onChange}
            name="username"
          />
          <TextField
            placeholder="password"
            onChange={onChange}
            name="password"
            type="password"
          />
          <Button onClick={signIn}>Sign In</Button>
          <Button onClick={createAccount}>Create Account</Button>
        </div>
      )}
      {step === 1 && (
        <div>
          <Button onClick={signOut}>Sign Out</Button>
        </div>
      )}
    </div>
  );
}

export default App;
