import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import SocialBar from './SocialBar/SocialBar';
import DefaultPage from './Example';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Navbar}/>
      <Route exact path={["/", "/home"]} component={Home}/>
      <Route path="/about" render={() => <Home additionalComponent={SocialBar} />}/>
    </div>
  );
}

export default App;
