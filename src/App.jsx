import React, {createContext} from 'react';
import './App.css';
import Header from "./components/Header"
import Home from './Pages/Web Design/Web';
import Gallery from './Pages/Motion/Motion';
import About from './Pages/About';
import Contact from './Pages/Game/Game';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const InfoContext = createContext();

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          {/* <Route path='/contact' component={Contact} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;