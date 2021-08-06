import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { API, graphqlOperation } from "aws-amplify";
import "./App.css";

import logo from "../src/images/Logo.jpg";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import AWS from "aws-sdk";

function App() {
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-west-2:us-west-2_3HXIrQxxg",
  });

  const [measurements, setMeasurements] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const customListMessages = /* GraphQL */ `
        query MyQuery {
          listMessages {
            nextToken
            items {
              device_data {
                clientID
                measurementType
                measurementValue
              }
            }
          }
        }
      `;
      const messages = [];
      const response = await API.graphql(graphqlOperation(customListMessages));
      if (measurements.length !== response.data.listMessages.items.length) {
        for (let i = 0; i < response.data.listMessages.items.length; i++) {
          messages.push(response.data.listMessages.items[i].device_data);
          setMeasurements(messages);
        }
      }
    }
    fetchData();
  }, [measurements]);

  console.log(measurements);

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
          {measurements.length !== 0 ? (
            <h1 style={{ color: "white", padding: 20 }}>
              Device ID: {measurements[0].clientID}
            </h1>
          ) : (
            <h1 style={{ color: "white", padding: 20 }}>Device ID: NA</h1>
          )}
        </div>
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
