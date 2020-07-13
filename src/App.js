import React, {createContext} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from "./components/Header"
import Web from './Pages/Web';
import Motion from './Pages/Motion';
import Game from './Pages/Game';
import Sound from './Pages/Sound';
import About from './Pages/About';

export const InfoContext = createContext();
export const ProjectsContext = createContext();


function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Web} />
          <Route path='/motion' component={Motion} />
          <Route path='/sound' component={Sound} />
          <Route path='/game' component={Game} />
          <Route path='/about' component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;