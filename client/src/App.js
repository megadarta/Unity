import './App.css';
import Navbar from './component/Navbar.js';
import Lapor from './component/Lapor.js';
import Caralapor from './component/Caralapor.js';
import Footer from './component/Footer.js';
import Carakonsultasi from './component/Carakonsultasi.js';
import Psikolog from './component/Psikolog.js';
import Login from './component/Login.js';
import Home from './component/Home.js';
import Register from './component/Register.js';
import Story from './component/Cerita';
import Testing from './component/Testing';
import ListStory from './component/ListStory.js';
import LayoutCerita from './component/LayoutCerita.js';
import PreLoader from './component/PreLoader.js';
import PopupForm from './component/PopupForm.js';
import ModalCerita from './component/ModalCerita.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { server } from './server.js';
import 'animate.css';
import '@fortawesome/fontawesome-free/js/all.js';
import TulisCerita from './component/TulisCerita.js';
<<<<<<< HEAD
import Popup from './component/PopupForm';
import Artikel from './component/Artikel.js';
import ListArtikel from './component/ListArtikel.js';
=======
>>>>>>> 0270d1b3997bf2325b7139e4a8b4d0ee4cf3f880

function App() {
  const [autentikasi, setAutentikasi] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(server, {
      credentials: 'include',
      method: 'GET'
    })
    .then(isi => isi.json())
    .then(
      data => {
        setAutentikasi(data.auth);
        setLoading(false);
      }
    )
  }, [setAutentikasi, setLoading]);

  return (
    <Router>
      <Navbar autentikasi={autentikasi} setAutentikasi={setAutentikasi} setLoading={setLoading} loading={loading}/> 
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/list-story">
          <ListStory />
        </Route>
        <Route path="/action">
          <Lapor />
          <Caralapor />
          <Psikolog />
          <Carakonsultasi />
          <Footer />
        </Route>
        <Route path="/login">
          <Login autentikasi={autentikasi} setAutentikasi={setAutentikasi} setLoading={setLoading} />
        </Route>
        <Route path="/testing3">
          <ModalCerita />
        </Route>
        <Route path="/stories">
          {
            loading 
            ? <PreLoader />
            : <div>
                <LayoutCerita />
                <Footer />
              </div>
          }
        </Route>
        <Route path="/register">
          <Register setAutentikasi={setAutentikasi} setLoading={setLoading} />
        </Route>
        <Route path="/story">
          <Story />
        </Route>
        <Route path="/testing">
          <Testing />
        </Route>
        <Route path="/buat-cerita">
          <TulisCerita />
          <Footer />
        </Route>
        <Route path="/testing2">
          <PopupForm />
<<<<<<< HEAD
        </Route>
        <Route path="/artikel">
          <Artikel />
          <ListArtikel />
          <Footer />
=======
>>>>>>> 0270d1b3997bf2325b7139e4a8b4d0ee4cf3f880
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
