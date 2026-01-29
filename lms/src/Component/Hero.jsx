const Hero = () => {
  return (
    <>
<div >
  
  <img
  src="src/assets/img/inam.jpg"
  className="w-32 h-32 rounded-full object-cover border-4 border-yellow-200 shadow-lg mx-auto mt-12"
/>

    </div>
    <section className="min-h-screen flex items-center justify-center text-center px-6 ">

      <div>

        <h1 className="text-4xl md:text-6xl font-bold ">

          Hi, I'm <span className="text-blue-500">Inam Ullah</span>

        </h1>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Frontend Developer | React & Tailwind CSS
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 rounded-lg hover:bg-blue-700 border-collapse">
          View My Work
        </button>
      </div>
    </section>
    </>
  );
};

export default Hero;
