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
import ScrollToTop from "./components/ScrollToTop";
import Technology from "./pages/Technology.tsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="rules" element={<Rules />} />
            <Route path="imprint" element={<Imprint />} />
            <Route path="pioneers" element={<Pioneers />} />
            <Route path="team" element={<Team />} />
            <Route path="assets" element={<Assets />} />
            <Route path="changelog" element={<Changelog />} />
            <Route path="technology" element={<Technology />} />
            <Route path="admin/*" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
