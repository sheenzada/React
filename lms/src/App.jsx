
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
import BestPortfolio from './Portfolio/BestPortfolio'
function App () {
  return (

    <>
    {/* <BestPortfolio/> */}
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    {/* <MetaForm/> */}

    {/* <Loginform/> */}
    
    <Card />
    {/* <Loginform/> */}
    <Navbars/>
    <Abouts/>
    <Project/>
    <Contacts/>
    <TodoList/>
    {/* <MetaForm/> */}
    </>
  )
}
export default App;