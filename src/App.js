import React from 'react';
import './App.css';
import PromoContent from "./components/PromoContent"
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/' component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
