import "./chipStyle.css";

export default function Chip(props) {
  return (
    <div className="chip" style={{ backgroundColor: `${props.color}` }}>
      {props.attribute}
    </div>
  );
}
