
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
import CartContext, { CartProvider } from './context/CartContext';
import { Check } from 'lucide-react';
import Checkout from './Pages/Checkout';

function App () {
  return (

    <>
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  </CartProvider> 

     <CartContext/>
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
    {/* <MetaForm/> */}
    </>
  )
}
export default App;