import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Rockets from "./pages/Rockets";
import Missions from "./pages/Missions";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
