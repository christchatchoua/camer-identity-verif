
import React from "react";
import Layout from "@/components/layout/Layout";
import RegisterSuccess from "@/components/register/RegisterSuccess";

const RegisterSuccessPage = () => {
  return (
    <Layout>
      <div className="py-16 md:py-24 bg-gray-50 ndop-bg min-h-screen">
        <div className="container mx-auto px-6">
          <RegisterSuccess />
        </div>
      </div>
    </Layout>
  );
};

export default RegisterSuccessPage;
