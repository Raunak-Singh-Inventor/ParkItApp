import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import { API, graphqlOperation, Auth } from "aws-amplify";
import "./App.css";

import AWS from "aws-sdk";

import SignUp from "./components/SignUp/SignUp";
import ConfirmSignUp from "./components/ConfirmSignUp/ConfirmSignUp";
import SignIn from "./components/SignIn/SignIn";

function App() {
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-west-2:us-west-2_3HXIrQxxg",
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+1");
  const [authenticationCode, setAuthenticationCode] = useState("");
  const [role, setRole] = useState("");
  const [step, setStep] = useState(0);
  const [measurements, setMeasurements] = useState([]);
  const [gsrMeasurements, setGsrMeasurements] = useState({});
  const [micMeasurements, setMicMeasurements] = useState({});
  const [gyroMeasurements, setGyroMeasurements] = useState({});
  const [isUsernameError, setIsUsernameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPhoneNumberError, setIsPhoneNumberError] = useState(false);
  const [isAuthenticationCodeError, setIsAuthenticationCodeError] =
    useState(false);
  const [isRoleError, setIsRoleError] = useState(false);
  const [patientRolePickerColor, setPatientRolePickerColor] =
    useState("outlined");
  const [doctorRolePickerColor, setDoctorRolePickerColor] =
    useState("outlined");

  const onChange = (e) => {
    console.log("e.target.name:", e.target.name);
    console.log("e.target.value:", e.target.value);
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "phone number") {
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
      } else if (
        err.message !== undefined &&
        err.message.toLowerCase().includes("phone number")
      ) {
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
      setIsUsernameError(false);
      setIsAuthenticationCodeError(false);
      console.log("user succesfully signed up!");
      await Auth.signIn(username, password);
      console.log("user succesfully signed in!");
      setStep(1);
    } catch (err) {
      console.log("error confirming sign up:", err);
      setIsUsernameError(true);
      setIsAuthenticationCodeError(true);
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
    if (value.target.innerText.toLowerCase() === "patient") {
      setPatientRolePickerColor("contained");
      setDoctorRolePickerColor("outlined");
    } else if (value.target.innerText.toLowerCase() === "doctor") {
      setPatientRolePickerColor("outlined");
      setDoctorRolePickerColor("contained");
    } else {
    }
  };

  return (
    <div className="App">
      {step === 2 && (
        <SignUp
          onRolePickerChange={onRolePickerChange}
          patientRolePickerColor={patientRolePickerColor}
          doctorRolePickerColor={doctorRolePickerColor}
          onChange={onChange}
          isUsernameError={isUsernameError}
          isPasswordError={isPasswordError}
          isEmailError={isEmailError}
          isPhoneNumberError={isPhoneNumberError}
          isRoleError={isRoleError}
          username={username}
          password={password}
          email={email}
          phoneNumber={phoneNumber}
          role={role}
          signUp={signUp}
        />
      )}
      {step === 3 && (
        <ConfirmSignUp
          onChange={onChange}
          confirmSignUp={confirmSignUp}
          username={username}
          authenticationCode={authenticationCode}
          isUsernameError={isUsernameError}
          isAuthenticationCodeError={isAuthenticationCodeError}
        />
      )}
      {step === 0 && (
        <SignIn
          onChange={onChange}
          username={username}
          password={password}
          isUsernameError={isUsernameError}
          isPasswordError={isPasswordError}
          signIn={signIn}
          createAccount={createAccount}
        />
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
