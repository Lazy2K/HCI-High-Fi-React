import { useState } from "react";

import Sound from "../function/AudioPlayer";
import BackButton from "../common/BackButton";
import HomeScreen from "./HomeScreen";

import mainBird from "./../../assets/bird-images/chaffinch.jpg";
import birdDraw from "./../../assets/png/orange-bird.png";

import share from "./../../assets/icons/Share.png";

import "./css/BirdScreen.css";

export default function BirdScreen(props) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  const [count, setCount] = useState(0);

  return (
    <div className="BirdScreen" style={styles.birdScreen}>
      <div className="HeaderContainer" style={styles.headerContainer}>
        <BackButton
          clickFunction={() =>
            props.clicky(<HomeScreen onSetRenderScreen={props.clicky} />)
          }
        />
      </div>
      <div className="PageContainer" style={styles.pageContainer}>
        <div className="ModalContainer" style={styles.modalContainer}>
          <div className="modal" style={{ display: show ? "block" : "none" }}>
            <div style={{ justifyContent: "center", display: "flex" }}>
              <img src={birdDraw} className="modalImage" />
            </div>
            <div className="modalCounterContainer">
              <button
                className="modalCounterNumber modalCounterButton"
                onClick={() =>
                  count > 0
                    ? setCount(count - 1)
                    : console.log("Count can't go below zero")
                }
              >
                -
              </button>
              <div class="modalCounterNumber">{count}</div>
              <button
                class="modalCounterNumber modalCounterButton"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
            <div>
              <button className="confirmButon" onClick={handleHide}>
                Confirm
              </button>
            </div>
          </div>
        </div>

        <img src={mainBird} style={styles.birdImage} alt="Bird Image" />
        <div style={styles.birdInfo}>
          <div style={styles.birdInfoInner}>
            <div style={styles.birdInfoHeader}>
              <div className="TITLE" style={styles.birdTitle}>
                Chaffinch
              </div>
              <div className="ICONS">
                <img src={share} style={styles.shareIcon} />
              </div>
            </div>
            <div>
              <div>
                The Chaffinch is one of the most widespread and common birds in
                Britain and Ireland. Its patterned plumage helps it blend in
                when feeding on the ground, so it is easiest to see when it
                flies, as a flash of white on the wings and white outer tail
                feathers is revealed. It's shy when it comes to bird feeders,
                preferring to hop about under the bird table or under the hedge.
                You'll usually hear Chaffinches before you see them, thanks to
                their loud song and range of calls.
              </div>
              <div style={{ textAlign: "center", marginTop: "4rem" }}>
                <div></div>
                <Sound style={styles.birdAudio} />
              </div>
            </div>
          </div>
          <button onClick={handleShow} style={styles.reportButton}>
            Report Numbers
          </button>
        </div>
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
  pageContainer: {
    padding: "0rem 1.3rem 8rem 1.3rem",
  },
  birdImage: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "1rem",
  },
  birdInfo: {
    padding: "1rem 0rem 0rem 0rem",
    backgroundColor: "#e0e0e0",
    borderRadius: "10px",
  },
  birdInfoHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  birdTitle: {
    fontSize: "3rem",
    fontWeight: "600",
    color: "#032135",
  },
  shareIcon: {
    width: "2rem",
    height: "2rem",
  },
  birdAudio: {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  reportButton: {
    width: "100%",
    border: "0px",
    padding: "2rem",
    backgroundColor: "#f1ae84",
    fontSize: "1.6rem",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "600",
    borderRadius: "0px 0px 10px 10px",
  },
  birdInfoInner: {
    padding: "0rem 1rem 0rem 1rem",
  },
  modalContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
};
