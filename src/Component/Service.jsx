import { Code2, PenTool, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code2 size={28} />,
      title: "Web Development",
      desc: "High-performance React applications with scalable architecture and pixel-perfect UI implementation.",
    },
    {
      icon: <PenTool size={28} />,
      title: "UI / UX Design",
      desc: "Modern, intuitive and conversion-focused designs crafted with attention to micro-interactions.",
    },
    {
      icon: <Sparkles size={28} />,
      title: "Brand Experience",
      desc: "Creating powerful digital identities that combine design, motion and technology seamlessly.",
    },
  ];

  return (
    <section id="service" className="relative bg-[#0b0f19] text-white py-28 px-6 overflow-hidden">
      
      {/* Gradient Mesh Background */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Big Background Text */}
        <h1 className="absolute text-[120px] md:text-[180px] font-black text-white/5 top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none">
          SERVICES
        </h1>

        {/* Section Header */}
        <div className="text-center mb-24 relative">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Offer</span>
          </h2>
          <p className="text-gray-400 font-bold mt-6 max-w-2xl mx-auto">
            I craft immersive digital experiences that merge design, technology,
            and strategy into powerful results.
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-purple-500/40 via-cyan-400/40 to-purple-500/40 hover:from-purple-500 hover:to-cyan-500 transition duration-700"
            >
              {/* Inner Card */}
              <div className="relative h-full bg-[#111827]/80 backdrop-blur-2xl rounded-3xl p-10 transition duration-500 group-hover:-translate-y-4">

                {/* Icon */}
                <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white shadow-lg">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4 tracking-wide">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {service.desc}
                </p>

                {/* Hover Line */}
                <div className="absolute bottom-8 left-10 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-20 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
