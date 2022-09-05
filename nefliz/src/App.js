import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Switch} from 'react-router-dom';
import Home from "./components/Home/Home";
import DetailSerie from "./screens/DetailSerie/DetailSerie";
import DetailMovie from "./screens/DetailMovie/DetailMovie";
import VerTodas from "./screens/VerTodas/VerTodas";
import VerTodap from "./screens/VerTodap/VerTodap";




function App() {

  
  return (
    <React.Fragment>
      <Header />
      <main>
      <Switch>
      <Route path='/' exact={true} component={Home}/>
      <Route path='/detail/series/id/:id' component={DetailSerie}/>
      <Route path='/detail/peliculas/id/:id' component={DetailMovie}/>
      <Route path='/series/vertodas' exact={true} component={VerTodas}/>
      <Route path='/peliculas/vertodap' exact={true} component={VerTodap}/>
      </Switch> 
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
