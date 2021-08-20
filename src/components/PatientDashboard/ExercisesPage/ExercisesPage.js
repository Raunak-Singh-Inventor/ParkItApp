import React from "react";
import { Card } from "@material-ui/core";

import SwipeableTemporaryDrawer from "../SwipeableTemporaryDrawer";

import background from "../../../images/excersizebg.jpg";

export default function ExercisesPage(props) {
  return (
    <>
      <div style={{ backgroundImage: `url(${background})`, height: 1020 }}>
        <div className="row">
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <SwipeableTemporaryDrawer
              setStep={props.setStep}
              signOut={props.signOut}
              color={"primary"}
            />
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <h4>Which exercise would you like to do?</h4>
          </div>
        </div>
        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <Card
              style={{
                width: 520,
                height: 308,
              }}
            >
              <iframe
                style={{ marginLeft: 4, padding: 10 }}
                width="512"
                height="300"
                src="https://www.youtube.com/embed/EqHcDCYRdZU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Card>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <Card
              style={{
                width: 520,
                height: 308,
              }}
            >
              <iframe
                style={{ marginLeft: 4, padding: 10 }}
                width="512"
                height="300"
                src="https://www.youtube.com/embed/FrBLDWGz58w"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Card>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <Card
              style={{
                width: 520,
                height: 308,
              }}
            >
              <iframe
                style={{ marginLeft: 4, padding: 10 }}
                width="512"
                height="300"
                src="https://www.youtube.com/embed/Ez2GeaMa4c8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Card>
          </div>
        </div>
        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <Card
              style={{
                width: 520,
                height: 308,
              }}
            >
              <iframe
                style={{ marginLeft: 4, padding: 10 }}
                width="512"
                height="300"
                src="https://www.youtube.com/embed/aCzGf8Fxd64"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Card>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <Card
              style={{
                width: 520,
                height: 308,
              }}
            >
              <iframe
                style={{ marginLeft: 4, padding: 10 }}
                width="512"
                height="300"
                src="https://www.youtube.com/embed/gLSaK75fhG4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Card>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <Card
              style={{
                width: 520,
                height: 308,
              }}
            >
              <iframe
                style={{ marginLeft: 4, padding: 10 }}
                width="512"
                height="300"
                src="https://www.youtube.com/embed/Gh8cZ_W2vR4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Card>
          </div>
        </div>
        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <Card
              style={{
                width: 520,
                height: 308,
              }}
            >
              <iframe
                style={{ marginLeft: 4, padding: 10 }}
                width="512"
                height="300"
                src="https://www.youtube.com/embed/BCEJW_1pibU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Card>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <Card
              style={{
                width: 520,
                height: 308,
              }}
            >
              <iframe
                style={{ marginLeft: 4, padding: 10 }}
                width="512"
                height="300"
                src="https://www.youtube.com/embed/yod4OmEmIPk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Card>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <Card
              style={{
                width: 520,
                height: 308,
              }}
            >
              <iframe
                style={{ marginLeft: 4, padding: 10 }}
                width="512"
                height="300"
                src="https://www.youtube.com/embed/7SgyhH86U_Y"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}