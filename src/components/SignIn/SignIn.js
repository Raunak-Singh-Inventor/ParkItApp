import React, { useState, useEffect } from "react";
import { Button, TextField, Card } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

import signingirl from "../../images/signingirl.png";

import SubmitButton from "../SubmitButton";

export default function SignUp(props) {
  const [documentHeight, setDocumentHeight] = useState(0);
  const [cardMargintop, setCardMarginTop] = useState(300);
  const [cardHeight, setCardHeight] = useState(550);
  const [signInGirlImageSize, setSignInGirlImageSize] = useState(500);
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
      setCardMarginTop(300);
      setCardHeight(550);
      setSignInGirlImageSize(500);
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
                        style={{ marginTop: 20, width:500 }}
                        onChange={props.onChange}
                        label="username"
                        name="username"
                        error={props.isUsernameError}
                        required
                      />
                    </div>
                    <div>
                      <TextField
                        style={{ marginTop: 20, width:500  }}
                        onChange={props.onChange}
                        label="password"
                        name="password"
                        type="password"
                        error={props.isPasswordError}
                        required
                      />
                    </div>
                    <div style={{ marginTop: 20 }}>
                      <SubmitButton
                        username={props.username}
                        password={props.password}
                        email={"email"}
                        phoneNumber={"phoneNumber"}
                        role={"role"}
                        authenticationCode={"authenticationCode"}
                        onClick={props.signIn}
                        text={"Sign In"}
                      />
                    </div>
                    <div>
                      <h6>-----------------------------------------------or-----------------------------------------------</h6>
                    </div>
                    <div>
                      <Button onClick={props.createAccount}>
                        Create Account
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Card>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}
