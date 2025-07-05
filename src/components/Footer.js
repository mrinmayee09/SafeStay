import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-12 mt-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            SafeStay
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Empowering female students to find safe, verified accommodation with real reviews from fellow students.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors duration-300">Browse Listings</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Post Property</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Find Roommates</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Safety Guidelines</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg">Support</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors duration-300">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Report Issue</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg">Connect</h4>
          <div className="flex space-x-4 mb-4">
            <button className="bg-purple-600 p-3 rounded-xl hover:bg-purple-700 transition-colors duration-300">
              <Phone className="w-5 h-5" />
            </button>
            <button className="bg-pink-600 p-3 rounded-xl hover:bg-pink-700 transition-colors duration-300">
              <Mail className="w-5 h-5" />
            </button>
            <button className="bg-blue-600 p-3 rounded-xl hover:bg-blue-700 transition-colors duration-300">
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            24/7 Support Available
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-gray-400">
          © 2024 SafeStay. All rights reserved. Made with ❤️ for student safety.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
