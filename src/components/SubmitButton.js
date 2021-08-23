import React from "react";
import { Button } from "@material-ui/core";

export default function SubmitButton(props) {
  if (
    props.username &&
    props.password &&
    props.email &&
    props.phoneNumber &&
    props.role === "patient" &&
    props.deviceID &&
    props.doctor &&
    props.authenticationCode
  ) {
    return (
      <Button
        style={{ marginTop: 30, marginBottom: 10 }}
        color="secondary"
        variant="contained"
        onClick={props.onClick}
        style={{ height: 50, width: 300 }}
      >
        <h5>{props.text}</h5>
      </Button>
    );
  } else if (
    props.username &&
    props.password &&
    props.email &&
    props.phoneNumber &&
    props.role === "doctor" &&
    props.authenticationCode
  ) {
    return (
      <Button
        style={{ marginTop: 30, marginBottom: 10 }}
        color="secondary"
        variant="contained"
        onClick={props.onClick}
        style={{ height: 50, width: 300 }}
      >
        <h5>{props.text}</h5>
      </Button>
    );
  } else {
    return (
      <Button
        style={{ marginTop: 30, marginBottom: 10 }}
        color="secondary"
        variant="contained"
        onClick={props.onClick}
        style={{ height: 50, width: 300 }}
        disabled
      >
        <h5>{props.text}</h5>
      </Button>
    );
  }
}
