import React from 'react';
import { BarChart, LineChart, ShoppingBag, Megaphone, AreaChart, Shield } from 'react-feather';

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100 text-pink-500">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: LineChart,
      title: "Smart Trend Analysis",
      description: "AI-powered analysis of fashion trends and market dynamics for optimal pricing strategies"
    },
    {
      icon: BarChart,
      title: "Dynamic Pricing",
      description: "Automatically adjust prices based on seasonality, demand, and competitor monitoring"
    },
    {
      icon: ShoppingBag,
      title: "Collection Launch Optimizer",
      description: "Perfect your launch pricing with AI-driven insights from market data and trends"
    },
    {
      icon: Megaphone,
      title: "Fashion Marketing AI",
      description: "Automate marketing campaigns optimized for fashion audiences and platforms"
    },
    {
      icon: AreaChart,
      title: "Performance Analytics",
      description: "Track your collection performance with detailed analytics and AI-powered insights"
    },
    {
      icon: Shield,
      title: "Brand Protection",
      description: "Monitor and protect your brand with real-time pricing guard-rails and competitor monitoring"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Elevate Your Fashion Brand</h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Everything you need to scale your fashion business with AI
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

