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
            <div>Font Size</div>
            <div>Edit</div>
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
