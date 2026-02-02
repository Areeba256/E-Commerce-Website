import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar/Navbar";
import Topheader from "./Components/Top-Header/Topheader";
import HomeScreen from "./Pages/HomeScreen";
import ContactScreen from "./Pages/ContactScreen";
import SignUpScreen from "./Pages/SignUpScreen";
import About from "./Pages/AboutScreen";
import "bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Topheader />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactScreen />}></Route>
        <Route path="/" element={<SignUpScreen />}></Route>
      </Routes>
    </>
  );
}

export default App;
