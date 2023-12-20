import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Cv from "./pages/Cv";
import Home from "./pages/Home";
import AddCv from "./pages/AddCv";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Infos from "./components/Infos";
import Update from "./components/Update";
import { useContext } from "react";
import { LoginContext } from "./store/LoginContext";
import { useNavigate } from "react-router-dom";
import StopWatch from "./pages/StopWatch";
import StopWatchSecond from "./pages/StopWatchSecond";
import Food from "./pages/Food";
import NoMatch from "./pages/NoMatch";

function App() {
  const navigate = useNavigate();
  const LogCtx = useContext(LoginContext);
  LogCtx.verifierConnecte();

  console.log(LogCtx.estConnecte);

  function seLogger(iden) {
    // LogCtx.seConnecter(iden);
    // LogCtx.verifierConnecte();
    // if (LogCtx.estConnecte) {
    //   console.log("yeeees");
    //   navigate('/cv');
    // }
    // else {
    //   console.log("Erreur");
    // }
  }

  if (LogCtx.estConnecte) {
    return (
      <>
        <Navbar></Navbar>
        <Routes>
          <Route path="" element={<Home></Home>}></Route>
          <Route path="cv">
            <Route path="" element={<Cv></Cv>}></Route>
            <Route path="add" element={<AddCv></AddCv>}></Route>
            <Route path=":id" element={<Infos></Infos>}></Route>
            <Route path=":id/edit" element={<Update></Update>}></Route>
          </Route>
          <Route path="food" element={<Food></Food>}></Route>
          <Route path="not-found" element={<NoMatch></NoMatch>}></Route>
          <Route
            path="*"
            element={<Navigate to="/not-found" replace />}
          ></Route>
        </Routes>
      </>
    );
  } else
    return (
      <>
        <Navbar></Navbar>
        <Routes>
          <Route path="" element={<Home></Home>}></Route>
          <Route path="/cv" element={<Cv></Cv>}></Route>
          <Route path="/cv/:id" element={<Infos></Infos>}></Route>
          <Route path="/watch" element={<StopWatch></StopWatch>}></Route>
          <Route
            path="/watch2"
            element={<StopWatchSecond initState="10"></StopWatchSecond>}
          ></Route>
          <Route path="/food" element={<Food></Food>}></Route>
          <Route
            path="/login"
            element={<Login selogger={seLogger}></Login>}
          ></Route>
        </Routes>
      </>
    );
}

export default App;
