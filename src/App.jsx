import Home from "./components/home/Home";
import Topbar from "./components/topbar/Topbar";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import './app.scss'
import {useState} from 'react'
import Menu from "./components/menu/Menu";
import Contactbar from "./components/contactbar/Contactbar";

function App() {
  const[menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app"> 
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Home/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      </div>
      <Contactbar/>
      
    </div>
  );
}


export default App;
