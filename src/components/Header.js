import React from 'react';
import { Search, Filter } from 'lucide-react';

const Header = ({ mousePosition, setShowFilters, showFilters, onSignUp, onSignIn }) => (
  <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800 text-white">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 opacity-20">
      <div 
        className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />
      <div 
        className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * -0.02}px)`
        }}
      />
    </div>
    <div className="relative container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div className="text-center flex-1">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
            SafeStay
          </h1>
          <p className="text-2xl opacity-90 mb-2 font-light">Safe, Verified Housing for Women Students</p>
          <p className="text-lg opacity-75 font-light">Real reviews from female students, for female students</p>
        </div>
        <div className="flex flex-col gap-2 md:gap-4 md:flex-row md:items-center ml-4">
          <button
            onClick={onSignUp}
            className="bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-2 rounded-2xl hover:bg-white/30 transition-all duration-300 font-semibold mb-2 md:mb-0"
          >
            Sign Up
          </button>
          <button
            onClick={onSignIn}
            className="bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-2 rounded-2xl hover:bg-white/30 transition-all duration-300 font-semibold"
          >
            Sign In
          </button>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by location, area, or property name..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-800 bg-white/90 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white transition-all duration-300"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-4 rounded-2xl hover:bg-white/30 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold"
          >
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
