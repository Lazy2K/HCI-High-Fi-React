import leftIcon from "./../../assets/icons/LeftArrow.png";

export default function BackButton(props) {
  return (
    <button className="BackButton" style={styles.backButton}>
      <img src={leftIcon} alt="Go Back" style={styles.backIcon} />
    </button>
  );
}

const styles = {
  backButton: {
    borderRadius: "50%",
    width: "3rem",
    height: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "0px",
    backgroundColor: "#ffffff",
  },
  backIcon: {
    width: "70%",
  },
};
