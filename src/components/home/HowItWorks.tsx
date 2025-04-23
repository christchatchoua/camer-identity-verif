
import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Register Your Identity",
      description:
        "Create your digital identity by registering your personal information securely on our platform.",
      color: "bg-cameroon-green"
    },
    {
      number: "02",
      title: "Verify Your Documents",
      description:
        "Upload and verify your identification documents to strengthen your digital identity credentials.",
      color: "bg-cameroon-yellow"
    },
    {
      number: "03",
      title: "Receive Your DID",
      description:
        "Get your Decentralized Identifier (DID) that serves as your unique blockchain-based identity.",
      color: "bg-cameroon-red"
    },
    {
      number: "04",
      title: "Use Your Digital ID",
      description:
        "Use your secure digital identity across various services and platforms with ease.",
      color: "bg-cameroon-green"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">How CamerSSI Works</h2>
          <p className="text-gray-600 text-lg">
            Our simple four-step process makes creating and managing your digital identity easy and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`${step.color} h-2 w-full absolute top-0 left-0 rounded-t-lg`}></div>
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 pt-8 h-full flex flex-col">
                <div className="text-3xl font-bold text-gray-300 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 flex-grow">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 right-0 transform translate-x-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 font-medium mb-2">Want to learn more?</p>
          <a href="/about" className="text-cameroon-green hover:text-cameroon-green/80 font-bold inline-flex items-center">
            Discover how blockchain secures your identity
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
