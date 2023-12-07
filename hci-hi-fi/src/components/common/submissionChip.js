import "./submissionChipStyle.css";
import { useState } from "react";
import birdDraw from "./../../assets/png/orange-bird.png";

export default function Chip(props) {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  const handleClick = () => {
    handleShow();
    // Handle click event, you can perform any action here
    console.log(`Clicked on chip with attribute: ${props.attribute}`);
  };

  return (
    <div className="chip-container">
      <button
        className={`chip ${props.submissionsPage ? "submissions-chip" : ""}`}
        style={{ backgroundColor: `${props.color}` }}
        onClick={handleClick}
      >
        {props.attribute}
        <img src={props.icon} alt="" className="chip-icon" />
      </button>
      {show && (
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
            <div className="modalCounterNumber">{count}</div>
            <button
              className="modalCounterNumber modalCounterButton"
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
      )}
    </div>
  );
}
