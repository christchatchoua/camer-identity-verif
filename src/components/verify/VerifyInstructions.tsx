
import React from "react";
import { FileCheck, AlertTriangle } from "lucide-react";

const VerifyInstructions = () => {
  return (
    <div className="bg-gray-50 rounded-lg border border-gray-100 shadow-sm p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6 text-cameroon-red">Verification Guide</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-medium text-lg mb-3">How Verification Works</h3>
          <p className="text-gray-600 text-sm mb-4">
            As a verifier, you can authenticate a holder's identity using their unique Decentralized Identifier (DID) or by scanning their QR code.
          </p>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-sm">1</div>
              <div>
                <h4 className="font-medium">Enter DID or Scan QR Code</h4>
                <p className="text-gray-600 text-sm">
                  Ask the holder for their DID or have them display their QR code for scanning.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-sm">2</div>
              <div>
                <h4 className="font-medium">System Verification</h4>
                <p className="text-gray-600 text-sm">
                  Our system checks the blockchain to verify the authenticity of the identity credentials.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-sm">3</div>
              <div>
                <h4 className="font-medium">View Verification Results</h4>
                <p className="text-gray-600 text-sm">
                  Access the holder's verified information and verification status.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 bg-yellow-50 p-4 rounded-md border border-yellow-100">
          <div className="flex-shrink-0">
            <AlertTriangle className="h-5 w-5 text-yellow-700" />
          </div>
          <div>
            <h3 className="font-medium text-yellow-800 mb-1">Important Notice</h3>
            <p className="text-yellow-700 text-sm">
              Always ensure you have proper authorization to verify someone's identity. Unauthorized identity verification may be subject to legal penalties.
            </p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <FileCheck className="h-5 w-5 text-cameroon-green" />
          </div>
          <div>
            <h3 className="font-medium mb-1">Need a Verifier Account?</h3>
            <p className="text-gray-600 text-sm">
              Organizations requiring regular identity verification should register for a verified organization account. <a href="/contact" className="text-cameroon-green hover:underline">Contact us</a> to set up your organization as a verified verifier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyInstructions;
