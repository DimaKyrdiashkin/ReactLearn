import React, {createContext, Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Web from './Pages/Web';
import Motion from './Pages/Motion';
import Game from './Pages/Game';
import Sound from './Pages/Sound';
import About from './Pages/About';

import './i18next'
import Header from "./components/Header";
export const InfoContext = createContext();
export const ProjectsContext = createContext();
export const ClientContext = createContext();
export const LanguageContext = createContext();



function App() {

    return (
        <>
            <Suspense fallback={(<div>Leading ~~~</div>)}>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Web} />
                    <Route path='/motion' component={Motion}/>
                    <Route path='/sound' component={Sound}/>
                    <Route path='/game' component={Game}/>
                    <Route path='/about' component={About}/>
                </Switch>
            </BrowserRouter>
            </Suspense>
        </>
    );
}

export default App;