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
            <Route path="/" element={<Profile />} />
            <Route path="description" element={<Description />} />
            <Route path="skills" element={<Skills />} />
            <Route path="works" element={<Works />} />
            <Route path="/*" element={<Profile />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
