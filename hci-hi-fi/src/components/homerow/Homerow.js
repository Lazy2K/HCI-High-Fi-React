export default function Homerow(props) {
  return (
    <div className="homerowContainer" style={styles.homerowContainer}>
      <ul>
        <li>Hello</li>
        <li>There</li>
      </ul>
    </div>
  );
}

const styles = {
  homerowContainer: {
    width: "100vw",
    height: "auto",
    backgroundColor: "#ffffff",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
};
