import SettingsScreen from "./SettingsScreen";

import "./css/accountScreen.css";

import profilePicture from "./../../assets/md/Man.jpg";
import settingsIcon from "./../../assets/icons/Settings.png";

export default function AccountScreen(props) {
  console.log(props);

  return (
    <div className="accountScreen">
      <div className="accountScreenContainer">
        <div className="screenHeader">
          <img className="profilePicture" src={profilePicture} />
          <button
            className="settingsButton"
            onClick={() =>
              props.onSetRenderScreen(
                <SettingsScreen
                  clicky={props.onSetRenderScreen}
                  user={props.user}
                />
              )
            }
          >
            <img className="settingsIcon" src={settingsIcon} />
          </button>
        </div>
        <div className="accountTitle">Nick! Welcome to your account.</div>
        <div className="accountInfoContainer">
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
  );
}
