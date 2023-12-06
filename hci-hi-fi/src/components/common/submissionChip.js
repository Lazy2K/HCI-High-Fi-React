import "./submissionChipStyle.css";

export default function Chip(props) {
  const chipClassName = `chip ${
    props.submissionsPage ? "submissions-chip" : ""
  }`;

  return (
    <div
      className={chipClassName}
      style={{ backgroundColor: `${props.color}` }}
    >
      {props.attribute}
      <img src={props.icon} alt="" className="chip-icon" />
    </div>
  );
}
