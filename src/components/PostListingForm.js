import React from 'react';
import { Camera } from 'lucide-react';

const PostListingForm = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Post Your Listing</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Property Title</label>
            <input type="text" className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300" placeholder="e.g., Cozy 2BHK near campus" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Location</label>
              <input type="text" className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300" placeholder="e.g., Sector 15, Gurgaon" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Monthly Rent</label>
              <input type="text" className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300" placeholder="e.g., ₹12,000" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Property Description</label>
            <textarea rows="4" className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300" placeholder="Describe your property, amenities, and any special features..."></textarea>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Upload Photos</label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-500 transition-all duration-300 bg-white/30 backdrop-blur-sm">
              <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">Click to upload photos or drag and drop</p>
              <p className="text-sm text-gray-500 mt-2">PNG, JPG up to 10MB</p>
            </div>
          </div>
          <div className="flex justify-end space-x-4 pt-6">
            <button className="px-8 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold">
              Save as Draft
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
              Post Listing
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PostListingForm;
