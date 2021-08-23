import React, { useEffect } from "react";
import { Card } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

import rLegMassager from "../../../images/rLegMassager.png";
import aef from "../../../images/aef.png";
import hrb from "../../../images/hrb.png";
import bigPen from "../../../images/bigPen.png";

import SwipeableTemporaryDrawer from "../SwipeableTemporaryDrawer";
import Header from "../../Header";

export default function ProductsPage(props) {
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
    } else if (isTabletOrMobile === true && isPortrait === false) {
    } else {
    }
  });

  return (
    <div style={{ backgroundColor: "#ebd8ed", height: 1020 }}>
      {props.isPortrait === false && (
        <Header text1={"Welcome " + props.username} isPatient={true} />
      )}
      <div className="row">
        <div className="col-md-4">
          <SwipeableTemporaryDrawer
            setStep={props.setStep}
            signOut={props.signOut}
            color={"secondary"}
          />
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <h1>What would you like to buy?</h1>
        </div>
      </div>
      <div className="row" style={{ marginTop: 100 }}>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <Card
            style={{
              textAlign: "center",
              padding: 15,
              width: 600,
              height: 300,
            }}
          >
            <div>
              <img alt={""} style={{ height: 200 }} src={rLegMassager} />
            </div>
            <div>
              <a
                style={{ fontSize: 40 }}
                href={
                  "https://www.amazon.com/Reathlete-Compression-Circulation-Sequential-Controller/dp/B07Y1T3LJC/ref=sr_1_1_sspa?dchild=1&keywords=Parkinson&qid=1629678611&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzODk5OEUzNk1KQzM2JmVuY3J5cHRlZElkPUEwNTIzMzM3M1VKQVk2RVZFQUNINCZlbmNyeXB0ZWRBZElkPUEwMTUyNzQ5VVdLMElGSE1QNk1PJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
                }
              >
                Leg Massager
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
              height: 300,
            }}
          >
            <div>
              <img alt={""} src={aef} style={{ height: 200 }} />
            </div>
            <div>
              <a
                style={{ fontSize: 40 }}
                href={
                  "https://www.amazon.com/Weighted-Utensils-Tremors-Parkinsons-Patients/dp/B07KRRDH77/ref=sr_1_2?dchild=1&keywords=Parkinson&qid=1629679088&sr=8-2"
                }
              >
                Eating Flatware
              </a>
            </div>
          </Card>
        </div>
      </div>
      <div className="row" style={{ marginTop: 150 }}>
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
              <img alt={""} style={{ height: 150 }} src={hrb} />
            </div>
            <div>
              <a
                style={{ fontSize: 40 }}
                href={
                  "https://www.amazon.com/SENTEQ-Hand-Rehabilitation-Ball/dp/B089LNXG33/ref=sr_1_49?dchild=1&keywords=Parkinson%27s+product&qid=1629679407&sr=8-49"
                }
              >
                Hand Rehalibitation Ball
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
              <img alt={""} style={{ height: 150 }} src={bigPen} />
            </div>
            <div>
              <a
                style={{ fontSize: 40 }}
                href={
                  "https://www.amazon.com/Weighted-Tremors-Parkinsons-Strength-Arthritis/dp/B082DS5GW9/ref=sr_1_5?dchild=1&keywords=pen+for+parkinson%27s&qid=1629730685&sr=8-5"
                }
              >
                Big Pen
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
