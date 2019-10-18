import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import SocialBar from './SocialBar/SocialBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Navbar}/>
      <Route exact path="/" render={() => <Home additionalComponent={SocialBar} animate={true}/> } />
      <Route path="/home" render={() => <Home additionalComponent={SocialBar} />}/>
      <Route path="/about" component={Home}/>
    </div>
  );
}

export default App;
