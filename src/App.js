import "bootstrap/dist/css/bootstrap.min.css";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import "./App.css";

import logo from "../src/images/Logo.jpg";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import AWS from "aws-sdk";
import { useEffect } from "react";
import { getMessages } from "./graphql/queries";
import { useState } from "react";

function App() {
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-west-2:us-west-2_3HXIrQxxg",
  });

  var s3 = new AWS.S3(); // we can now create our service object
  console.log(s3);

  const [Messages, setMessages] = useState({});
  const [messageTime, setMessageTime] = useState();

  useEffect(async () => {
    const customListMessages = /* GraphQL */ `
      query MyQuery {
        listMessageTables(limit: 1) {
          items {
            insertMessageTime
            device_data {
              accelOne
              gsr
              accelZero
              accelTwo
              messageTime
              mic
              client_id
            }
          }
          nextToken
        }
      }
    `;
    const response = await API.graphql(graphqlOperation(customListMessages));
    var m = response.data;
    setMessageTime(
      new Date(parseInt(m.listMessageTables.items[0].insertMessageTime))
    );
    console.log("insertTime: " + messageTime);
    // console.log(
    //   "Device ID: " +
    //     m.listMessageTables.items[0].device_data.client_id
    // );
    // console.log(messages.data.listMessages.items[0].device_data.client_id);
  }, []);

  return (
    <div className="App">
      <div className="row">
        <div className="col-md-4">
          <h1 style={{ color: "white", padding: 20 }}>Park It!</h1>
        </div>
        <div className="col-md-4">
          <img style={{ height: 100, width: 100 }} src={logo} alt={logo} />
        </div>
        <div className="col-md-4">
          <h1 style={{ color: "white", padding: 20 }}> Device ID: {} </h1>
        </div>
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
