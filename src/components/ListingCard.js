import React from 'react';
import { Sparkles, Heart, MapPin, Star } from 'lucide-react';
import SafetyBadge from './SafetyBadge';

const ListingCard = ({ listing, likedListings, toggleLike, onDetails }) => (
  <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 hover:border-purple-200/50 transform hover:-translate-y-1">
    {listing.featured && (
      <div className="absolute top-2 left-2 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
        <Sparkles className="w-3 h-3" />
        <span>Featured</span>
      </div>
    )}
    <div className="relative overflow-hidden">
      <img 
        src={listing.images[0]} 
        alt={listing.title}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <button 
        onClick={() => toggleLike(listing.id)}
        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <Heart 
          className={`w-4 h-4 transition-colors duration-300 ${
            likedListings.has(listing.id) 
              ? 'text-red-500 fill-current' 
              : 'text-gray-400 hover:text-red-400'
          }`} 
        />
      </button>
      <div className="absolute bottom-4 left-4">
        <SafetyBadge rating={listing.safetyRating} />
      </div>
    </div>
    <div className="p-5">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-lg text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
          {listing.title}
        </h3>
        <span className="text-purple-600 font-bold text-lg bg-purple-50 px-2 py-1 rounded-lg">
          {listing.price}
        </span>
      </div>
      <div className="flex items-center text-gray-600 mb-3">
        <MapPin className="w-4 h-4 mr-2 text-purple-400" />
        <span className="text-sm">{listing.location}</span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
            <span className="text-sm text-gray-600 font-medium">{listing.overallRating}</span>
          </div>
          <span className="text-xs text-gray-500">({listing.reviewCount} reviews)</span>
        </div>
        {listing.verifiedStudent && (
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs px-3 py-1 rounded-full font-medium">
            Verified Student
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {listing.highlights.slice(0, 3).map((highlight, idx) => (
          <span key={idx} className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">
            {highlight}
          </span>
        ))}
      </div>
      <div className="border-t border-gray-100 pt-4">
        <p className="text-sm text-gray-600 mb-2 font-medium">Latest Review:</p>
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-3 border border-gray-200/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-700">{listing.recentReviews[0].student}</span>
            <div className="flex items-center">
              <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
              <span className="text-xs text-gray-600 font-medium">{listing.recentReviews[0].rating}</span>
            </div>
          </div>
          <p className="text-xs text-gray-600 italic leading-relaxed">"{listing.recentReviews[0].comment}"</p>
        </div>
      </div>
      <div className="flex space-x-3 mt-5">
        <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2.5 px-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
          Contact
        </button>
        <button 
          onClick={onDetails}
          className="flex-1 border-2 border-purple-300 text-purple-600 py-2.5 px-4 rounded-xl hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 font-semibold"
        >
          Details
        </button>
      </div>
    </div>
  </div>
);

export default ListingCard;
