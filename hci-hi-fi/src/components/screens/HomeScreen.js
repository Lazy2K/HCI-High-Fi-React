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

import logo from "./../../assets/logos/logo-1.png";

import BirdScreen from "./BirdScreen";

export default function HomeScreen({ onSetRenderScreen }) {
  return (
    <div className="HomeScreen" style={styles.homeScreen}>
      <div className="HomeScreenContainer" style={styles.homeContainer}>
        <div className="Header"></div>
        <img src={logo} style={styles.logo} />
        <div className="Title" style={styles.title}>
          Welcome Nick, what birds can you see?
        </div>
      </div>
      <div className="ChipContainer" style={styles.chipContainer}>
        <Chip attribute={"Owls"} color={"#ffebc8"} />
        <Chip attribute={"Parrots"} color={"#ffebc8"} />
        <Chip attribute={"Hummingbirds"} color={"#ffebc8"} />
        <Chip attribute={"Woodpeckers"} color={"#ffebc8"} />
        <Chip attribute={"Shorebirds"} color={"#ffebc8"} />
        <Chip attribute={"Flacons"} color={"#ffebc8"} />
        <Chip attribute={"Pelicans"} color={"#ffebc8"} />
        <Chip attribute={"Thrushes"} color={"#ffebc8"} />
        <Chip attribute={"Wrens"} color={"#ffebc8"} />
      </div>
      <div className="HomeScreenContainer" style={styles.homeContainer}>
        <div className="cardContainer" style={styles.cardContainer}>
          <Card
            image={image01}
            name="Falcon"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#f9d58c"}
          />
          <Card
            image={image02}
            name="Robbin"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#ecb88f"}
          />
          <Card
            image={image04}
            name="Orange"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#f1ae84"}
          />
          <Card
            image={image03}
            name="Blue Jay"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#ddf4fa"}
          />

          <Card
            image={image05}
            name="Pecker"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#86a5d2"}
          />
          <Card
            image={image01}
            name="Falcon"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#f9d58c"}
          />
          <Card
            image={image06}
            name="Gery Bird"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#91b4d2"}
          />
          <Card
            image={image03}
            name="Blue Jay"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#ddf4fa"}
          />

          <Card
            image={image02}
            name="Robbin"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#ecb88f"}
          />

          <Card
            image={image04}
            name="Orange"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#f1ae84"}
          />
          <Card
            image={image05}
            name="Pecker"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#86a5d2"}
          />
          <Card
            image={image06}
            name="Gery Bird"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#91b4d2"}
          />
          <Card
            image={image01}
            name="Falcon"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#f9d58c"}
          />
          <Card
            image={image02}
            name="Robbin"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#ecb88f"}
          />
          <Card
            image={image04}
            name="Orange"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#f1ae84"}
          />
          <Card
            image={image03}
            name="Blue Jay"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#ddf4fa"}
          />

          <Card
            image={image05}
            name="Pecker"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#86a5d2"}
          />
          <Card
            image={image01}
            name="Falcon"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#f9d58c"}
          />
          <Card
            image={image06}
            name="Gery Bird"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#91b4d2"}
          />
          <Card
            image={image03}
            name="Blue Jay"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#ddf4fa"}
          />

          <Card
            image={image02}
            name="Robbin"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#ecb88f"}
          />

          <Card
            image={image04}
            name="Orange"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#f1ae84"}
          />
          <Card
            image={image05}
            name="Pecker"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#86a5d2"}
          />
          <Card
            image={image06}
            name="Gery Bird"
            onPress={() => onSetRenderScreen(<BirdScreen />)}
            color={"#91b4d2"}
          />
        </div>
        <div style={styles.endText}>That's all the them!</div>
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
    marginBottom: "2rem",
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
    marginBottom: "2rem",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "600",
    color: "#032135",
    lineHeight: "0.9",
  },
  logo: {
    width: "3rem",
    height: "3rem",
    marginBottom: "3rem",
  },
  endText: {
    width: "100%",
    textAlign: "center",
    marginBottom: "5rem",
    fontWeight: "500",
  },
};
