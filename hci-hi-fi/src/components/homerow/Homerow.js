// Icons
import birdIcon from "./../../assets/icons/Bird.png";
import submitIcon from "./../../assets/icons/Submit.png";
import usersIcon from "./../../assets/icons/Users.png";
import accountIcon from "./../../assets/icons/Account.png";

export default function Homerow(props) {
  return (
    <div className="homerowContainer" style={styles.homerowContainer}>
      <img src={birdIcon} style={styles.homerowIcon} alt="" />
      <img src={submitIcon} style={styles.homerowIcon} alt="" />
      <img src={usersIcon} style={styles.homerowIcon} alt="" />
      <img src={accountIcon} style={styles.homerowIcon} alt="" />
    </div>
  );
}

const styles = {
  homerowContainer: {
    width: "100%",
    height: "auto",
    backgroundColor: "#afafaf",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: "2rem",
    paddingTop: "2rem",
  },
  homerowIcon: {
    width: "2rem",
    height: "2rem",
  },
};
