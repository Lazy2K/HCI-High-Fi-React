import Sound from "../function/AudioPlayer";

export default function BirdScreen(props) {
  return (
    <div>
      <Sound audioFile={null} />
      <div>
        Falcons are birds of prey in the genus Falco, which includes about 40
        species. Falcons are widely distributed on all continents of the world
        except Antarctica. Adult falcons have thin, tapered wings, which enable
        them to fly at high speed and change direction rapidly. Fledgling
        falcons, in their first year of flying, have longer flight feathers,
        which make their configuration more like that of a general-purpose bird
        such as a broad wing. This makes flying easier while learning the
        exceptional skills required to be effective hunters as adults.
      </div>
    </div>
  );
}
