import React from 'react';
import './App.css';
import { Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Support from './components/Support';

import { NavLink } from 'react-router-dom';
import Mainstream from './components/Mainstream';
function App() {
  return (
    <div className="App">
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/support">Support</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </nav>
          <Routes>
              <Route path="/" element={<Mainstream/>}>
                 <Route index element={<Home/>}/>
                 <Route path="/support" element={<Support/>}/>
                 <Route path="/about" element={<About/>}/>
              </Route>
              <Route path="/*" element={<Error/>}/>
          </Routes>
       
    </div>
  );
}

export default App;
