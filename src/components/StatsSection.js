import React from 'react';
import { Shield, Star, CheckCircle, TrendingUp } from 'lucide-react';

const StatsSection = () => (
  <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { value: "500+", label: "Verified Listings", icon: Shield, color: "from-purple-500 to-pink-500" },
          { value: "1200+", label: "Student Reviews", icon: Star, color: "from-blue-500 to-cyan-500" },
          { value: "4.6", label: "Avg Safety Rating", icon: CheckCircle, color: "from-green-500 to-teal-500" },
          { value: "95%", label: "Satisfaction Rate", icon: TrendingUp, color: "from-orange-500 to-red-500" }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105 border border-white/20">
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default StatsSection;
