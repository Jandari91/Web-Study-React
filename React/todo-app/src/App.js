import "./App.css";
import { Header, Sidebar } from "./components/organisms";
import { Manage, Today } from "./pages/";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="center">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Today />} />
          <Route path="manage" element={<Manage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
