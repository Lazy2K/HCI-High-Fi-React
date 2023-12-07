import BackButton from "../common/BackButton";
import AccountScreen from "./AccountScreen";

import "./css/settingsScreen.css";

export default function SettingsScreen(props) {
  return (
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
            <div>Username: Nick</div>
            <div>Edit</div>
          </div>
          <div className="settingsInfoRow">
            <div>Email: nick@gmail.com</div>
            <div>Edit</div>
          </div>
          <div className="settingsInfoRow">
            <div className="acountInfoData">Password</div>
            <div className="accountInfoEdit">Change Password</div>
          </div>
        </div>
      </div>
    </div>
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
