import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import Profile from "./screens/profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile-page" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
