import SettingsScreen from "./SettingsScreen";

import "./css/accountScreen.css";

import { useContext } from "react";

import profilePicture from "./../../assets/md/Man.jpg";
import settingsIcon from "./../../assets/icons/Settings.png";

import { UserContextProvider, UserContext } from "../function/userContext";

export default function AccountScreen(props) {
  const [internalUser, setInternalUser] = useContext(UserContext);

  return (
    <UserContextProvider>
      <div className="accountScreen">
        <div className="accountScreenContainer">
          <div className="screenHeader">
            <img className="profilePicture" src={profilePicture} />
            <button
              className="settingsButton"
              onClick={() =>
                props.onSetRenderScreen(
                  <SettingsScreen clicky={props.onSetRenderScreen} />
                )
              }
            >
              <img className="settingsIcon" src={settingsIcon} />
            </button>
          </div>
          <div
            className="accountTitle"
            style={{ fontSize: internalUser.largeFont ? "4rem" : "3rem" }}
          >
            Nick! Welcome to your account.
          </div>
          <div
            className="accountInfoContainer"
            style={{ fontSize: internalUser.largeFont ? "2rem" : "1rem" }}
          >
            <div className="accountInfoRow">
              <div>Username: Nick</div>
              <div>Edit</div>
            </div>
            <div className="accountInfoRow">
              <div>Email: nick@gmail.com</div>
              <div>Edit</div>
            </div>
            <div className="accountInfoRow">
              <div className="acountInfoData">Password</div>
              <div className="accountInfoEdit">Change Password</div>
            </div>
          </div>
        </div>
      </div>
    </UserContextProvider>
  );
}
