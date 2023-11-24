export default function Card(props) {
  return (
    <button onClick={props.onPress} style={styles.card}>
      <img src={props.image} style={styles.cardImage} alt="Bird Image" />
      <div style={styles.cardInfo}>
        {props.name}
        <p style={styles.cardDescription}>This is a short bird description</p>
      </div>
    </button>
  );
}

const styles = {
  card: {
    borderRadius: "10px",
    backgroundColor: "#00000060",
    border: "1px",
    borderStyle: "solid",
    borderColor: "#60606060",
    backdropFilter: "blur(5px)",
  },
  cardImage: {
    width: "100%",
    borderRadius: "10px 10px 0px 0px",
  },
  cardInfo: {
    fontWeight: "600",
    fontSize: "2rem",
    padding: "1rem",
    color: "#ffffff",
  },
  cardDescription: {
    fontSize: "1rem",
    fontWeight: "400",
    marginTop: "0.2rem",
    marginBottom: "0rem",
  },
};
