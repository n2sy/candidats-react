import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cv from './pages/Cv';
import Home from './pages/Home';
import AddCv from './pages/AddCv';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Infos from './components/Infos';
import Update from './components/Update';
import { useContext } from 'react';
import { LoginContext } from './store/LoginContext';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const LogCtx = useContext(LoginContext);
  LogCtx.verifierConnecte();

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
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/cv' element={<Cv></Cv>}></Route>
          <Route path='/cv/add' element={<AddCv></AddCv>}></Route>
          <Route path='/cv/:id' element={<Infos></Infos>}></Route>
          <Route path='/cv/:id/edit' element={<Update></Update>}></Route>
        </Routes>
      </>

    );
  }
  else
    return (
      <>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/cv' element={<Cv></Cv>}></Route>
          <Route path='/cv/:id' element={<Infos></Infos>}></Route>
          <Route path='/login' element={<Login selogger={seLogger}></Login>}></Route>
        </Routes>
      </>
    )
}

export default App;
