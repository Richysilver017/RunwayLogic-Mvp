import React from 'react';
import { Check } from 'react-feather';

function PricingCard({ title, price, features, ctaText, highlighted = false }) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md relative ${highlighted ? 'border-2 border-pink-500' : ''}`}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-pink-500 px-4 py-1 text-sm font-medium text-white">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold">${price}</span>
        {price !== "Custom" && <span className="text-gray-600">/month</span>}
      </div>
      <ul className="space-y-4 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="text-pink-500" size={20} />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-2 rounded-md ${highlighted ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-800'} hover:opacity-90 transition duration-300`}>
        {ctaText}
      </button>
    </div>
  );
}

function Pricing() {
  const plans = [
    {
      title: "Emerging Brand",
      price: "99",
      features: [
        "Basic AI pricing suggestions",
        "Up to 100 products",
        "Email support",
        "Basic analytics",
        "Seasonal trend insights",
        "Social media integration",
      ],
      ctaText: "Get Started"
    },
    {
      title: "Growing Brand",
      price: "299",
      features: [
        "Advanced AI pricing engine",
        "Unlimited products",
        "Priority support",
        "Advanced analytics",
        "Real-time trend insights",
        "Marketing automation",
        "Multi-brand integration",
      ],
      ctaText: "Get Started",
      highlighted: true
    },
    {
      title: "Fashion House",
      price: "Custom",
      features: [
        "Custom AI models",
        "Dedicated fashion analyst",
        "Custom integrations",
        "Advanced brand protection",
        "Custom reporting",
        "Global market insights",
        "White-label options",
      ],
      ctaText: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Pricing That Scales With Your Brand</h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Choose the perfect plan for your fashion business
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;

