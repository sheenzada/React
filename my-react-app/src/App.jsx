import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Machuluvi/Footer'
import Header from './Machuluvi/Header'

function App() {
  return (
    <>
    <h1>hhhh</h1>
    <Footer/>
    <Header />
<MachuluviHeader />
    </>
  )
}


import { useState } from 'react';

function App() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  );
}


export default App
