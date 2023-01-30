import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Rockets from "./pages/Rockets";
import Missions from "./pages/Missions";
import Myprofile from "./pages/MyProfile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myprofile" element={<Myprofile />} />
        </Routes>
    </div>
  );
}

export default App;
