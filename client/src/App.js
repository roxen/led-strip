import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import StripContext from "./shared/StripContext";

import LedStrip from "./client/LedStrip";
import Runner from "./client/Runner";
import Stage from "./shared/Stage";

class App extends Component {

  componentDidMount() {
    let stripContext = new StripContext(this._strip);
    let runner = new Runner(stripContext, new Stage());
    runner.start();
  }

  render() {
    return (
      <div className="app">
        <div id="display">
          <LedStrip ref={(c) => this._strip = c}/>
        </div>
        <div id="controls">
          <div>
            <button type="button" id="toggle-wave" className="btn btn-default">Toggle wave</button>
            <button type="button" id="pause" className="btn btn-default">Pause</button>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
