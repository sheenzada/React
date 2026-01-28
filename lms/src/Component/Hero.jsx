const Hero = () => {
  return (
    <>

    <section className="min-h-screen flex items-center justify-center text-center px-6">
          <img src="src/assets/img/inam.jpg" alt="" className="h-50 w-36 start-3.5 border-r-green-500 shadow-stone-500 rounded-lg " />

      <div>

        <h1 className="text-4xl md:text-6xl font-bold">

          Hi, I'm <span className="text-blue-500">Inam Ullah</span>

        </h1>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Frontend Developer | React & Tailwind CSS
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700">
          View My Work
        </button>
      </div>
    </section>
    </>
  );
};

export default Hero;
