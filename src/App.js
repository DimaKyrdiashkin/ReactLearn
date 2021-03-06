import React, {createContext, Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Web from './Pages/Web';
import Motion from './Pages/Motion';
import Game from './Pages/Game';
import Sound from './Pages/Sound';
import About from './Pages/About';
import Header from "./components/Header";
import ProjectName from "./Pages/ProjectName/ProjectName";
import Projects from "./Pages/Projects";
import Footer from "./components/Footer";

export const InfoContext = createContext();

function App() {
    return (
        <>
            <Suspense fallback={(<div>Loading ~~~</div>)}>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route exact path='/'  component={Web} />
                        <Route exact path='/motion' component={Motion}/>
                        <Route exact path='/sound' component={Sound}/>
                        <Route exact path='/game' component={Game}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/project/:id' render={() => <ProjectName /> }/>
                        <Route exact path='/projects' render={() => <Projects ids={"web_del"} linkHome={'/'}/> } />
                        <Route exact path='/motion/projects' render={() => <Projects ids={"motion"} linkHome={'/motion'}/> } />
                        <Route exact path='/sound/projects' render={() => <Projects ids={"sound"} linkHome={'/sound'}/> } />
                        <Route exact path='/game/projects' render={() => <Projects ids={"game"} linkHome={'/game'}/> } />
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </Suspense>
        </>
    );
}

export default App;