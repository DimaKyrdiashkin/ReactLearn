import React from 'react';
import './App.css';
import Header from "./components/Header"
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;