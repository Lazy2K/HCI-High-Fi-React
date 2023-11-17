export default function BirdScreen(props) {
  return <div style={styles.chip}>{props.attribute}</div>;
}

const styles = {
  chip: {
    padding: "0.4rem 1.2rem 0.4rem 1.2rem",
    margin: "0rem 0.3rem 0rem 0.3rem",
    backgroundColor: "#00000060",
    borderRadius: "10px",
    border: "1px",
    borderStyle: "solid",
    borderColor: "#60606060",
    fontWeight: "500",
    color: "white",
    backdropFilter: "blur(5px)",
  },
};
