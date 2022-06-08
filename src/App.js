import React from 'react'
import './App.css';
import Content from './Components/Content/Content';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <div className="app-wrapper-content">
        <Content/>
        {/* <Dialogs/> */}
      </div>
    </div>
  );
}

export default App;
