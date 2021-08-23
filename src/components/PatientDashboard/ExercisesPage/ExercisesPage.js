import React, { useState, useEffect } from "react";
import { Card } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

import SwipeableTemporaryDrawer from "../SwipeableTemporaryDrawer";
import Header from "../../Header";

export default function ExercisesPage(props) {
  const [cardWidth, setCardWidth] = useState(520);
  const [cardHeight, setcardHeight] = useState(308);

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
      setCardWidth(350);
      setcardHeight(308);
    } else if (isTabletOrMobile === true && isPortrait === false) {
    } else {
    }
  });

  return (
    <>
      <div style={{ backgroundColor: "#ebd8ed", height: 1020, height: 1020 }}>
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
            <h2>Which exercise would you like to do?</h2>
          </div>
        </div>
        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <Card
              style={{
                width: cardWidth,
                height: cardHeight,
              }}
            >
              <iframe
                style={{ marginLeft: 4, padding: 10 }}
                width={String(cardWidth - 8)}
                height={String(cardHeight - 8)}
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
                width: cardWidth,
                height: cardHeight,
              }}
            >
              <iframe
                style={{ marginLeft: 4, padding: 10 }}
                width={String(cardWidth - 8)}
                height={String(cardHeight - 8)}
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
                width: cardWidth,
                height: cardHeight
              }}
            >
              <iframe
                style={{ marginLeft: 4, padding: 10 }}
                width={String(cardWidth - 8)}
                height={String(cardHeight - 8)}
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
                width: cardWidth,
                height: cardHeight,
              }}
            >
              <iframe
                style={{ marginLeft: 4, padding: 10 }}
                width={String(cardWidth - 8)}
                height={String(cardHeight - 8)}
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
                width: cardWidth,
                height: cardHeight,
              }}
            >
              <iframe
                style={{ marginLeft: 4, padding: 10 }}
                width={String(cardWidth - 8)}
                height={String(cardHeight - 8)}
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
                width: cardWidth,
                height: cardHeight,
              }}
            >
              <iframe
                style={{ marginLeft: 4, padding: 10 }}
                width={String(cardWidth - 8)}
                height={String(cardHeight - 8)}
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
                width: cardWidth,
                height: cardHeight,
              }}
            >
              <iframe
                style={{ marginLeft: 4, padding: 10 }}
                width={String(cardWidth - 8)}
                height={String(cardHeight - 8)}
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
                width: cardWidth,
                height: cardHeight,
              }}
            >
              <iframe
                style={{ marginLeft: 4, padding: 10 }}
                width={String(cardWidth - 8)}
                height={String(cardHeight - 8)}
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
                width: cardWidth,
                height: cardHeight,
              }}
            >
              <iframe
                style={{ marginLeft: 4, padding: 10 }}
                width={String(cardWidth - 8)}
                height={String(cardHeight - 8)}
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
