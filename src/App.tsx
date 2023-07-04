import "./App.scss";
import TopPage from "@pages/TopPage";
import MyRecord from "@pages/MyRecord";
import ColumnPage from "@pages/ColumnPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/record" element={<MyRecord />} />
        <Route path="/column" element={<ColumnPage />} />
      </Routes>
    </div>
  );
}

export default App;
