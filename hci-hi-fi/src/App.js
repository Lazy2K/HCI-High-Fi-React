import "./App.css";

// Applicatoin navigation homerow
import Homerow from "./components/homerow/Homerow";

function App() {
  return (
    <div className="App">
      <div className="screenContainer">
        <div className="pageContainer"></div>
        <div className="homerowContainer">
          <Homerow />
        </div>
      </div>
    </div>
  );
}

export default App;
