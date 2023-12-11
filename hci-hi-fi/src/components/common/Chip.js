import "./chipStyle.css";

export default function Chip(props) {
  return (
    <div
      className="chip"
      style={{
        backgroundColor: props.highContrast ? "black" : `${props.color}`,
        color: props.highContrast ? "white" : "#112328",
      }}
    >
      {props.attribute}
    </div>
  );
}
