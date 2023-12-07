//comps
import { useState } from "react";
import Submission from "../common/Submission";
import BackButton from "../common/BackButton";
import HomeScreen from "./HomeScreen";
import birdDraw from "./../../assets/png/orange-bird.png";

//
import BirdScreen from "./BirdScreen";
import Chip from "../common/submissionChip";
import editIcon from "./../../assets/icons/Edit.png";
import logo from "./../../assets/logos/logo-1.png";

export default function SubmissionScreen(props) {
  const handleChipClick = (attribute) => {
    // Handle chip click event, you can perform any action here
    console.log(`Clicked on chip with attribute: ${attribute}`);
  };

  return (
    <div className="SubmissionScreen" style={styles.submissionScreen}>
      <div className="SubmissionContainer" style={styles.submissionsGrid}></div>
      <div className="PageContainer" style={styles.pageContainer}>
        <div className="HomeScreen" style={styles.submissionScreen}>
          <div
            className="HomeScreenContainer"
            style={styles.submissionContainer}
          >
            <div className="Header"></div>
            <img src={logo} style={styles.logo} />
            <div className="Title" style={styles.title}>
              Welcome Nick, what birds can you see?
            </div>
          </div>
          <div className="SubmissionScreen" style={styles.submissionScreen}>
            <div className="SubmissionContainer" style={styles.submissionsGrid}>
              <Chip
                attribute={"sub1"}
                color={"#ffebc8"}
                icon={editIcon}
                submissionsPage
              />
              <Chip
                attribute={"sub2"}
                color={"#ffebc8"}
                icon={editIcon}
                submissionsPage
              />
              <Chip
                attribute={"sub3"}
                color={"#ffebc8"}
                icon={editIcon}
                submissionsPage
              />
              <Chip
                attribute={"sub24"}
                color={"#ffebc8"}
                icon={editIcon}
                submissionsPage
              />
              <Chip
                attribute={"sub5"}
                color={"#ffebc8"}
                icon={editIcon}
                submissionsPage
              />
              <Chip
                attribute={"sub6"}
                color={"#ffebc8"}
                icon={editIcon}
                submissionsPage
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  submissionScreen: {
    width: "100%",
    height: "100%",
  },
  submissionContainer: {
    padding: "1.3rem",
    display: "flex",
    flexDirection: "column",
    marginBottom: "8rem",
  },
  submissionContainer: {
    display: "flex",
    flexDirection: "row",
    overflowX: "auto",
    position: "absoulte",
    scrollbarWidth: "none",
    marginTop: "2rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  submissionsGrid: {
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
  logo: {
    width: "3rem",
    height: "3rem",
    marginBottom: "3rem",
  },
  pageContainer: {
    padding: "0rem 1.3rem 8rem 1.3rem",
  },
  modalContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
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
};
