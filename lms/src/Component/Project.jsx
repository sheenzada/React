const Projects = () => {
  const projects = [
    { title: "Portfolio Website", tech: "React, Tailwind" },
    { title: "E-commerce UI", tech: "React, API" },
    { title: "Dashboard App", tech: "React, Charts" },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-400 mt-2">{p.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
