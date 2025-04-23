
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const RegisterSuccess = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 border border-gray-100 text-center">
      <div className="mb-6">
        <div className="h-24 w-24 bg-green-50 rounded-full mx-auto flex items-center justify-center">
          <CheckCircle className="h-14 w-14 text-cameroon-green" />
        </div>
      </div>
      
      <h1 className="text-2xl font-bold mb-4">Registration Successful!</h1>
      
      <p className="text-gray-600 mb-6">
        Your CamerSSI identity registration has been submitted successfully. Our team will verify your information and activate your digital identity.
      </p>
      
      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <h2 className="font-medium text-gray-800 mb-2">What happens next?</h2>
        <ol className="text-left text-gray-600 text-sm space-y-2">
          <li className="flex items-start">
            <span className="flex-shrink-0 h-5 w-5 rounded-full bg-cameroon-green text-white flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
            <span>We'll verify your submitted documents (1-2 business days)</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-5 w-5 rounded-full bg-cameroon-green text-white flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
            <span>You'll receive an email with your DID (Decentralized Identifier)</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-5 w-5 rounded-full bg-cameroon-green text-white flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
            <span>Download the CamerSSI mobile app to manage your identity</span>
          </li>
        </ol>
      </div>
      
      <p className="text-sm text-gray-500 mb-8">
        Reference ID: <span className="font-medium">CSI-2025042301</span><br />
        An email confirmation has been sent to your email address.
      </p>
      
      <div className="space-y-3">
        <Link to="/">
          <Button className="w-full bg-cameroon-green hover:bg-cameroon-green/90">
            Return to Homepage
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant="outline" className="w-full">
            Contact Support
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterSuccess;
