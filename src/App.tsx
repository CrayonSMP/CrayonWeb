import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Imprint from "./pages/Imprint";
import Pioneers from "./pages/Pioneers";
import Team from "./pages/Team";
import Assets from "./pages/Assets";
import Changelog from "./pages/Changelog";
import Admin from "./pages/admin/Admin";
import { AuthProvider } from "./context/AuthContext";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="rules" element={<Rules />} />
            <Route path="imprint" element={<Imprint />} />
            <Route path="pioneers" element={<Pioneers />} />
            <Route path="team" element={<Team />} />
            <Route path="assets" element={<Assets />} />
            <Route path="changelog" element={<Changelog />} />
            <Route path="admin/*" element={<Admin />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
