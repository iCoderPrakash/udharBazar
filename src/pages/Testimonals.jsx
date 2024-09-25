import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    title: "The complete loan process and technical support",
    description:
      "My personal loan was routed through multiple banks & after checking satisfactorily made me get the loan sanctioned without any hassle.",
    img: "https://via.placeholder.com/100",
    name: "Sunita Agrawal",
    jobTitle: "Sales Manager",
  },
  {
    title: "Best Financial institution with a quick loan process",
    description:
      "Thanks to Loan Bazaar for quick processing for our Home Loan..it was like dream come through, with such good rates & through professional service.",
    img: "https://via.placeholder.com/100",
    name: "Shankar Chauhan",
    jobTitle: "Location Manager",
  },
  {
    title: "Extremely helpful",
    description:
      "Loan Bazaar has been incredibly helpful to our small business by providing a line of various business loans for our continued growth.",
    img: "https://via.placeholder.com/100",
    name: "Shreya Agarwal",
    jobTitle: "Café Owner",
  },
  {
    title: "Best Financial institution with a quick loan process",
    description:
      "Thanks to Loan Bazaar for quick processing for our Home Loan..it was like dream come through, with such good rates & through professional service.",
    img: "https://via.placeholder.com/100",
    name: "Shankar Chauhan",
    jobTitle: "Location Manager",
  },
  {
    title: "Extremely helpful",
    description:
      "Loan Bazaar has been incredibly helpful to our small business by providing a line of various business loans for our continued growth.",
    img: "https://via.placeholder.com/100",
    name: "Shreya Agarwal",
    jobTitle: "Café Owner",
  },
  {
    title: "Best Financial institution with a quick loan process",
    description:
      "Thanks to Loan Bazaar for quick processing for our Home Loan..it was like dream come through, with such good rates & through professional service.",
    img: "https://via.placeholder.com/100",
    name: "Shankar Chauhan",
    jobTitle: "Location Manager",
  },
  {
    title: "Extremely helpful",
    description:
      "Loan Bazaar has been incredibly helpful to our small business by providing a line of various business loans for our continued growth.",
    img: "https://via.placeholder.com/100",
    name: "Shreya Agarwal",
    jobTitle: "Café Owner",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-gradient-to-r from-green-800 to-green-500 py-16">
      <h2 className="text-center text-xl font-bold text-white mb-8 mt-20">
        TESTIMONALS
      </h2>
      <h2 className="text-center text-4xl font-bold text-white mb-12">
        Loved By 1,00,000+ People across India!
      </h2>

      <div className="relative max-w-6xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)`,
              width: `${testimonials.length * 100}%`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-1/3 p-6 bg-white rounded-lg shadow-lg text-center"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {testimonial.title}
                </h3>
                <p className="mb-6 text-gray-600">{testimonial.description}</p>
                <div className="flex justify-center items-center">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="rounded-full w-16 h-16 mr-4"
                  />
                  <div className="text-left">
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.jobTitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots for navigation */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex ? 'bg-green-800' : 'bg-gray-300'
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
