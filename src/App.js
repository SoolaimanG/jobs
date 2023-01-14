import Topbar from "./Component/TopBar/topbar";
import Home from "./Pages/Home/home";
import { Routes, Route } from "react-router-dom";
import Search from "./Pages/search";
import Page from "./Pages/Page";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/search/:types" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
