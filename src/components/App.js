import './App.css';
import Navbar from './navbar/Navbar';
import Profile from './profile/Profile';
import Skills from './skills/Skills';
import Description from './description/Description';
import Works from './works/Works';

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Profile></Profile>
        <Description></Description>
        <Skills></Skills>
        <Works></Works>
        
    </div>
  );
}

export default App;
