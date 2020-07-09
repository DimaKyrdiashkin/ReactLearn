import React, {createContext} from 'react';
import './App.css';
import Header from "./components/Header"
import Web from './Pages/Web Design/Web';
import Motion from './Pages/Motion/Motion';
import Game from './Pages/Game/Game';
import About from './Pages/About';
import Sound from './Pages/Sound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const InfoContext = createContext();

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' component={Web} />
          <Route path='/gallery' component={Motion} />
          <Route path='/contact' component={Sound} />
          <Route path='/about' component={About} />
          {/* <Route path='/contact' component={Contact} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;