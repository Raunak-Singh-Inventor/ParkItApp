import "bootstrap/dist/css/bootstrap.min.css";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import "./App.css";

import logo from "../src/images/Logo.jpg";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import AWS from "aws-sdk";
import { useEffect } from "react";
import { getMessages } from "./graphql/queries";

function App() {
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-west-2:us-west-2_3HXIrQxxg",
  });

  var s3 = new AWS.S3(); // we can now create our service object
  console.log(s3);

  useEffect(async () => {
    const customListMessages = /* GraphQL */ `
      query MyQuery {
        listMessages(limit: 1) {
          items {
            device_data {
              accelOne
              gsr
              accelZero
              accelTwo
              messageTime
              mic
            }
          }
        }
      }
    `;
    const messages = await API.graphql(graphqlOperation(customListMessages));
    console.log(messages);
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
          <h1 style={{ color: "white", padding: 20 }}>Device ID: 12345</h1>
        </div>
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
