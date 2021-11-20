import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import Profile from './profile/Profile';
import Skills from './skills/Skills';
import Description from './description/Description';
import Works from './works/Works';
import { Route, Routes  } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<Profile />} />
            <Route exact path="/portfolio" element={<Profile />} />
            <Route exact path="/portfolio#description" element={<Description />} />
            <Route exact path="/portfolio#skills" element={<Skills />} />
            <Route exact path="/portfolio#works" element={<Works />} />
            <Route path="/*" element={<Profile />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
