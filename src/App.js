import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "../src/Navbar/Navbar";
// import { useToken } from './Pages/Login/useToken';
import Login from "./Pages/Login/Login";
import Dashboard from "../src/Pages/Dashboard";

function App() {
  return (
    <>
      {/* <Navbar/>
    <Dashboard/> */}
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
