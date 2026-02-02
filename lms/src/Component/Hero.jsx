




import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-400 via-indigo-500  to-yellow-200 text-white px-6">
      
      {/* Profile Image */}
      <div className="mb-8 md:mb-0 md:mr-12">
        <img
          src="src/assets/img/inam-2.jpg"
          alt="Inam Ullah"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-green-300 shadow-sm mx-auto animate-colorRotate saturate-150 contrast-125"
        />
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, <span className="text-gray-700">I'm</span>{" "}
          <span className="text-green-500">Inam Ullah</span>
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
