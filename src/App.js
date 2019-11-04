import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SocialBar from './components/SocialBar/SocialBar';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Navbar}/>
      <Route exact path="/" render={props => <Home {...props} additionalComponent={SocialBar} animate={true}/> } />
      <Route path="/home" render={props => <Home {...props} additionalComponent={SocialBar}/>}/>
      <Route path="/projects" render={props => <Projects {...props} />}/>
      <Route path="/about" render={props => <Home {...props} additionalComponent={About} />}/>
    </div>
  );
}

export default App;
