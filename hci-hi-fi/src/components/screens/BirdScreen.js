import Sound from "../function/AudioPlayer";
import BackButton from "../common/BackButton";

import MainImage from "./../../assets/hd/highres-2.jpg";

export default function BirdScreen(props) {
  return (
    <div style={styles.homeScreen}>
      <Sound audioFile={null} />
    </div>
  );
}

const styles = {
  homeScreen: {
    width: "100%",
    height: "100%",
    backdropFilter: "blur(5px)",
    backgroundColor: "#000000a0",
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
    borderRadius: "10px",
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
};
