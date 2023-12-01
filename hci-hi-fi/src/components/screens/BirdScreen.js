import Sound from "../function/AudioPlayer";
import BackButton from "../common/BackButton";
import HomeScreen from "./HomeScreen";

import falcon from "./../../assets/md/midres-1.jpg";

export default function BirdScreen(props) {
  return (
    <div className="BirdScreen" style={styles.birdScreen}>
      <div className="HeaderContainer" style={styles.headerContainer}>
        <BackButton
          clickFunction={() =>
            props.clicky(<HomeScreen onSetRenderScreen={props.clicky} />)
          }
        />
      </div>
      <div className="PageContainer">
        <img src={falcon} alt="Bird Image" />
      </div>
    </div>
  );
}

const styles = {
  birdScreen: {
    width: "100%",
    height: "100%",
    backdropFilter: "blur(5px)",
    display: "flex",
    flexDirection: "column",
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: "1.3rem",
  },
};
