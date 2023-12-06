//comps
import Submission from "../common/Submission";

//
import BirdScreen from "./BirdScreen";
import Chip from "../common/Chip";
import editIcon from "./../../assets/icons/Edit.png";

//submission screen
export default function SubmissionScreen({ onSetRenderScreen }) {
  return (
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
  submissionsContainer: {
    display: "flex",
    flexDirection: "row",
    overflowX: "auto",
    position: "absolute",
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
};
