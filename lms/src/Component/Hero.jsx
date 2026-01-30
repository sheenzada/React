// const Hero = () => {
//   return (
//     <>
// <div >
//     {/* <img */}
//   // src="src/assets/img/inam.jpg"
//   // class="w-32 h-32 rounded-full object-cover border-4 border-yellow-200 shadow-lg mx-auto  "

//   <img
//   src="src/assets/img/inam.jpg"
//   className="w-32 h-32 rounded-full object-cover border-4 border-yellow-200 shadow-lg mx-auto mt-12"
// />

//     </div>
//     <section className="h-72 flex items-center justify-center text-center px-6 ">

//       <div className="">

//         <h1 className="text-4xl md:text-6xl font-bold">

//           Hi, I'm <span className="text-blue-500">Inam Ullah</span>

//         </h1>
//         <p className="mt-4 text-gray-400 max-w-xl mx-auto">
//           Frontend Developer | React & Tailwind CSS
//         </p>
//         <button className="mt-6 px-6 py-3 bg-green-500 rounded-lg hover:bg-blue-700 border-collapse">
//           View My Work
//         </button>
//       </div>
//     </section>
//     </>
//   );
// };

// export default Hero;












import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-white px-6">
      
      {/* Profile Image */}
      <div className="mb-8 md:mb-0 md:mr-12">
        <img
          src="src/assets/img/inam-2.jpg"
          alt="Inam Ullah"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-green-300 shadow-sm mx-auto"
        />
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, <span className="text-gray-700"> I'm</span>  <span className="text-green-500">Inam Ullah</span>
        </h1>
        <p className="text-black mb-6">
          Frontend Developer | React & Tailwind CSS | UI/UX Enthusiast
        </p>
        <div>
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-green-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-white transition-all"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
