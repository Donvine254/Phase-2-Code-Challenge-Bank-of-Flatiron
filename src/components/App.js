import React from "react";
import AccountContainer from "./AccountContainer";
import Greeting from "./Greetings";


function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment teal inverted">
        <h2>The Royal <i className="building icon white"></i> Bank of Flatiron</h2>
        <hr/>
        <div className="ui segment blue inverted">
        <Greeting/>
          </div>
      </div>
      <AccountContainer />
      <div className="ui segment teal inverted">
        <p className="ui header"><i className="ui copyright icon"></i>2023, All rights reserved.</p>
          </div>
    </div>
  );
}

export default App;
