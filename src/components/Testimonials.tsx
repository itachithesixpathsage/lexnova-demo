import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the clients we've helped 
            achieve successful outcomes in their legal matters.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <Quote className="w-16 h-16 text-gold-500" />
            </div>
            
            <div className="flex justify-center mb-4">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-gold-500 fill-current" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-700 font-medium mb-8 leading-relaxed">
              "{currentTestimonial.content}"
            </blockquote>

            <div className="flex items-center justify-center">
              {currentTestimonial.image && (
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
              )}
              <div className="text-left">
                <div className="text-lg font-bold text-navy-900">
                  {currentTestimonial.name}
                </div>
                <div className="text-gray-600">
                  {currentTestimonial.title}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-gold-500 hover:bg-gold-600 text-white p-3 rounded-full transition-colors duration-300 hidden md:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-gold-500 hover:bg-gold-600 text-white p-3 rounded-full transition-colors duration-300 hidden md:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Mobile Navigation */}
          <div className="flex justify-center mt-8 md:hidden">
            <button
              onClick={prevTestimonial}
              className="bg-gold-500 hover:bg-gold-600 text-white p-3 rounded-full mr-4 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-gold-500 hover:bg-gold-600 text-white p-3 rounded-full transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-gold-500' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;