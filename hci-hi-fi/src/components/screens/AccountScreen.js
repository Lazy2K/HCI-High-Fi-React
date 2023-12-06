import SettingsScreen from "./SettingsScreen";

import "./css/accountScreen.css";

import profilePicture from "./../../assets/md/woman.jpg";
import settingsIcon from "./../../assets/icons/Settings.png";

export default function AccountScreen({ onSetRenderScreen }) {
  return (
    <div className="accountScreen">
      <div className="accountScreenContainer">
        <div className="screenHeader">
          <img className="profilePicture" src={profilePicture} />
          <button
            className="settingsButton"
            onClick={() =>
              onSetRenderScreen(<SettingsScreen clicky={onSetRenderScreen} />)
            }
          >
            <img class="settingsIcon" src={settingsIcon} />
          </button>
        </div>
        <div className="accountTitle">Nick! Welcome to your account.</div>
      </div>
    </div>
  );
}
