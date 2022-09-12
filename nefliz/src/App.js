import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Switch} from 'react-router-dom';
import Home from "./components/Home/Home";
import DetailMovie from "./screens/DetailMovie/DetailMovie";
import VerTodas from "./screens/VerTodas/VerTodas";
import VerTodap from "./screens/VerTodap/VerTodap";
import Favoritos from "./screens/Favoritos/Favoritos";




function App() {

  
  return (
    <React.Fragment>
      <Header />
      <main>
      <Switch>
      <Route path='/' exact={true} component={Home}/>
      <Route path='/detail/movies/id/:id' component={DetailMovie}/>
      <Route path='/detail/peliculas/id/:id' component={DetailMovie}/>
      <Route path='/movies/vertodas' exact={true} component={VerTodas}/>
      <Route path='/peliculas/vertodap' exact={true} component={VerTodap}/>
      <Route path='/favoritos' exact={true} component={Favoritos}/>
     

      </Switch> 
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
