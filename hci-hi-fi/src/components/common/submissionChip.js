import "./submissionChipStyle.css";

export default function Chip(props) {
  const handleClick = () => {
    // Handle click event, you can perform any action here
    console.log(`Clicked on chip with attribute: ${props.attribute}`);
  };
  const chipClassName = `chip ${
    props.submissionsPage ? "submissions-chip" : ""
  }`;

  return (
    <button
      className={chipClassName}
      style={{ backgroundColor: `${props.color}` }}
      onClick={handleClick}
    >
      {props.attribute}
      <img src={props.icon} alt="" className="chip-icon" />
    </button>
  );
}
