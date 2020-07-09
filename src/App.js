import React, {createContext} from 'react';
import './App.css';
import Header from "./components/Header"
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const InfoContext = createContext();

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/gallery' component={Gallery} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;