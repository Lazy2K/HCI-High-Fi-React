import "./cardStyle.css";

export default function Card(props) {
  return (
    <button
      onClick={props.onPress}
      className="card"
      style={{ backgroundColor: `${props.color}` }}
    >
      <img src={props.image} className="cardImage" alt="Bird Image" />
      <div
        className="cardInfo"
        style={{ fontSize: props.large ? "3rem" : "2rem" }}
      >
        {props.name}
        <p
          className="cardDescription"
          style={{ fontSize: props.large ? "2rem" : "1rem" }}
        >
          This is a short description of the bird's appearance
        </p>
      </div>
    </button>
  );
}
