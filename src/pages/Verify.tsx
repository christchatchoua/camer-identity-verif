
import React from "react";
import Layout from "@/components/layout/Layout";
import VerifyForm from "@/components/verify/VerifyForm";
import VerifyInstructions from "@/components/verify/VerifyInstructions";

const Verify = () => {
  return (
    <Layout>
      <div className="py-12 md:py-16 bg-gray-50 ndop-bg min-h-screen">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Verify Identity
            </h1>
            <p className="text-gray-600 text-lg">
              Authenticate and verify digital identities on the CamerSSI platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <VerifyForm />
            </div>
            <div>
              <VerifyInstructions />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Verify;
