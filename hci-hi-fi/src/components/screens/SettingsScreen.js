import BackButton from "../common/BackButton";

export default function SettingsScreen(props) {
  return (
    <div className="SettingsScreen" style={styles.settingsScreen}>
      <div className="HeaderContainer" style={styles.headerContainer}>
        <BackButton />
      </div>
      <div className="PageContainer"></div>
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
