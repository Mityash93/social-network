import React from 'react'
import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <Content/>
    </div>
  );
}

export default App;
