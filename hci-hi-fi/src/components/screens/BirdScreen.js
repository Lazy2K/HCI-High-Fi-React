import Sound from "../function/AudioPlayer";
import BackButton from "../common/BackButton";

import falcon from "./../../assets/png/falcon-1.png";

export default function BirdScreen(props) {
  return (
    <div style={styles.homeScreen}>
      <img src={falcon} style={styles.mainImage} />
      <div style={styles.pageContent}>
        <Sound audioFile={null} />
      </div>
    </div>
  );
}

const styles = {
  homeScreen: {
    width: "100%",
    height: "100%",
    backdropFilter: "blur(5px)",
    backgroundColor: "#999999",
  },
  homeContainer: {
    padding: "1.3rem",
    display: "flex",
    flexDirection: "column",
    marginBottom: "8rem",
  },
  textBody: {
    color: "white",
    backgroundColor: "#00000060",
    backdropFilter: "blur(5px)",
  },
  mainImage: {
    width: "100%",
    margin: "0px",
    padding: "0px",
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  pageContent: {
    width: "100%",
    backgroundColor: "white",
    margin: "0px",
    padding: "0px",
  },
};
