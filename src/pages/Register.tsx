
import React from "react";
import Layout from "@/components/layout/Layout";
import RegisterForm from "@/components/register/RegisterForm";
import RegisterInstructions from "@/components/register/RegisterInstructions";

const Register = () => {
  return (
    <Layout>
      <div className="py-12 md:py-16 bg-gray-50 ndop-bg min-h-screen">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Register Your Digital Identity
            </h1>
            <p className="text-gray-600 text-lg">
              Join CamerSSI to create your secure, blockchain-based digital identity. Take control of your personal data.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <RegisterForm />
            </div>
            <div>
              <RegisterInstructions />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
