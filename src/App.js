import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SocialBar from './components/SocialBar/SocialBar';
import Projects from './components/Projects/Projects';
import FAQ from './components/FAQ/FAQ';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Navbar}/>
      <Route exact path="/" render={() => <Home additionalComponent={SocialBar} animate={true}/> } />
      <Route path="/home" component={Home}/>
      <Route path="/projects" render={() => <Projects additionalComponent={FAQ} />}/>
      <Route path="/about" render={() => <Home additionalComponent={FAQ} />}/>
    </div>
  );
}

export default App;
