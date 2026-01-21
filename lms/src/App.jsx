import React from 'react'

// function App() {
//   return (
//     // <div><h1 className='text-red-800'>inam</h1></div>
//     <div>
// <button class="bg-blue-500 ...">Button A</button>
// <button class="bg-cyan-500 ...">Button B</button>
// <button class="bg-pink-500 ...">Button C</button>
// Save changes
// <button class="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ...">
//   Save changes
// </button>
// <h1 className='text-8xl text-green-500 shadow-amber-900 blur-sm'>hi</h1>
//     <div className='w-full h-96 bg-blue-500 flex justify-around items-center flex-wrap'>
//     <div className='w-72 bg-amber-400 h-80'></div>
//     <div className='w-72 bg-amber-400 h-80'></div>
//     <div className='w-72 bg-amber-400 h-80'></div>
//     {/* <div className='w-72 bg-amber-400 h-80'></div> */}

//     </div>
//     <div class="forced-color-adjust-none md:forced-color-adjust-auto ...">
//       <form>
//   <fieldset class="forced-color-adjust-none lg:forced-color-adjust-auto ...">
//     <legend>Choose a color:</legend>
//     <select class="hidden lg:block">
//       <option value="White">White</option>
//       <option value="Gray">Gray</option>
//       <option value="Black">Black</option>
//     </select>
//     <div class="lg:hidden">
//       <label>
//         <input class="sr-only" type="radio" name="color-choice" value="White" />
//         {/* <!-- ... --> */}
//       </label>
//       {/* <!-- ... --> */}
//     </div>
//   </fieldset>
// </form>
// </div>

//     </div>
    
//   )
// }

// export default App

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Card from './Card';


  

function App() {
  return (
    <h1 className="text-red-600 text-4xl">Tailwind Working

    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />

    <div className="min-h-screen bg-blue-600 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-green-400 gap-6">
        
        <Card
          title="Responsive Card"
          description="This card is fully responsive using Tailwind CSS."
          image="https://via.placeholder.com/400x200"
          buttonText="Read More"
        />

        <Card
          title="React + Tailwind"
          description="Reusable card component in React JSX."
          image="https://via.placeholder.com/400x200 "
          buttonText="Explore"
        />

        <Card
          title="Modern UI"
          description="Clean, fast, and mobile-friendly design."
          image="https://via.placeholder.com/400x200"
          buttonText="Learn More"
        />
        
      </div>
    </div>
    </div>
    </h1>
  );
}

export default App;
