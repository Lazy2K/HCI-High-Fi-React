import Chip from "./../common/Chip";
import Card from "./../common/Card";

export default function HomeScreen(props) {
  return (
    <div className="HomeScreen" style={styles.homeScreen}>
      <div className="ChipContainer" style={styles.chipContainer}>
        <Chip attribute={"Owls"} />
        <Chip attribute={"Parrots"} />
        <Chip attribute={"Hummingbirds"} />
        <Chip attribute={"Woodpeckers"} />
        <Chip attribute={"Shorebirds"} />
        <Chip attribute={"Flacons"} />
        <Chip attribute={"Pelicans"} />
        <Chip attribute={"Thrushes"} />
        <Chip attribute={"Wrens"} />
      </div>
      <div className="HomeScreenContainer" style={styles.homeContainer}>
        <div className="CardContainer"></div>
      </div>
    </div>
  );
}

const styles = {
  homeScreen: {
    width: "100%",
    height: "100%",
  },
  homeContainer: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
  },
  chipContainer: {
    display: "flex",
    flexDirection: "row",
    overflowX: "auto",
    position: "absoulte",
    scrollbarWidth: "none",
    marginTop: "2rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
};
