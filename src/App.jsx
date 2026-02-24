import Hero from './Component/Hero';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import Footers from './Component/Footers';
import Service from './Component/Service'
import Dashboard from './Dashboard'
function App () {
  return (

    <>
    <Dashboard/>
    <Navbar/>
    <Hero/>
    <About/>
    <Service/>
    <Projects/>
    <Contact/>
    <Footers/>
    
    </>
  )
}
export default App;