import React from 'react';
import { Shield, Scale, Building, Heart, ArrowRight } from 'lucide-react';
import { practiceAreas } from '../data/practiceAreas';

const iconMap = {
  Shield,
  Scale,
  Building,
  Heart
};

const PracticeAreas: React.FC = () => {
  return (
    <section id="practice-areas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Our Practice Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal services across multiple practice areas, 
            delivering expert counsel and strategic representation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {practiceAreas.map((area) => {
            const IconComponent = iconMap[area.icon as keyof typeof iconMap];
            return (
              <div
                key={area.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8"
              >
                <div className="flex items-start mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-500 rounded-full mr-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-navy-900 mb-3">
                    Services Include:
                  </h4>
                  <ul className="space-y-2">
                    {area.services.map((service, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <ArrowRight className="w-4 h-4 text-gold-500 mr-2" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="text-gold-500 hover:text-gold-600 font-semibold inline-flex items-center transition-colors duration-300">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;