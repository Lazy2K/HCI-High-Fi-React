import "./App.css";
import React from "react";
import { useState, useEffect, useContext, createContext } from "react";

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

// High-res
import background from "./assets/hd/highres-1.png";

function App() {
  const setUserFunction = (user) => {
    setUser(user);
    console.log(user);
  };

  let [user, setUser] = useState({ largeFont: false });

  const setRenderScreenFunction = (screen) => {
    setRenderScreen(screen);
  };

  let [renderScreen, setRenderScreen] = useState(
    <HomeScreen onSetRenderScreen={setRenderScreenFunction} />
  );

  return (
    <div className="App">
      <div className="screenContainer">
        <div className="pageContainer">{renderScreen}</div>
        {/* Homerow could be condensed into it's own component */}
        <div className="homerowContainer">
          <img
            src={birdIcon}
            alt=""
            className="homerowIcon"
            onClick={() =>
              setRenderScreen(
                <HomeScreen onSetRenderScreen={setRenderScreenFunction} />
              )
            }
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
            onClick={() =>
              setRenderScreen(
                <AccountScreen
                  onSetRenderScreen={setRenderScreenFunction}
                  user={{ user, setUserFunction }}
                />
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
