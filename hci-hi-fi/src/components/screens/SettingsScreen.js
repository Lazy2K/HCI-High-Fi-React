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

  console.log(internalUser);

  return (
    <UserContextProvider>
      <div className="SettingsScreen" style={styles.settingsScreen}>
        <div className="HeaderContainer" style={styles.headerContainer}>
          <BackButton
            clickFunction={() =>
              props.clicky(
                <AccountScreen
                  onSetRenderScreen={props.clicky}
                  user={props.user}
                />
              )
            }
          />
        </div>
        <div className="settingsPageContainer">
          <div className="accountTitle">Settings.</div>
          <div className="settingsInfoContainer">
            <div className="settingsInfoRow">
              <div>Font Size</div>
              <Switch
                checked={internalUser.largeFont}
                onChange={() => setInternalUser({ testing: "432" })}
              ></Switch>
            </div>
            <div className="settingsInfoRow">
              <div>High Contrast</div>
              <div>Edit</div>
            </div>
            <div className="settingsInfoRow">
              <div>Text to Speech</div>
              <div>Edit</div>
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
