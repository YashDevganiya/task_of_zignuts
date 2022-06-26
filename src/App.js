import logo from "./logo.svg";
import "./App.css";
import Login from "./Routes/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Invitation from "./Routes/Invitation page";

function App() {
  let userId = localStorage.getItem("user_id");

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route
          path={"/invitation-page"}
          element={userId ? <Invitation /> : <Navigate to={"/"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
