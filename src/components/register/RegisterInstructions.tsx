
import React from "react";
import { Shield, UserCheck, Check } from "lucide-react";

const RegisterInstructions = () => {
  return (
    <div className="p-6 md:p-8 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-cameroon-green">Registration Guide</h2>
      
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cameroon-green/10 flex items-center justify-center">
            <Shield className="h-6 w-6 text-cameroon-green" />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Secure Process</h3>
            <p className="text-gray-600 text-sm">
              Your information is encrypted and securely stored on the blockchain. We use advanced technology to protect your data.
            </p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cameroon-green/10 flex items-center justify-center">
            <UserCheck className="h-6 w-6 text-cameroon-green" />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Verification Process</h3>
            <p className="text-gray-600 text-sm">
              After submission, our team will verify your documents and create your digital identity. This usually takes 24-48 hours.
            </p>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="font-medium mb-3 flex items-center text-cameroon-green">
            <Check className="inline-block h-5 w-5 mr-2" /> Required Documents
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
            <li>Valid National ID card (front and back)</li>
            <li>Recent passport-style photo</li>
            <li>Active mobile phone number</li>
            <li>Valid email address</li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-md border border-yellow-100 mt-6">
          <h3 className="font-medium text-yellow-800 mb-1">Important Note</h3>
          <p className="text-yellow-700 text-sm">
            Make sure all information provided matches your official documents. Any discrepancies may delay your verification process.
          </p>
        </div>
        
        <div className="text-gray-600 text-sm mt-4">
          Need help? Contact our support team at <a href="mailto:support@camerssi.cm" className="text-cameroon-green hover:underline">support@camerssi.cm</a> or call <span className="font-medium">+237 123 456 789</span>.
        </div>
      </div>
    </div>
  );
};

export default RegisterInstructions;
