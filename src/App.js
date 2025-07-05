import React, { useState, useEffect } from 'react';
import { Search, Filter, Star, MapPin, Shield, Users, Wifi, Car, ShoppingCart, Heart, MessageCircle, Camera, Phone, Mail, Clock, CheckCircle, AlertTriangle, Sparkles, TrendingUp } from 'lucide-react';

const SafeStayApp = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [selectedFilters, setSelectedFilters] = useState({
    budget: '',
    location: '',
    roomType: '',
    safetyRating: 0
  });
  const [likedListings, setLikedListings] = useState(new Set());
  const [showFilters, setShowFilters] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse for subtle parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Mock data for listings
  const listings = [
    {
      id: 1,
      title: "Cozy 2BHK Near Campus",
      location: "Sector 15, Gurgaon",
      price: "₹12,000/month",
      images: ["https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=600&h=400&fit=crop"],
      safetyRating: 4.5,
      overallRating: 4.2,
      roomType: "2BHK",
      amenities: ["WiFi", "Security", "Parking", "Grocery Nearby"],
      landlordRating: 4.0,
      reviewCount: 23,
      verifiedStudent: true,
      featured: true,
      recentReviews: [
        { student: "Priya K.", rating: 5, comment: "Super safe area, well-lit streets. Landlord is very respectful and responsive!", safety: 5, facilities: 4 },
        { student: "Ananya M.", rating: 4, comment: "Great location, close to everything. Only issue is occasional water problem.", safety: 4, facilities: 3 }
      ],
      highlights: ["24/7 Security", "Women-only Building", "CCTV Coverage"]
    },
    {
      id: 2,
      title: "Single Room in Shared Apartment",
      location: "DLF Phase 2, Gurgaon",
      price: "₹8,500/month",
      images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop"],
      safetyRating: 4.8,
      overallRating: 4.0,
      roomType: "1RK",
      amenities: ["WiFi", "Laundry", "Kitchen Access"],
      landlordRating: 4.5,
      reviewCount: 15,
      verifiedStudent: true,
      featured: false,
      recentReviews: [
        { student: "Meera S.", rating: 5, comment: "Felt completely safe walking alone at night. Great roommates!", safety: 5, facilities: 4 }
      ],
      highlights: ["Female Flatmates Only", "Well-lit Surroundings", "Metro Station 5min"]
    },
    {
      id: 3,
      title: "Spacious 3BHK for Sharing",
      location: "Cyber City, Gurgaon",
      price: "₹15,000/month",
      images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop"],
      safetyRating: 3.8,
      overallRating: 4.1,
      roomType: "3BHK",
      amenities: ["WiFi", "Gym", "Swimming Pool", "Security"],
      landlordRating: 3.5,
      reviewCount: 31,
      verifiedStudent: true,
      featured: true,
      recentReviews: [
        { student: "Kavya R.", rating: 4, comment: "Good facilities but area can be a bit isolated at night.", safety: 3, facilities: 5 }
      ],
      highlights: ["Premium Amenities", "Gated Community", "24/7 Power Backup"]
    }
  ];

  const toggleLike = (listingId) => {
    const newLiked = new Set(likedListings);
    if (newLiked.has(listingId)) {
      newLiked.delete(listingId);
    } else {
      newLiked.add(listingId);
    }
    setLikedListings(newLiked);
  };

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

  const ListingCard = ({ listing }) => (
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
          <button className="flex-1 border-2 border-purple-300 text-purple-600 py-2.5 px-4 rounded-xl hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 font-semibold">
            Details
          </button>
        </div>
      </div>
    </div>
  );

  const FilterPanel = () => (
    <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8 border border-white/20 ${showFilters ? 'block' : 'hidden lg:block'}`}>
      <h3 className="font-bold text-xl mb-6 text-gray-800">Filters</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Budget Range</label>
          <select className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300">
            <option value="">Any Budget</option>
            <option value="under-10k">Under ₹10k</option>
            <option value="10k-15k">₹10k - ₹15k</option>
            <option value="15k-20k">₹15k - ₹20k</option>
            <option value="above-20k">Above ₹20k</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Location</label>
          <select className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300">
            <option value="">Any Location</option>
            <option value="sector-15">Sector 15</option>
            <option value="dlf-phase-2">DLF Phase 2</option>
            <option value="cyber-city">Cyber City</option>
            <option value="mg-road">MG Road</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Room Type</label>
          <select className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300">
            <option value="">Any Type</option>
            <option value="1rk">1 RK</option>
            <option value="1bhk">1 BHK</option>
            <option value="2bhk">2 BHK</option>
            <option value="3bhk">3 BHK</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Min Safety Rating</label>
          <select className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300">
            <option value="">Any Rating</option>
            <option value="4.5">4.5+ Stars</option>
            <option value="4.0">4.0+ Stars</option>
            <option value="3.5">3.5+ Stars</option>
          </select>
        </div>
      </div>
    </div>
  );

  const Header = () => (
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
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
            SafeStay
          </h1>
          <p className="text-2xl opacity-90 mb-2 font-light">Safe, Verified Housing for Women Students</p>
          <p className="text-lg opacity-75 font-light">Real reviews from female students, for female students</p>
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

  const TabNavigation = () => (
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

  const SavedListings = () => (
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
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const MainContent = () => {
    switch (activeTab) {
      case 'browse':
        return (
          <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
            <div className="container mx-auto px-4 py-8">
              <FilterPanel />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {listings.map(listing => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
            </div>
          </div>
        );
      case 'post':
        return <PostListingForm />;
      case 'matches':
        return <RoommateFinder />;
      case 'saved':
        return <SavedListings />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
      <Header />
      <StatsSection />
      <TabNavigation />
      <MainContent />
      
      {/* Footer */}
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
    </div>
  );
};

export default SafeStayApp;