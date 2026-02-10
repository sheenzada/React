
import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    img: "src/assets/img/geralt-social-3064515_1920 (1).jpg",
    demo: "#",
    code: "https://github.com/sheenzada",
  },
  {
    title: "E-commerce UI",
    tech: ["React", "API", "Tailwind"],
    img: "src/assets/img/7337547.jpg",
    demo: "#",
    code: "https://github.com/inamullah/ecommerce",
  },
  {
    title: "Dashboard App",
    tech: ["React", "Charts.js", "Tailwind"],
    img: "src/assets/img/istockphoto-1387134070-612x612.webp",
    demo: "#",
    code: "https://github.com/inamullah/dashboard",
  },
  {
    title: "Social Media App",
    tech: ["React", "Firebase", "Tailwind"],
    img: "src/assets/img/istockphoto-1299122459-612x612.webp",
    demo: "#",
    code: "https://github.com/inamullah/social",
  },
  {
    title: "Responsive Website",
    tech: ["Html", "Css" , "Bootstrap"],
    img: "src/assets/img/pexels-luis-gomes-166706-546819.jpg",
    demo: "#",
    code: "https://github.com/sheenzada",
  },
  {
    title: "Website Developer & Designer",
    tech: ["JavaScript", "Mongodb" , "Node.js"],
    img: "src/assets/img/istockphoto-1061329208-612x612.webp",
    demo: "#",
    code: "https://github.com/sheenzada",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 relative inline-block">
          My Projects
          <span className="absolute left-0 -bottom-2 w-20 h-1 bg-orange-700 rounded-full"></span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-500"
            >
              {/* Project Image */}
              <div className="relative group">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center gap-4 text-white transition-opacity duration-300">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-gray-200 flex flex-wrap justify-center gap-2">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-sm font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </p>
                  <div className="flex gap-4 mt-2">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
                    >
                      Live Demo
                    </a>
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition cursor-pointer"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
                <p className="text-gray-400 mt-2">
                  {p.tech.join(" • ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
