
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "CamerSSI has transformed how I access government services. No more long lines or carrying multiple IDs. Everything is secure and in one place.",
      author: "Marie N.",
      role: "Teacher, Douala"
    },
    {
      quote:
        "As a business owner, verifying customer identities is critical. CamerSSI streamlines this process while maintaining the highest security standards.",
      author: "Jean P.",
      role: "Business Owner, Yaoundé"
    },
    {
      quote:
        "The platform is surprisingly easy to use. I was worried about technology barriers, but CamerSSI made digital identity accessible even for someone like me.",
      author: "Emmanuel T.",
      role: "Farmer, Bamenda"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Trusted By Cameroonians
          </h2>
          <p className="text-gray-600 text-lg">
            Hear what our users say about their experience with CamerSSI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100 relative"
            >
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 22C14 15.3726 19.3726 10 26 10C32.6274 10 38 15.3726 38 22C38 28.6274 32.6274 34 26 34C19.3726 34 14 28.6274 14 22Z"
                    fill="#FCD116"
                    fillOpacity="0.2"
                  />
                </svg>
              </div>
              <svg
                className="h-10 w-10 text-cameroon-green mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cameroon-green to-cameroon-green/70"></div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
