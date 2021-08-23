import React from "react";
import Logo158x160 from "../images/Logo158x160.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserMd } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  return (
    <div style={{ height: 80, backgroundColor: "#424242" }}>
      <div className="row">
        <div className="col-md-3 align-items-center justify-content-center">
          <img src={Logo158x160} style={{ width: 80 }} />
        </div>
        <h2
          className="col-md-6 align-items-center justify-content-center"
          style={{ color: "white", marginTop: 10 }}
        >
          Park It! Parkinson Doctor & Patient Portal
        </h2>
        {props.text1 !== "" && (
          <h2
            className="col-md-3 align-items-center justify-content-center"
            style={{ color: "white", marginTop: 10 }}
          >
            {props.isPatient ? (
              <FontAwesomeIcon
                icon={faUser}
                style={{ height: 50, width: 30, marginRight: 20 }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faUserMd}
                style={{ height: 50, width: 30, marginRight: 20 }}
              />
            )}
            {props.text1}
          </h2>
        )}
      </div>
    </div>
  );
}
