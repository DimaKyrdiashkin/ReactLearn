import React, {createContext, Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Web from './Pages/Web';
import Motion from './Pages/Motion';
import Game from './Pages/Game';
import Sound from './Pages/Sound';
import About from './Pages/About';
import Header from "./components/Header";
import Footer from "./components/Footer";

export const InfoContext = createContext();


function App() {
    return (
        <>
            <Suspense fallback={(<div>Leading ~~~</div>)}>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Web}/>
                        <Route path='/motion' component={Motion}/>
                        <Route path='/sound' component={Sound}/>
                        <Route path='/game' component={Game}/>
                        <Route path='/about' component={About}/>
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </Suspense>
        </>
    );
}

export default App;