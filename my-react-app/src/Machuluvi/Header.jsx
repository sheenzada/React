

// import { useState } from 'react';
// import { createRoot } from 'react-dom/client';

// function MyCar() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//     </>
//   )
// }

// createRoot(document.getElementById('root')).render(
//   <MyCar />
// );
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

export default App;
