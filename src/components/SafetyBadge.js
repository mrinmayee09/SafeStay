import React from 'react';
import { CheckCircle, Shield, AlertTriangle } from 'lucide-react';

const SafetyBadge = ({ rating }) => {
  const getColor = (rating) => {
    if (rating >= 4.5) return 'from-emerald-400 to-teal-500 text-white';
    if (rating >= 4.0) return 'from-amber-400 to-orange-500 text-white';
    return 'from-red-400 to-pink-500 text-white';
  };
  const getIcon = (rating) => {
    if (rating >= 4.5) return <CheckCircle className="w-3 h-3" />;
    if (rating >= 4.0) return <Shield className="w-3 h-3" />;
    return <AlertTriangle className="w-3 h-3" />;
  };
  return (
    <div className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${getColor(rating)} backdrop-blur-sm shadow-lg`}>
      {getIcon(rating)}
      <span>Safety {rating}</span>
    </div>
  );
};

export default SafetyBadge;
