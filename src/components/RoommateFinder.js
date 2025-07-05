import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';

const RoommateFinder = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Find Your Perfect Roommate</h2>
        <p className="text-xl text-gray-600">Connect with fellow female students looking for accommodation</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: "Priya Sharma", course: "Computer Science", year: "3rd Year", budget: "₹8k-12k", interests: ["Reading", "Yoga", "Cooking"], cleanliness: "Very Clean", studyHabits: "Night Owl" },
          { name: "Ananya Gupta", course: "Mechanical Engineering", year: "2nd Year", budget: "₹10k-15k", interests: ["Music", "Travel", "Fitness"], cleanliness: "Clean", studyHabits: "Early Bird" },
          { name: "Meera Patel", course: "Electronics", year: "4th Year", budget: "₹12k-18k", interests: ["Photography", "Art", "Movies"], cleanliness: "Moderate", studyHabits: "Flexible" }
        ].map((roommate, idx) => (
          <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 border border-white/20 group hover:scale-105">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {roommate.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-800">{roommate.name}</h3>
                <p className="text-purple-600 font-medium">{roommate.course}</p>
                <p className="text-gray-500 text-sm">{roommate.year}</p>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 font-medium">Budget:</span>
                <span className="text-sm font-bold text-gray-800">{roommate.budget}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 font-medium">Cleanliness:</span>
                <span className="text-sm font-bold text-gray-800">{roommate.cleanliness}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 font-medium">Study Habits:</span>
                <span className="text-sm font-bold text-gray-800">{roommate.studyHabits}</span>
              </div>
              <div className="pt-2">
                <span className="text-sm text-gray-600 font-medium">Interests:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {roommate.interests.map((interest, i) => (
                    <span key={i} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-xs px-3 py-1 rounded-full font-medium">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                <MessageCircle className="w-4 h-4" />
                <span>Connect</span>
              </button>
              <button className="border-2 border-purple-300 text-purple-600 py-3 px-4 rounded-xl hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold">
                <Heart className="w-4 h-4" />
                <span>Save</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default RoommateFinder;
