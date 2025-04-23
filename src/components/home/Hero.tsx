
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full relative">
              <div className="absolute -left-2 top-4 h-16 w-4 bg-cameroon-green"></div>
              <div className="absolute -right-2 top-4 h-16 w-4 bg-cameroon-red"></div>
              <div className="absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-cameroon-yellow"></div>
              <div className="bg-gray-50 p-6 rounded-md border">
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 rounded-full bg-gray-200"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded-md w-3/4 mx-auto"></div>
                  <div className="h-3 bg-gray-200 rounded-md w-1/2 mx-auto"></div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="h-8 bg-gray-200 rounded-md"></div>
                    <div className="h-8 bg-gray-200 rounded-md"></div>
                  </div>
                  <div className="h-6 bg-cameroon-green rounded-md w-full mt-4"></div>
                </div>
                <div className="flex justify-between mt-6">
                  <div className="flex gap-2 items-center">
                    <div className="w-6 h-6 rounded-full bg-cameroon-green"></div>
                    <div className="h-2 w-14 bg-gray-200 rounded-md"></div>
                  </div>
                  <div className="w-16 h-16 bg-gray-200 rounded-md"></div>
                </div>
              </div>
              <div className="text-xs text-center mt-2 text-gray-600">Secure Digital ID</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-6 bg-cameroon-yellow"></div>
      </div>
    </section>
  );
};

export default Hero;
