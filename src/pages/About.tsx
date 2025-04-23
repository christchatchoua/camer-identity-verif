
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <div className="py-12 bg-gray-50 ndop-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-4xl font-display font-bold mb-6">About Self-Sovereign Identity</h1>
            <p className="text-xl text-gray-600">
              Understanding the technology that empowers Cameroonians with control over their digital identity.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">What is Self-Sovereign Identity?</h2>
              <p className="text-gray-600 mb-6">
                Self-Sovereign Identity (SSI) is a digital identity model where individuals own and control their personal data without relying on any central authority. With SSI, you—not corporations or governments—have complete control over your digital identity.
              </p>
              <p className="text-gray-600">
                The CamerSSI platform leverages blockchain technology to create immutable, secure, and private digital identities for Cameroonians. Your data remains yours, shared only with your explicit consent.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="aspect-video bg-gray-100 rounded-md mb-4"></div>
              <h3 className="font-bold mb-2">Key Benefits of SSI</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-cameroon-green flex items-center justify-center text-white text-sm mr-2 mt-0.5">✓</div>
                  <span className="text-gray-700">Full ownership and control of personal data</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-cameroon-green flex items-center justify-center text-white text-sm mr-2 mt-0.5">✓</div>
                  <span className="text-gray-700">Enhanced privacy and security through encryption</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-cameroon-green flex items-center justify-center text-white text-sm mr-2 mt-0.5">✓</div>
                  <span className="text-gray-700">Reduced risk of identity theft and fraud</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-cameroon-green flex items-center justify-center text-white text-sm mr-2 mt-0.5">✓</div>
                  <span className="text-gray-700">Portable identity across different services</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">How Blockchain Secures Your Identity</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 bg-cameroon-green/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-cameroon-green font-bold">1</span>
                </div>
                <h3 className="font-bold mb-2">Decentralization</h3>
                <p className="text-gray-600 text-sm">
                  Your identity isn't stored in one central database that can be hacked. Instead, it's distributed across a network of computers.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 bg-cameroon-green/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-cameroon-green font-bold">2</span>
                </div>
                <h3 className="font-bold mb-2">Cryptographic Security</h3>
                <p className="text-gray-600 text-sm">
                  Advanced encryption techniques protect your data, allowing only authorized parties with the right keys to access it.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 bg-cameroon-green/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-cameroon-green font-bold">3</span>
                </div>
                <h3 className="font-bold mb-2">Immutability</h3>
                <p className="text-gray-600 text-sm">
                  Once recorded, your identity credentials cannot be altered or deleted, ensuring data integrity and preventing unauthorized changes.
                </p>
              </div>
            </div>

            <div className="bg-cameroon-green/5 p-8 rounded-lg border border-cameroon-green/20 mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">SSI for Cameroon's Digital Future</h3>
              <p className="text-gray-700 mb-6">
                In Cameroon, where digital infrastructure is rapidly growing, SSI provides a secure foundation for digital transactions, government services, and financial inclusion. CamerSSI is designed specifically for Cameroonians, taking into account our unique needs and challenges.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">For Individuals</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Secure, portable digital identity</li>
                    <li>• Reduced paperwork for government services</li>
                    <li>• Access to financial services without traditional documentation</li>
                    <li>• Protection against identity theft</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">For Organizations</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Reliable identity verification</li>
                    <li>• Reduced KYC costs</li>
                    <li>• Improved customer experience</li>
                    <li>• Compliance with data protection regulations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-display font-bold mb-6">Ready to Take Control of Your Digital Identity?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button size="lg" className="bg-cameroon-green hover:bg-cameroon-green/90">
                    Register as a Holder
                  </Button>
                </Link>
                <Link to="/verify">
                  <Button size="lg" variant="outline" className="border-cameroon-green text-cameroon-green hover:bg-cameroon-green hover:text-white">
                    Verify an Identity
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
