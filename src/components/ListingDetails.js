import React from 'react';
import { MapPin, Star, CheckCircle, Wifi, Shield, Car, ShoppingCart, Phone, Heart } from 'lucide-react';
import SafetyBadge from './SafetyBadge';

const ListingDetails = ({ listing, likedListings, toggleLike, onBack }) => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={onBack}
        className="mb-6 flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        <span>Back to Listings</span>
      </button>
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              src={listing.images[0]} 
              alt={listing.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
            <div className="grid grid-cols-3 gap-4 mt-4">
              {listing.images.slice(1).map((image, idx) => (
                <img 
                  key={idx}
                  src={image} 
                  alt={`${listing.title} - ${idx + 2}`}
                  className="w-full h-24 object-cover rounded-lg shadow-md hover:opacity-75 transition-opacity duration-300 cursor-pointer"
                />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{listing.title}</h1>
              <p className="text-xl text-purple-600 font-semibold">{listing.price}</p>
              <div className="flex items-center space-x-2 mt-2">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">{listing.location}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <SafetyBadge rating={listing.safetyRating} />
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold">{listing.overallRating}</span>
                <span className="text-gray-500">({listing.reviewCount} reviews)</span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Highlights</h2>
              <div className="grid grid-cols-2 gap-4">
                {listing.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Amenities</h2>
              <div className="grid grid-cols-2 gap-4">
                {listing.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    {amenity.includes('WiFi') && <Wifi className="w-5 h-5 text-blue-500" />}
                    {amenity.includes('Security') && <Shield className="w-5 h-5 text-purple-500" />}
                    {amenity.includes('Parking') && <Car className="w-5 h-5 text-gray-500" />}
                    {amenity.includes('Grocery') && <ShoppingCart className="w-5 h-5 text-green-500" />}
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Recent Reviews</h2>
              <div className="space-y-4">
                {listing.recentReviews.map((review, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">{review.student}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{review.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                    <div className="flex space-x-4 mt-2 text-sm">
                      <span className="text-gray-500">Safety: {review.safety}/5</span>
                      <span className="text-gray-500">Facilities: {review.facilities}/5</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Contact Owner</span>
              </button>
              <button 
                onClick={() => toggleLike(listing.id)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 font-semibold flex items-center justify-center space-x-2 ${
                  likedListings.has(listing.id)
                    ? 'bg-red-50 text-red-500 hover:bg-red-100'
                    : 'border-2 border-purple-300 text-purple-600 hover:bg-purple-50'
                }`}
              >
                <Heart className={`w-5 h-5 ${likedListings.has(listing.id) ? 'fill-current' : ''}`} />
                <span>{likedListings.has(listing.id) ? 'Saved' : 'Save'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ListingDetails;
