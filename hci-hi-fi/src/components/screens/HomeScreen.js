import Chip from "./../common/Chip";
import Card from "./../common/Card";

export default function HomeScreen(props) {
  return (
    <div className="HomeScreen" style={styles.homeScreen}>
      <div className="HomeScreenContainer" style={styles.homeContainer}>
        <div className="ChipContainer" style={styles.chipContainer}>
          <Chip />
          <Chip />
          <Chip />
          <Chip />
          <Chip />
          <Chip />
          <Chip />
          <Chip />
          <Chip />
          <Chip />
          <Chip />
          <Chip />
          <Chip />
          <Chip />
        </div>
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
  },
};
