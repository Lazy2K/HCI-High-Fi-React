import "./cardStyle.css";

export default function Card(props) {
  return (
    <button
      onClick={props.onPress}
      className="card"
      style={{ backgroundColor: `${props.color}` }}
    >
      <img src={props.image} className="cardImage" alt="Bird Image" />
      <div className="cardInfo">
        {props.name}
        <p className="cardDescription">
          This is a short description of the bird's appearance
        </p>
      </div>
    </button>
  );
}
