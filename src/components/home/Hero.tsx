
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Fingerprint, QrCode } from "lucide-react";

const Hero = () => {
  return (
    <section className="cameroon-hero relative py-20 md:py-32 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Own Your Identity In The Digital Age
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              CamerSSI provides a secure, blockchain-based digital identity for all Cameroonians. 
              Take control of your personal data while ensuring privacy and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/register">
                <Button size="lg" className="bg-cameroon-yellow text-gray-800 hover:bg-cameroon-yellow/90 font-medium px-6">
                  Register Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 shadow-2xl max-w-md w-full relative transform rotate-3 hover:rotate-0 transition-transform duration-300">
              {/* Flag decorative elements */}
              <div className="absolute -left-2 top-4 h-16 w-4 bg-cameroon-green rounded-l"></div>
              <div className="absolute -right-2 top-4 h-16 w-4 bg-cameroon-red rounded-r"></div>
              <div className="absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-cameroon-yellow rounded-t"></div>
              
              {/* Card Header */}
              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-2 text-gray-800 font-bold text-lg">
                  <Shield className="h-6 w-6 text-cameroon-green" />
                  CamerSSI ID
                </div>
                <p className="text-xs text-gray-600">République du Cameroun</p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-md border-2 border-gray-200">
                {/* Photo and basic info */}
                <div className="flex gap-4 mb-4">
                  <div className="w-20 h-24 rounded bg-gradient-to-br from-cameroon-green/20 to-cameroon-red/20 flex items-center justify-center border-2 border-gray-300">
                    <div className="w-16 h-20 rounded bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                      <div className="w-12 h-16 rounded bg-gray-200 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-gray-400 mb-2"></div>
                        <div className="w-6 h-6 rounded bg-gray-400"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-gray-800 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-600 rounded w-1/2"></div>
                    <div className="h-2 bg-gray-500 rounded w-2/3"></div>
                    <div className="text-xs text-gray-500 mt-2">ID: CMR-2024-***</div>
                  </div>
                </div>

                {/* Digital features */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-white p-2 rounded border text-center">
                    <Fingerprint className="h-4 w-4 mx-auto text-cameroon-green mb-1" />
                    <div className="text-xs text-gray-600">Biometric</div>
                  </div>
                  <div className="bg-white p-2 rounded border text-center">
                    <Shield className="h-4 w-4 mx-auto text-cameroon-red mb-1" />
                    <div className="text-xs text-gray-600">Verified</div>
                  </div>
                  <div className="bg-white p-2 rounded border text-center">
                    <QrCode className="h-4 w-4 mx-auto text-gray-700 mb-1" />
                    <div className="text-xs text-gray-600">QR Code</div>
                  </div>
                </div>

                {/* Blockchain indicator */}
                <div className="bg-cameroon-green text-white px-3 py-2 rounded-md text-center text-sm font-medium">
                  🔗 Blockchain Secured
                </div>

                {/* Bottom verification */}
                <div className="flex justify-between items-center mt-4 pt-2 border-t border-gray-300">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-cameroon-green flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-600">Valid Until 2029</div>
                  </div>
                  <div className="w-12 h-12 bg-gray-300 rounded flex items-center justify-center">
                    <QrCode className="h-8 w-8 text-gray-600" />
                  </div>
                </div>
              </div>
              <div className="text-xs text-center mt-3 text-gray-600 font-medium">
                Secure • Private • Decentralized
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-6 bg-cameroon-yellow"></div>
      </div>
    </section>
  );
};

export default Hero;
