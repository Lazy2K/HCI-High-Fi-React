import "./chipStyle.css";

export default function Chip(props) {
  return (
    <button
      onClick={props.onClick}
      className="chip"
      style={{
        backgroundColor: props.highContrast ? "black" : `${props.color}`,
        color: props.highContrast ? "white" : "#112328",
      }}
    >
      {props.attribute}
    </button>
  );
}
