export default function BirdScreen(props) {
  return (
    <div style={styles.card}>
      <img src={props.image} style={styles.cardImage} />
      <div style={styles.cardInfo}>{props.name}</div>
    </div>
  );
}

const styles = {
  card: {
    borderRadius: "10px",
    backgroundColor: "#000000",
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
};
