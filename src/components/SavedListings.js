import React from 'react';
import { Heart } from 'lucide-react';
import ListingCard from './ListingCard';

const SavedListings = ({ listings, likedListings, setActiveTab, toggleLike, onDetails }) => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Your Saved Listings</h2>
        <p className="text-xl text-gray-600">Keep track of your favorite properties</p>
      </div>
      {likedListings.size === 0 ? (
        <div className="text-center py-16">
          <Heart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-500 mb-4">No Saved Listings Yet</h3>
          <p className="text-gray-400 mb-8">Start browsing and save your favorite properties to see them here</p>
          <button 
            onClick={() => setActiveTab('browse')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Browse Listings
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.filter(listing => likedListings.has(listing.id)).map(listing => (
            <ListingCard key={listing.id} listing={listing} likedListings={likedListings} toggleLike={toggleLike} onDetails={() => onDetails(listing.id)} />
          ))}
        </div>
      )}
    </div>
  </div>
);

export default SavedListings;
