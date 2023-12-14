import "./cardStyle.css";
import editIcon from "./../../assets/icons/Edit.png";

export default function Card(props) {
  return (
    <button
      onClick={props.onPress}
      className="subCard"
      style={{
        backgroundColor: props.highContrast ? "black" : `${props.color}`,
      }}
    >
      <img src={props.image} className="subCardImage" alt="Bird Image" />
      <div
        className="cardInfo"
        style={{
          fontSize: props.large ? "3rem" : "2rem",
          color: props.highContrast ? "white" : "#112328",
        }}
      >
        {props.name}
        <p
          className="cardDescription"
          style={{ fontSize: props.large ? "2rem" : "1rem" }}
        >
          You have reported <b>5</b> of this bird
        </p>
        <div className="subButtonContainer">
          <div>Edit</div>
          <button
            className="subEditButton"
            onClick={() => console.log("Clicked")}
          >
            <img
              src={editIcon}
              className="subEditIcon"
              style={{
                filter: props.highContrast ? "invert(100%)" : "invert(0%)",
              }}
            />
          </button>
        </div>
      </div>
    </button>
  );
}
