
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-cameroon-green/90 to-cameroon-green rounded-xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Ready to Take Control of Your Digital Identity?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Join thousands of Cameroonians who have already secured their digital future with CamerSSI. Registration is simple, secure, and free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-cameroon-yellow text-gray-800 hover:bg-cameroon-yellow/90">
                    Register Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/verify">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Verify Identity
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-cameroon-yellow/10 ndop-bg"></div>
              <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-cameroon-green to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-10 w-64 h-64 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-20 h-20 bg-cameroon-green rounded-full flex items-center justify-center">
                    <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">Secure</h3>
                  <p className="text-gray-600 text-sm">Blockchain-powered identity verification for Cameroonians</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
