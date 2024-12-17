import React from 'react';

function Hero() {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg?height=600&width=1200"
          alt="Fashion store interior"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          AI-Powered Pricing for <span className="text-pink-500">Fashion Brands</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          Scale your fashion brand with intelligent pricing and marketing automation.
          Stay ahead of trends and maximize revenue with our AI-driven platform.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
            Start Free Trial
          </button>
          <button className="bg-transparent hover:bg-white hover:text-pink-500 text-white font-bold py-2 px-6 rounded-full border border-white transition duration-300">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

