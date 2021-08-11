import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, TextField, Card } from "@material-ui/core";
import signupgirl from "../../images/signupgirl.png";

import SubmitButton from "./SubmitButton";

export default function SignUp(props) {
  const [documentHeight, setDocumentHeight] = useState(0);
  // eslint-disable-next-line
  useEffect(() => {
    setDocumentHeight(document.documentElement.offsetHeight);
  });

  return (
    <div style={{ height: 80, backgroundColor: "#f50057" }}>
      <div className="container">
        <div className="row"></div>
        <div className="row" style={{ marginTop: documentHeight / 8 }}>
          <div className="col-md-4"></div>
          <Card
            className="col-md-4"
            style={{ marginTop: 300, width: 2000, height: 550 }}
          >
            <div className="row">
              <div className="col-md-6" style={{ textAlign: "center" }}>
                <h1 style={{ fontSize: 64 }} className="SignUpText">
                  Sign up to Park It!
                </h1>
                <img src={signupgirl} alt={"signUp"} />
              </div>
              <div className="col-md-6">
                <div style={{ marginTop: 20 }}>
                  <ButtonGroup
                    disableElevation
                    size="large"
                    color="secondary"
                    onClick={props.onRolePickerChange}
                  >
                    <Button variant={props.patientRolePickerColor}>Patient</Button>
                    <Button variant={props.doctorRolePickerColor}>Doctor</Button>
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
                      />
                    </div>
                    <div style={{ marginTop: 30 }}>
                      <TextField
                        onChange={props.onChange}
                        value={props.role}
                        name="role"
                        disabled
                        style={{ width: 500 }}
                        error={props.isRoleError}
                        required
                      />
                    </div>
                    <SubmitButton
                      username={props.username}
                      password={props.password}
                      email={props.email}
                      phoneNumber={props.phoneNumber}
                      role={props.role}
                      signUp={props.signUp}
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
