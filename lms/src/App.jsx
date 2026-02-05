
import Loginform from './Form/Loginform';
import Card from './Card';
import About from './Component/About';
import Hero from './Component/Hero';
import Navbar from './Component/Navbar';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import MetaForm from './Form/MetaForm';
import MetaLogin from './Form/Loginform';
import Navbars from './Portfolio/Navbars';
import Abouts from './Portfolio/Abouts';
import Project from './Portfolio/Project';
import Contacts from './Portfolio/Contacts';
import TodoList from './Todo/TodoList';
import Hook from './Hook/Hook'
import Footer from './Portfolio/Footer'
import Mportfolio from './Portfolio/Mportfolio'
import Keyframe from './Gemni/Keyframe'
function App () {
  return (

    <>
    {/* <Keyframe/> */}
    {/* <Mportfolio/> */}
    <Navbar/>
    <Hero/>
    <About/>
    <Hook/>
    <Projects/>
    <Contact/>
    <Footer/>
    {/* <MetaForm/> */}

    {/* <Loginform/> */}
    
    <Card />
    {/* <Loginform/> */}
    {/* <Navbars/>
    <Abouts/>
    <Project/>
    <Contacts/> */}
    {/* <TodoList/> */}
    {/* <MetaForm/> */}
    </>
  )
}
export default App;