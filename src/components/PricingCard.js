import React from 'react';
import { Check } from 'lucide-react';

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
            <Check className="h-5 w-5 text-pink-500" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-2 rounded-md ${highlighted ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
        {ctaText}
      </button>
    </div>
  );
}

export default PricingCard;

