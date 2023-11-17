import "./App.css";

// Homerow
import Homerow from "./components/homerow/Homerow";

// Screens
import HomeScreen from "./components/screens/HomeScreen";
import BirdScreen from "./components/screens/BirdScreen";

function App() {
  return (
    <div className="App">
      <div className="screenContainer">
        <div className="pageContainer">
          <HomeScreen />
        </div>
        <div className="homerowContainer">
          <Homerow />
        </div>
      </div>
    </div>
  );
}

export default App;
