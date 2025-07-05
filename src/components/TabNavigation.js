import React from 'react';
import { Search, Camera, Users, Heart } from 'lucide-react';

const TabNavigation = ({ activeTab, setActiveTab }) => (
  <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
    <div className="container mx-auto px-4">
      <nav className="flex space-x-8">
        {[
          { id: 'browse', label: 'Browse Listings', icon: Search },
          { id: 'post', label: 'Post Listing', icon: Camera },
          { id: 'matches', label: 'Find Roommates', icon: Users },
          { id: 'saved', label: 'Saved', icon: Heart }
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center space-x-2 py-4 px-3 border-b-2 font-semibold text-sm transition-all duration-300 ${
              activeTab === id 
                ? 'border-purple-600 text-purple-600 bg-purple-50' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  </div>
);

export default TabNavigation;
