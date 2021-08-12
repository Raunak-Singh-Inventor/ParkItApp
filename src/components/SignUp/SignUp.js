import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, TextField, Card } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

import signupgirl from "../../images/signupgirl.png";

import SubmitButton from "../SubmitButton";

export default function SignUp(props) {
  const [documentHeight, setDocumentHeight] = useState(0);
  const [cardMargintop, setCardMarginTop] = useState(300);
  const [cardHeight, setCardHeight] = useState(550);
  const [signUpGirlImageSize, setSignUpGirlImageSize] = useState(500);
  // eslint-disable-next-line
  useEffect(() => {
    setDocumentHeight(document.documentElement.offsetHeight);
  });

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
      setCardMarginTop(documentHeight / 2);
      setCardHeight(1000);
      setSignUpGirlImageSize(300);
    } else if (isTabletOrMobile === true && isPortrait === false) {
      setCardMarginTop(documentHeight / 2);
      setCardHeight(550);
      setSignUpGirlImageSize(300);
    } else {
      setCardMarginTop(300);
      setCardHeight(550);
      setSignUpGirlImageSize(500);
    }
  });

  return (
    <div style={{ height: 80, backgroundColor: "#f50057" }}>
      <div className="container">
        <div className="row"></div>
        <div className="row">
          <div className="col-md-4"></div>
          <Card
            className="col-md-4"
            style={{
              marginTop: cardMargintop,
              width: 2000,
              height: cardHeight,
            }}
          >
            <div className="row">
              <div className="col-md-6" style={{ textAlign: "center" }}>
                <h1 style={{ fontSize: 64 }} className="SignUpText">
                  Sign up to Park It!
                </h1>
                <img
                  style={{ width: signUpGirlImageSize }}
                  src={signupgirl}
                  alt={"signUp"}
                />
              </div>
              <div className="col-md-6">
                <div style={{ marginTop: 20 }}>
                  <ButtonGroup
                    disableElevation
                    size="large"
                    color="secondary"
                    onClick={props.onRolePickerChange}
                  >
                    <Button variant={props.patientRolePickerColor}>
                      Patient
                    </Button>
                    <Button variant={props.doctorRolePickerColor}>
                      Doctor
                    </Button>
                  </ButtonGroup>
                  <form noValidate autoComplete="off" style={{ marginTop: 30 }}>
                    <div>
                      <TextField
                        label="username"
                        name="username"
                        onChange={props.onChange}
                        style={{ width: 500 }}
                        error={props.isUsernameError}
                        required
                      />
                    </div>
                    <div style={{ marginTop: 30 }}>
                      <TextField
                        label="password"
                        name="password"
                        type="password"
                        onChange={props.onChange}
                        style={{ width: 500 }}
                        error={props.isPasswordError}
                        required
                      />
                    </div>
                    <div style={{ marginTop: 30 }}>
                      <TextField
                        label="email"
                        name="email"
                        type="email"
                        onChange={props.onChange}
                        style={{ width: 500 }}
                        error={props.isEmailError}
                        required
                      />
                    </div>
                    <div style={{ marginTop: 30 }}>
                      <TextField
                        label="phone number"
                        name="phone number"
                        onChange={props.onChange}
                        style={{ width: 500 }}
                        error={props.isPhoneNumberError}
                        value={props.phoneNumber} 
                        required
                      />
                    </div>
                    <div style={{ marginTop: 30 }}>
                      <TextField
                        onChange={props.onChange}
                        value={props.deviceID}
                        name="deviceID"
                        label="Device ID"
                        style={{ width: 500 }}
                        error={props.isDeviceIDError}
                        required
                      />
                    </div>
                    <SubmitButton
                      username={props.username}
                      password={props.password}
                      email={props.email}
                      phoneNumber={props.phoneNumber}
                      role={props.role}
                      deviceID={props.deviceID}
                      authenticationCode={"authenticationCode"}
                      onClick={props.signUp}
                      text={"Sign Up"}
                    />
                  </form>
                </div>
              </div>
            </div>
          </Card>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}
