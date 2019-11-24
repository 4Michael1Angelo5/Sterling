import React from 'react';
import './App.css';
import './buttons.scss'
import Home from './components/homeComponent'
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Home/>
    </div>
    </BrowserRouter>
  );
}

export default App;
