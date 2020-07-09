import React, {createContext} from 'react';
import './App.css';
// import PromoContent from "./components/PromoContent"
import Header from "./components/Header"
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { BrowserRouter, Route } from 'react-router-dom';

export const InfoContext = createContext();

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header/>
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/' component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
