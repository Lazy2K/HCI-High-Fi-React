import leftIcon from "./../../assets/icons/Left.png";

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
    width: "2.5rem",
    height: "2.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "0px",
  },
  backIcon: {
    width: "70%",
  },
};
