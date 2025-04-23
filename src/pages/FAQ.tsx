
import React from "react";
import Layout from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const generalFaqs = [
    {
      question: "What is CamerSSI?",
      answer:
        "CamerSSI is a blockchain-based Self-Sovereign Identity platform designed specifically for Cameroonians. It allows individuals to own and control their digital identity without relying on centralized authorities, enhancing privacy, security, and convenience."
    },
    {
      question: "How is CamerSSI different from traditional ID systems?",
      answer:
        "Unlike traditional ID systems where a central authority controls your identity data, CamerSSI puts you in control. Your data is securely stored on a blockchain, can't be accessed without your permission, and is portable across different services and platforms."
    },
    {
      question: "Is CamerSSI recognized by the government?",
      answer:
        "We are actively working with relevant government departments to ensure CamerSSI complies with all national regulations and standards. Our goal is to complement existing identity systems while providing additional security and convenience."
    },
    {
      question: "How secure is my data on CamerSSI?",
      answer:
        "CamerSSI uses advanced blockchain technology and encryption to ensure your data is highly secure. Your information is not stored in a central database but distributed across a blockchain network, making it extremely difficult to hack or compromise."
    },
    {
      question: "Do I need to be tech-savvy to use CamerSSI?",
      answer:
        "Not at all! CamerSSI is designed with user-friendliness in mind. The platform has a simple, intuitive interface that guides you through each step. You don't need any special technical knowledge to create and manage your digital identity."
    }
  ];

  const holderFaqs = [
    {
      question: "How do I register as a Holder on CamerSSI?",
      answer:
        "Registration is simple! Click the 'Register' button, fill out the required personal information, upload your identification documents, and complete the verification process. Once verified, you'll receive your Decentralized Identifier (DID)."
    },
    {
      question: "What documents do I need to register?",
      answer:
        "You'll need a valid national ID card, a recent passport-style photo, and proof of residence. These documents help verify your identity and establish your digital credentials on our platform."
    },
    {
      question: "How long does the verification process take?",
      answer:
        "Typically, the verification process takes 1-2 business days. Once your documents are verified, you'll receive an email notification with your DID and instructions on how to access your digital identity."
    },
    {
      question: "Can I update my information after registration?",
      answer:
        "Yes, you can update certain information in your profile. However, critical identification information may require additional verification if changed."
    },
    {
      question: "What if I lose access to my digital identity?",
      answer:
        "We have a secure recovery process in place. Contact our support team with your registered email and phone number, and after verification, we'll help you regain access to your digital identity."
    }
  ];

  const verifierFaqs = [
    {
      question: "How do organizations become Verifiers?",
      answer:
        "Organizations can register as Verifiers by contacting our business support team. We'll guide you through the verification process, provide necessary API access, and train your team on using the verification tools."
    },
    {
      question: "What can Verifiers see when verifying an identity?",
      answer:
        "Verifiers can see only the information that the Holder has explicitly consented to share. This could include basic identity details, verification status, and other specific credentials relevant to the verification purpose."
    },
    {
      question: "Is there a cost associated with becoming a Verifier?",
      answer:
        "Yes, there are different pricing tiers for organizations based on verification volume and features needed. Contact our business team for a customized quote for your organization."
    },
    {
      question: "Can we integrate CamerSSI verification into our existing systems?",
      answer:
        "Absolutely! We provide APIs and SDKs for seamless integration with your existing applications and workflows. Our technical team can assist with the integration process."
    },
    {
      question: "How does CamerSSI help with regulatory compliance?",
      answer:
        "CamerSSI helps organizations meet KYC (Know Your Customer) and AML (Anti-Money Laundering) requirements by providing verified, tamper-proof identity credentials. Our system maintains detailed audit logs for compliance reporting."
    }
  ];

  const technicalFaqs = [
    {
      question: "Which blockchain technology does CamerSSI use?",
      answer:
        "CamerSSI is built on a permissioned blockchain that prioritizes security, scalability, and energy efficiency, optimized for identity management use cases."
    },
    {
      question: "How does CamerSSI protect user privacy?",
      answer:
        "We employ zero-knowledge proofs and selective disclosure techniques, allowing users to prove specific attributes about themselves without revealing all their personal information."
    },
    {
      question: "What happens if the internet is unavailable?",
      answer:
        "CamerSSI includes offline capabilities. Once your identity is established, basic verification can still occur without an active internet connection using our mobile application."
    },
    {
      question: "Can CamerSSI work with other identity systems?",
      answer:
        "Yes, CamerSSI is designed to be interoperable with other identity systems and follows W3C standards for Decentralized Identifiers (DIDs) and Verifiable Credentials."
    }
  ];

  return (
    <Layout>
      <div className="py-12 bg-gray-50 ndop-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-4xl font-display font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about CamerSSI and blockchain-based identity.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">General Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {generalFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`general-${index}`} className="border border-gray-200 rounded-md mb-4 bg-white shadow-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">For Identity Holders</h2>
              <Accordion type="single" collapsible className="w-full">
                {holderFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`holder-${index}`} className="border border-gray-200 rounded-md mb-4 bg-white shadow-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">For Verifiers</h2>
              <Accordion type="single" collapsible className="w-full">
                {verifierFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`verifier-${index}`} className="border border-gray-200 rounded-md mb-4 bg-white shadow-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Technical Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {technicalFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`technical-${index}`} className="border border-gray-200 rounded-md mb-4 bg-white shadow-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="bg-cameroon-green/5 p-8 rounded-lg border border-cameroon-green/20 mb-12">
              <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6">
                Our team is here to help. Contact us with any questions or concerns you may have about CamerSSI.
              </p>
              <Link to="/contact">
                <Button className="bg-cameroon-green hover:bg-cameroon-green/90">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
