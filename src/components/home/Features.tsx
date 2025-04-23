
import React from "react";
import { Shield, Lock, User, CreditCard } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <User className="h-10 w-10 text-cameroon-green" />,
      title: "Self-Sovereign Identity",
      description:
        "You own and control your identity. No central authority can revoke or control your personal data."
    },
    {
      icon: <Shield className="h-10 w-10 text-cameroon-green" />,
      title: "Blockchain Security",
      description:
        "Your identity is secured by blockchain technology, providing immutability and cryptographic security."
    },
    {
      icon: <Lock className="h-10 w-10 text-cameroon-green" />,
      title: "Privacy Preserving",
      description:
        "Share only what you want. Selective disclosure allows you to reveal only necessary information."
    },
    {
      icon: <CreditCard className="h-10 w-10 text-cameroon-green" />,
      title: "Universal Access",
      description:
        "Access services across government, financial, and business sectors with one secure identity."
    }
  ];

  return (
    <section className="py-16 md:py-24 ndop-bg">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Why Choose <span className="text-cameroon-green">Camer</span>
            <span className="text-cameroon-red">SSI</span>?
          </h2>
          <p className="text-gray-600 text-lg">
            Our blockchain-based identity platform gives you security, privacy, and control over your digital identity in Cameroon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 p-3 bg-gray-50 inline-block rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
