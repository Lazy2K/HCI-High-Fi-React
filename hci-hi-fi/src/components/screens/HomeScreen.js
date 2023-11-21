// Components
import Chip from "./../common/Chip";
import Card from "./../common/Card";

// Images
import image01 from "./../../assets/md/midres-1.jpg";
import image02 from "./../../assets/md/midres-2.jpg";
import image03 from "./../../assets/md/midres-3.jpg";
import image04 from "./../../assets/md/midres-4.jpg";
import image05 from "./../../assets/md/midres-5.jpg";
import image06 from "./../../assets/md/midres-6.jpg";
import BirdScreen from "./BirdScreen";

export default function HomeScreen({ onSetRenderScreen }) {
  return (
    <div className="HomeScreen" style={styles.homeScreen}>
      <div className="HomeScreenContainer" style={styles.homeContainer}>
        <div className="Header"></div>
        <div className="Title" style={styles.title}>
          Welcome Nick, what birds can you see?
        </div>
      </div>
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
        <div className="cardContainer" style={styles.cardContainer}>
          <Card
            image={image01}
            name="Falcon"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
          />
          <Card
            image={image02}
            name="Robbin"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
          />
          <Card
            image={image03}
            name="Blue Jay"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
          />
          <Card
            image={image04}
            name="Orange"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
          />
          <Card
            image={image05}
            name="Pecker"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
          />
          <Card
            image={image06}
            name="Gery Bird"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
          />
          <Card
            image={image01}
            name="Falcon"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
          />
          <Card
            image={image02}
            name="Robbin"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
          />
          <Card
            image={image03}
            name="Blue Jay"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
          />
          <Card
            image={image04}
            name="Orange"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
          />
          <Card
            image={image05}
            name="Pecker"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
          />
          <Card
            image={image06}
            name="Gery Bird"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
          />
        </div>
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
    padding: "1.3rem",
    display: "flex",
    flexDirection: "column",
    marginBottom: "8rem",
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
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "0.7rem",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "600",
    color: "white",
    lineHeight: "0.9",
  },
};
