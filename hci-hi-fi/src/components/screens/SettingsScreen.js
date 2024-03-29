import BackButton from "../common/BackButton";
import AccountScreen from "./AccountScreen";

import React from "react";

import Switch from "@mui/material/Switch";

import { UserContextProvider, UserContext } from "./../function/userContext";

import "./css/settingsScreen.css";
import { useState, createContext } from "react";
import { useContext } from "react";

export default function SettingsScreen(props) {
  const [internalUser, setInternalUser] = useContext(UserContext);

  return (
    <UserContextProvider>
      <div className="SettingsScreen" style={styles.settingsScreen}>
        <div className="HeaderContainer" style={styles.headerContainer}>
          <BackButton
            clickFunction={() =>
              props.clicky(<AccountScreen onSetRenderScreen={props.clicky} />)
            }
          />
        </div>
        <div className="settingsPageContainer">
          <div className="accountTitle">Settings.</div>
          <div className="settingsInfoContainer">
            <div className="settingsInfoRow">
              <div>Large Font</div>
              <Switch
                checked={internalUser.largeFont}
                onChange={() =>
                  setInternalUser({
                    ...internalUser,
                    largeFont: internalUser.largeFont ? false : true,
                  })
                }
              ></Switch>
            </div>
            <div className="settingsInfoRow">
              <div>High Contrast</div>
              <Switch
                checked={internalUser.highContrast}
                onChange={() =>
                  setInternalUser({
                    ...internalUser,
                    highContrast: internalUser.highContrast ? false : true,
                  })
                }
              ></Switch>
            </div>
            <div className="settingsInfoRow">
              <div>Text to Speech</div>
              <Switch
                checked={internalUser.textToSpeach}
                onChange={() =>
                  setInternalUser({
                    ...internalUser,
                    textToSpeach: internalUser.textToSpeach ? false : true,
                  })
                }
              ></Switch>
            </div>
          </div>
        </div>
      </div>
    </UserContextProvider>
  );
}

const styles = {
  settingsScreen: {
    width: "100%",
    height: "100%",
    backdropFilter: "blur(5px)",
    display: "flex",
    flexDirection: "column",
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: "1.3rem",
  },
};
