import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Avatar } from "react-rainbow-components";

import logo from "../src/images/Logo.jpg";

function App() {
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
    </div>
  );
}

export default App;
