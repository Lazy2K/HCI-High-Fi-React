import Sound from "../function/AudioPlayer";

const FalconAudio =
  "http://localhost:3000/static/media/falcontext.5912db496e7341dd729b.mp3";

const runnnit = () => {
  console.log(process.env.PUBLIC_URL + "/sounds/falcontext.mp3");
};

export default function BirdScreen(props) {
  return (
    <div>
      <button onClick={runnnit}>Click</button>
      <Sound audioFile={FalconAudio} />
    </div>
  );
}
