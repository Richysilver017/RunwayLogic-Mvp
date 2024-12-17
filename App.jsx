import React from 'react';
import FeatureCard from './components/FeatureCard';
import PricingCard from './components/PricingCard';
import { BarChart3, LineChart, ShoppingBag, Megaphone, AreaChart, Shield } from 'lucide-react';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Fashion store interior"
            className="h-full w-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            AI-Powered Pricing for
            <span className="text-pink-500"> Fashion Brands</span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-200">
            Scale your fashion brand with intelligent pricing and marketing automation.
            Stay ahead of trends and maximize revenue with our AI-driven platform.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">
              Start Free Trial
            </button>
            <button className="px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-pink-500">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Elevate Your Fashion Brand</h2>
          <p className="mb-16 text-center text-gray-600">
            Everything you need to scale your fashion business with AI
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<LineChart className="h-6 w-6" />}
              title="Smart Trend Analysis"
              description="AI-powered analysis of fashion trends and market dynamics for optimal pricing strategies"
            />
            <FeatureCard
              icon={<BarChart3 className="h-6 w-6" />}
              title="Dynamic Pricing"
              description="Automatically adjust prices based on seasonality, demand, and competitor monitoring"
            />
            <FeatureCard
              icon={<ShoppingBag className="h-6 w-6" />}
              title="Collection Launch Optimizer"
              description="Perfect your launch pricing with AI-driven insights from market data and trends"
            />
            <FeatureCard
              icon={<Megaphone className="h-6 w-6" />}
              title="Fashion Marketing AI"
              description="Automate marketing campaigns optimized for fashion audiences and platforms"
            />
            <FeatureCard
              icon={<AreaChart className="h-6 w-6" />}
              title="Performance Analytics"
              description="Track your collection performance with detailed analytics and AI-powered insights"
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Brand Protection"
              description="Monitor and protect your brand with real-time pricing guard-rails and competitor monitoring"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Pricing That Scales With Your Brand</h2>
          <p className="mb-16 text-center text-gray-600">
            Choose the perfect plan for your fashion business
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <PricingCard
              title="Emerging Brand"
              price="99"
              features={[
                "Basic AI pricing suggestions",
                "Up to 100 products",
                "Email support",
                "Basic analytics",
                "Seasonal trend insights",
                "Social media integration",
              ]}
              ctaText="Get Started"
            />
            <PricingCard
              title="Growing Brand"
              price="299"
              features={[
                "Advanced AI pricing engine",
                "Unlimited products",
                "Priority support",
                "Advanced analytics",
                "Real-time trend insights",
                "Marketing automation",
                "Multi-brand integration",
              ]}
              ctaText="Get Started"
              highlighted
            />
            <PricingCard
              title="Fashion House"
              price="Custom"
              features={[
                "Custom AI models",
                "Dedicated fashion analyst",
                "Custom integrations",
                "Advanced brand protection",
                "Custom reporting",
                "Global market insights",
                "White-label options",
              ]}
              ctaText="Contact Sales"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-12">
        <div className="container mx-auto px-4 grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 font-semibold">PLATFORM</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">RESOURCES</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#">Success Stories</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">COMPANY</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-gray-600">© 2024 SmartPriceMarket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

