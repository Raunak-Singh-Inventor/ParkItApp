import React, { useState, useEffect } from "react";
import { TextField, Card } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

import confirmsignupgirl from "../../images/confirmsignupgirl.png";

import SubmitButton from "../SubmitButton";

export default function SignUp(props) {
  const [documentHeight, setDocumentHeight] = useState(0);
  const [cardMarginTop, setCardMarginTop] = useState(300);
  const [cardHeight, setCardHeight] = useState(430);
  const [cardMarginLeft, setCardMarginLeft] = useState(0);
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
      setCardHeight(530);
      setCardMarginLeft(0);
    } else if (isTabletOrMobile === true && isPortrait === false) {
      setCardMarginTop(documentHeight / 2);
      setCardHeight(530);
      setCardMarginLeft(80);
    } else {
      setCardMarginTop(300);
      setCardHeight(530);
      setCardMarginLeft(80);
    }
  });

  return (
    <div style={{ height: 80, backgroundColor: "#f50057" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <Card
            className="col-md-4"
            style={{
              textAlign: "center",
              marginTop: cardMarginTop,
              width: 500,
              height: cardHeight,
              marginLeft: cardMarginLeft,
            }}
          >
            <img src={confirmsignupgirl} alt={"confirmSignUp"} style={{width:300}}/>
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
                role={"role"}
                authenticationCode={props.authenticationCode}
                onClick={props.confirmSignUp}
                text={"Confirm Sign Up"}
              />
            </form>
          </Card>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}
