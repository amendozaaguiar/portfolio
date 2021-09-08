import './App.css';
import Navbar from './navbar/Navbar';
import Profile from './profile/Profile';
import Skills from './skills/Skills';
import Description from './description/Description';

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Profile></Profile>
        <Description></Description>
        <Skills></Skills>
    </div>
  );
}

export default App;
