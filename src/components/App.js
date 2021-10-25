import './App.css';
import Navbar from './navbar/Navbar';
import Profile from './profile/Profile';
import Skills from './skills/Skills';
import Description from './description/Description';
import Works from './works/Works';
import Footer from './footer/Footer';

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Profile></Profile>
        <Description></Description>
        <Skills></Skills>
        <Works></Works>
        <Footer></Footer>
    </div>
  );
}

export default App;
