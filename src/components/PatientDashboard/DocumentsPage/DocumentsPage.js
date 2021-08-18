import React from "react";
import { Card } from "@material-ui/core";

import SwipeableTemporaryDrawer from "../SwipeableTemporaryDrawer";

import parkinsonfoundnationlogo from "../../../images/parkinsonfoundnationlogo.png";
import apdalogo from "../../../images/apdalogo.png";
import jumblecrossword from "../../../images/jumblecrossword.png";
import usatodaypuzzles from "../../../images/usatodaypuzzles.png";

export default function DocumentsPage(props) {
  return (
    <>
      <div className="row">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <SwipeableTemporaryDrawer
            setStep={props.setStep}
            signOut={props.signOut}
            color={"secondary"}
          />
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <h4>What would you like to view?</h4>
        </div>
      </div>
      <div className="row" style={{ marginTop: 20 }}>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <Card
            style={{
              textAlign: "center",
              padding: 15,
              width: 600,
              height: 250,
            }}
          >
            <div>
              <img
                alt={""}
                style={{ height: 150 }}
                src={parkinsonfoundnationlogo}
              />
            </div>
            <div>
              <a style={{ fontSize: 40 }} href={"https://www.parkinson.org/"}>
                https://www.parkinson.org/
              </a>
            </div>
          </Card>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <Card
            style={{
              textAlign: "center",
              padding: 15,
              width: 600,
              height: 270,
            }}
          >
            <div>
              <img alt={""} src={apdalogo} />
            </div>
            <div>
              <a
                style={{ fontSize: 30 }}
                href={"https://www.apdaparkinson.org/community/new-jersey/"}
              >
                https://www.apdaparkinson.org/community/new-jersey/
              </a>
            </div>
          </Card>
        </div>
      </div>
      <div className="row" style={{ marginTop: 20 }}>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          {" "}
          <Card
            style={{
              textAlign: "center",
              padding: 15,
              width: 600,
              height: 270,
            }}
          >
            <div>
              <img
                alt={""}
                style={{ height: 150, width: 150 }}
                src={jumblecrossword}
              />
            </div>
            <div>
              <a
                style={{ fontSize: 30 }}
                href={
                  "https://fun.chicagotribune.com/game/tca-jumble-crossword-sunday?external=true"
                }
              >
                https://fun.chicagotribune.com/game/tca-jumble-crossword-sunday?external=true
              </a>
            </div>
          </Card>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          {" "}
          <Card
            style={{
              textAlign: "center",
              padding: 15,
              width: 600,
              height: 270,
            }}
          >
            <div>
              <img
                alt={""}
                style={{ height: 150, width: 350 }}
                src={usatodaypuzzles}
              />
            </div>
            <div>
              <a
                style={{ fontSize: 40 }}
                href={
                  "https://puzzles.usatoday.com/"
                }
              >
                https://puzzles.usatoday.com/
              </a>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
