const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur border-b border-gray-700 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="text-xl font-bold text-blue-500">MyPortfolio</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
