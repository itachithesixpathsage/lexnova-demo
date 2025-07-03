import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">LexNova Legal</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Providing exceptional legal representation with integrity, 
              expertise, and unwavering dedication to our clients' success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">Home</a></li>
              <li><a href="#practice-areas" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">Practice Areas</a></li>
              <li><a href="#attorneys" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">Attorneys</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">About</a></li>
              <li><a href="#news" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">News</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">Criminal Defense</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">Civil Litigation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">Corporate Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">Family Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">Personal Injury</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">Employment Law</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gold-500 mr-3 mt-1" />
                <div>
                  <p className="text-gray-300">1234 Legal Plaza</p>
                  <p className="text-gray-300">Los Angeles, CA 90210</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gold-500 mr-3" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gold-500 mr-3" />
                <a href="mailto:info@lexnovalegal.com" className="text-gray-300 hover:text-gold-500 transition-colors duration-300">
                  info@lexnovalegal.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 LexNova Legal. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">Attorney Advertising</a>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            <p>
              <strong>Legal Disclaimer:</strong> The information on this website is for general information purposes only. 
              Nothing on this site should be taken as legal advice for any individual case or situation. 
              This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;