import React, { useState, useEffect } from "react";
import { Button, TextField, Card } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

import signingirl from "../../images/signingirl.png";
import cognito from "../../images/cognito.jpg";
import edukit from "../../images/edukit.png";
import DynamoDB from "../../images/DynamoDB.png";
import heart from "../../images/heart.png";
import appsync from "../../images/appsync.png";
import amplify from "../../images/amplify.png";

import SubmitButton from "../SubmitButton";
import Header from "../Header";

export default function SignUp(props) {
  const [documentHeight, setDocumentHeight] = useState(0);
  const [cardMargintop, setCardMarginTop] = useState(200);
  const [cardHeight, setCardHeight] = useState(550);
  const [signInGirlImageSize, setSignInGirlImageSize] = useState(100);
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
      setSignInGirlImageSize(300);
    } else if (isTabletOrMobile === true && isPortrait === false) {
      setCardMarginTop(documentHeight / 2);
      setCardHeight(550);
      setSignInGirlImageSize(300);
    } else {
      setCardMarginTop(100);
      setCardHeight(550);
      setSignInGirlImageSize(500);
    }
  });

  return (
    <div style={{ backgroundColor: "#ebd8ed", height: 1020 }}>
      <Header text1={""} />
      <div className="container">
        <div className="row">
          <div className="col-md-4 align-items-center justify-content-center"></div>
          <Card
            className="col-md-4 align-items-center justify-content-center"
            style={{
              textAlign: "center",
              marginTop: cardMargintop,
              width: 2000,
              height: cardHeight,
            }}
          >
            <h1 style={{ marginTop: 10 }} className="SignUpText">
              Welcome Back!
            </h1>
            <div className="row">
              <div className="col-md-6">
                <img
                  style={{ width: signInGirlImageSize }}
                  src={signingirl}
                  alt={"signIn"}
                />
              </div>
              <div className="col-md-6">
                <form noValidate autoComplete="off">
                  <div>
                    <div>
                      <TextField
                        style={{ marginTop: 50, width: 500 }}
                        onChange={props.onChange}
                        label="username"
                        name="username"
                        error={props.isUsernameError}
                        required
                      />
                    </div>
                    <div>
                      <TextField
                        style={{ marginTop: 20, width: 500 }}
                        onChange={props.onChange}
                        label="password"
                        name="password"
                        type="password"
                        error={props.isPasswordError}
                        required
                      />
                    </div>
                    <div style={{ marginTop: 50 }}>
                      <SubmitButton
                        username={props.username}
                        password={props.password}
                        email={"email"}
                        phoneNumber={"phoneNumber"}
                        role={"patient"}
                        deviceID={"deviceID"}
                        doctor={"doctor"}
                        authenticationCode={"authenticationCode"}
                        onClick={props.signIn}
                        text={"Sign In"}
                      />
                    </div>
                    <div style={{ marginTop: 50 }}>
                      <h6>-----or------</h6>
                    </div>
                    <div style={{ marginTop: 50 }}>
                      <Button onClick={props.createAccount}>
                        <h5>Create Account</h5>
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Card>
          <div className="col-md-4 align-items-center justify-content-center"></div>
        </div>
        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            Made with {<img src={heart} style={{ width: 40 }} />} in React by
            Raunak Singh
          </div>
        </div>
        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-md-12">
            Built on AWS EduKit&nbsp;
            {<img src={edukit} style={{ width: 40 }} />}&nbsp;, Secured by AWS
            Cognito&nbsp;{<img src={cognito} style={{ width: 40 }} />}&nbsp;,
            Data stored in DynamoDB&nbsp;
            {<img src={DynamoDB} style={{ width: 40 }} />}&nbsp;, Queries built
            on AWS AppSync&nbsp;
            {<img src={appsync} style={{ width: 40 }} />}&nbsp;, App deployed on
            AWS Amplify&nbsp;
            {<img src={amplify} style={{ width: 40 }} />}&nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}
