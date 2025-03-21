"use client";



export default function Hero() {
  return (
    <section className="w-full bg-[#0B3D02] text-white">
      {/* Video Banner */}
      <div className="relative w-full h-80 md:h-[500px] overflow-hidden">
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Subtle Overlay Box Behind Text */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="relative z-10 bg-black/40 px-6 py-4 rounded-md">
            <h1 className="text-3xl md:text-6xl font-bold leading-tight">
              Your Sustainable, Statewide, Governmental <br />
              <span className="text-yellow-400">ENERGY AGGREGATOR</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Hero Content Below Video */}
      <div className="container mx-auto text-center px-6 py-12">
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          SOPEC is a council of governments that functions as a shared energy office dedicated to providing
          innovative and sustainable energy solutions in Ohio.
        </p>


       
      </div>
    </section>
  );
}
