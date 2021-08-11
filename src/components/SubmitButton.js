import React from "react";
import { Button } from "@material-ui/core";

export default function SubmitButton(props) {
  if (
    props.username &&
    props.password &&
    props.email &&
    props.phoneNumber &&
    props.role
  ) {
    return (
      <Button
        style={{ marginTop: 30, marginBottom: 10 }}
        color="secondary"
        variant="contained"
        onClick={props.onClick}
      >
        {props.text}
      </Button>
    );
  } else {
    return (
      <Button
        style={{ marginTop: 30, marginBottom: 10 }}
        color="secondary"
        variant="contained"
        onClick={props.onClick}
        disabled
      >
        {props.text}
      </Button>
    );
  }
}