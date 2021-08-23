import React, { useState, useEffect } from "react";
import { TextField, Card } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

import confirmsignupgirl from "../../images/confirmsignupgirl.png";

import SubmitButton from "../SubmitButton";
import Header from "../Header";

export default function SignUp(props) {
  const [documentHeight, setDocumentHeight] = useState(0);
  const [cardMarginTop, setCardMarginTop] = useState(100);
  const [cardHeight, setCardHeight] = useState(430);
  const [cardMarginRight, setCardMarginRight] = useState(0);
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
      setCardMarginTop(100);
      setCardHeight(530);
      setCardMarginRight(0);
    } else if (isTabletOrMobile === true && isPortrait === false) {
      setCardMarginTop(100);
      setCardHeight(530);
      setCardMarginRight(80);
    } else {
      setCardMarginTop(100);
      setCardHeight(530);
      setCardMarginRight(300);
    }
  });

  return (
    <div style={{ backgroundColor: "#ebd8ed", height: 1020 }}>
      <Header text1={""} isPatient={true} />
      <div className="container">
        <div className="row">
          <div className="col-md-4 align-items-center justify-content-center"></div>
          <Card
            className="col-md-4 align-items-center justify-content-center"
            style={{
              textAlign: "center",
              marginTop: cardMarginTop,
              width: 500,
              height: cardHeight,
              marginRight: cardMarginRight,
            }}
          >
            <img
              src={confirmsignupgirl}
              alt={"confirmSignUp"}
              style={{ width: 300 }}
            />
            <form noValidate autoComplete="off">
              <div>
                <TextField
                  label="username"
                  name="username"
                  onChange={props.onChange}
                  error={props.isUsernameError}
                  required
                />
              </div>
              <div>
                <TextField
                  style={{ marginBottom: 20 }}
                  label="authentication code"
                  name="authenticationCode"
                  type="authenticationCode"
                  onChange={props.onChange}
                  error={props.isAuthenticationCodeError}
                  required
                />
              </div>
              <SubmitButton
                username={props.username}
                password={"password"}
                email={"email"}
                phoneNumber={"phoneNumber"}
                role={"patient"}
                deviceID={"deviceID"}
                doctor={"doctor"}
                authenticationCode={props.authenticationCode}
                onClick={props.confirmSignUp}
                text={"Confirm Sign Up"}
              />
            </form>
          </Card>
          <div className="col-md-4 align-items-center justify-content-center"></div>
        </div>
      </div>
    </div>
  );
}
