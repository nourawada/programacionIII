import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Switch} from 'react-router-dom';
import Home from "./components/Home/Home";
import DetailMovie from "./screens/DetailMovie/DetailMovie";




function App() {

  
  return (
    <React.Fragment>
      <Header />
      <main>
      <Switch>
      <Route path='/' exact={true} component={Home}/>
      <Route path='/detail/movies/id/:id' component={DetailMovie}/>
      <Route path='/detail/peliculas/id/:id' component={DetailMovie}/>
      </Switch> 
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
