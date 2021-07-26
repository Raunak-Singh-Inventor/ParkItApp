import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import logo from '../src/images/Logo.jpg';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md">
          <img style={{height:100,width:100}} src={logo} alt={logo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
