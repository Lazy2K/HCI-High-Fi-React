export default function Homerow(props) {
  return (
    <div className="homerowContainer" style={styles.homerowContainer}>
      <div>Icon1</div>
      <div>Icon2</div>
      <div>Icon3</div>
      <div>Icon4</div>
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
};
