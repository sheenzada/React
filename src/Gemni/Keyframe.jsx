import React from "react";

const AnimatedCircleImage = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000";

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="relative">

        {/* Animated Gradient Background */}
        <div className="absolute inset-[-6px] rounded-full animate-gradient bg-[length:300%_300%] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-md"></div>

        {/* Image Container */}
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-slate-900">
          
          {/* Moving Gradient Overlay */}
          <div className="absolute inset-0 animate-gradient bg-[length:300%_300%] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-40"></div>

          {/* Image */}
          <img
            src={imageUrl}
            alt="Animated content"
            className="relative w-full h-full object-cover mix-blend-overlay"
          />
        </div>

        {/* Status Ping */}
        <span className="absolute top-2 right-2 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-sky-500"></span>
        </span>

      </div>
    </div>
  );
};

export default AnimatedCircleImage;
