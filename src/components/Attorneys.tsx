import React from 'react';
import { Mail, Phone, Award } from 'lucide-react';
import { attorneys } from '../data/attorneys';

const Attorneys: React.FC = () => {
  return (
    <section id="attorneys" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Meet Our Attorneys
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of experienced legal professionals brings decades of expertise 
            and a proven track record of success to every case.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {attorneys.map((attorney) => (
            <div
              key={attorney.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center mb-4">
                    <Award className="w-6 h-6 text-gold-500 mr-2" />
                    <h3 className="text-2xl font-bold text-navy-900">
                      {attorney.name}
                    </h3>
                  </div>
                  <p className="text-lg text-gold-600 font-medium mb-4">
                    {attorney.title}
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {attorney.bio}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-navy-900 mb-2">
                      Areas of Expertise:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {attorney.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href={`mailto:${attorney.email}`}
                      className="inline-flex items-center justify-center bg-navy-900 hover:bg-navy-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </a>
                    <a
                      href={`tel:${attorney.phone}`}
                      className="inline-flex items-center justify-center border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attorneys;