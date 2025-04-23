
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "What is Self-Sovereign Identity (SSI)?",
      answer:
        "Self-Sovereign Identity (SSI) is a digital identity model where individuals own and control their personal data. With CamerSSI, your identity is stored on the blockchain, giving you complete authority over who accesses your information and when."
    },
    {
      question: "How secure is CamerSSI?",
      answer:
        "CamerSSI uses advanced blockchain technology to ensure your data is secure and tamper-proof. All personal information is encrypted and can only be accessed with your explicit permission through secure verification methods."
    },
    {
      question: "What documents do I need to register?",
      answer:
        "To register, you'll need your national ID card, a recent passport-style photo, and proof of residence. Additional documents may be required depending on the level of verification you seek."
    },
    {
      question: "Can businesses and organizations use CamerSSI?",
      answer:
        "Yes! Businesses and organizations can register as Verifiers to authenticate identities. This streamlines customer onboarding, KYC processes, and service delivery while reducing fraud and improving security."
    },
    {
      question: "Is CamerSSI recognized by the Cameroonian government?",
      answer:
        "We are working closely with relevant government departments to ensure CamerSSI complies with all national regulations and standards. Our goal is to complement existing identity systems while providing additional security and convenience."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to the most common questions about CamerSSI and blockchain-based identity.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-md mb-4 bg-white shadow-sm">
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

        <div className="text-center mt-12">
          <p className="text-gray-700">
            Still have questions?{" "}
            <a
              href="/contact"
              className="text-cameroon-green hover:text-cameroon-green/80 font-medium"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
