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
import {
  faRunning,
  faChartArea,
  faInfo,
  faShoppingCart,
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
          >
            <FontAwesomeIcon
              icon={faChartArea}
              style={{ height: 50, width: 30, marginRight: 20 }}
            />
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        {["Exercises"].map((text, index) => (
          <ListItem
            onClick={() => {
              if (text === "Exercises") {
                props.setStep(4);
              }
            }}
            button
            key={text}
          >
            <FontAwesomeIcon
              icon={faRunning}
              style={{ height: 50, width: 30, marginRight: 20 }}
            />
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        {["Info"].map((text, index) => (
          <ListItem
            onClick={() => {
              if (text === "Info") {
                props.setStep(5);
              }
            }}
            button
            key={text}
          >
            <FontAwesomeIcon
              icon={faInfo}
              style={{ height: 50, width: 30, marginRight: 20 }}
            />
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        {["Products"].map((text, index) => (
          <ListItem
            onClick={() => {
              if (text === "Products") {
                props.setStep(6);
              }
            }}
            button
            key={text}
          >
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ height: 50, width: 30, marginRight: 20 }}
            />
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider component="li" />
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
          >
            <FontAwesomeIcon
              icon={faSignOutAlt}
              style={{ height: 50, width: 30, marginRight: 20 }}
            />
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            variant="contained"
            color={props.color}
            style={{ height: 50, width: 300 }}
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
