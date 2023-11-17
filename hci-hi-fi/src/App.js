import "./App.css";
import { useState, useEffect } from "react";

// Screens
import HomeScreen from "./components/screens/HomeScreen";
import BirdScreen from "./components/screens/BirdScreen";
import AccountScreen from "./components/screens/AccountScreen";
import CommunityScreen from "./components/screens/CommunityScreen";
import SubmissionScreen from "./components/screens/SubmissionScreen";

// Icons
import birdIcon from "./assets/icons/Bird.png";
import submitIcon from "./assets/icons/Submit.png";
import usersIcon from "./assets/icons/Users.png";
import accountIcon from "./assets/icons/Account.png";

function App() {
  let [renderScreen, setRenderScreen] = useState(<HomeScreen />);

  return (
    <div className="App">
      <div className="screenContainer">
        <div className="pageContainer">{renderScreen}</div>
        <div className="homerowContainer">
          <img
            src={birdIcon}
            alt=""
            className="homerowIcon"
            onClick={() => setRenderScreen(<HomeScreen />)}
          />
          <img
            src={submitIcon}
            alt=""
            className="homerowIcon"
            onClick={() => setRenderScreen(<SubmissionScreen />)}
          />
          <img
            src={usersIcon}
            alt=""
            className="homerowIcon"
            onClick={() => setRenderScreen(<CommunityScreen />)}
          />
          <img
            src={accountIcon}
            alt=""
            className="homerowIcon"
            onClick={() => setRenderScreen(<AccountScreen />)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
