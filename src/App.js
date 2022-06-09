import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./Components/Content/Content";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content"> 
        <Routes>
            <Route path='messages/*' element={<Dialogs />} />
            <Route exact path="/" element={<Content />} />
            <Route exact path="/messages" element={<Dialogs />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
