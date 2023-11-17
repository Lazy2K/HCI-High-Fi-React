export default function BirdScreen(props) {
  return <div style={styles.chip}>{props.attribute}</div>;
}

const styles = {
  chip: {
    padding: "0.2rem 1rem 0.2rem 1rem",
    margin: "0rem 0.3rem 0rem 0.3rem",
    backgroundColor: "white",
    borderRadius: "10px",
    border: "0px",
    fontWeight: "500",
  },
};
