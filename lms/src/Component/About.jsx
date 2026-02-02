// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-gray-800">
//       <div className="max-w-5xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold mb-6">About Me</h2>
//         <p className="text-gray-400">
//           I am a passionate React developer who loves creating
//           modern, responsive, and user-friendly web applications.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About;



import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaNodeJs } from "react-icons/fa";


const About = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-400 w-8 h-8" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 w-8 h-8" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 w-8 h-8" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 w-8 h-8" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 w-8 h-8" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-8 h-8" /> },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:gap-12">
        {/* Profile Image */}
        <div className="mb-8 md:mb-0 md:flex-shrink-0">
          <img
            src="src/assets/img/saling.jpg"
            alt="Inam Ullah"
            className="w-48 h-48 rounded-full border-4 border-green-400 shadow-xl mx-auto md:mx-0 "
          />
        </div>

        {/* About Text & Skills */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            About Me
            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-yellow-400 rounded-full"></span>
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            Hello! I'm <span className="text-yellow-400 font-semibold">Inam Ullah</span>, 
            a passionate frontend developer specializing in <span className="text-blue-400">React</span> and <span className="text-green-400">Tailwind CSS</span>. 
            I love creating modern, responsive, and user-friendly web applications that deliver great experiences.
          </p>

          {/* Skills */}
          <h3 className="text-2xl font-semibold mb-4">SKILLS</h3>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 max-w-md mx-auto md:mx-0">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transition-transform"
              >
                {skill.icon}
                <span className="mt-2 text-gray-200 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
