import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Imprint from "./pages/Imprint";
import Pioneers from "./pages/Pioneers";
import Team from "./pages/Team";
import Assets from "./pages/Assets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/pioneers" element={<Pioneers />} />
          <Route path="/team" element={<Team />} />
          <Route path="/assets" element={<Assets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
