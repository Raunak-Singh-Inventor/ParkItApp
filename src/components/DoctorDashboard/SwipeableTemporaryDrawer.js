import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Divider } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo158x160 from "../../images/Logo158x160.png";
import {
  faChartArea,
  faSignOutAlt,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Dashboard"].map((text, index) => (
          <ListItem
            onClick={() => {
              if (text === "Dashboard") {
                props.setStep(1);
              }
            }}
            button
            key={text}
            style={{ backgroundColor: "#424242", color: "white" }}
          >
            <FontAwesomeIcon
              icon={faChartArea}
              style={{ height: 50, width: 30, marginRight: 20 }}
            />
            <ListItemText primary={<h3>{text}</h3>} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Sign Out"].map((text, index) => (
          <ListItem
            onClick={() => {
              if (text === "Sign Out") {
                props.signOut();
              }
            }}
            button
            key={text}
            style={{ backgroundColor: "#424242", color: "white" }}
          >
            <FontAwesomeIcon
              icon={faSignOutAlt}
              style={{ height: 50, width: 30, marginRight: 20 }}
            />
            <ListItemText primary={<h3>{text}</h3>} />
          </ListItem>
        ))}
      </List>
      <img src={Logo158x160} style={{ marginLeft: 30, marginTop: 400 }} />
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            variant="contained"
            color="secondary"
          >
            <FontAwesomeIcon
              icon={faBars}
              style={{ height: 50, width: 30, marginRight: 20 }}
            />
            <h5>Open Menu</h5>
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
