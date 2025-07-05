import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Header from './components/Header';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import StatsSection from './components/StatsSection';
import TabNavigation from './components/TabNavigation';
import FilterPanel from './components/FilterPanel';
import ListingCard from './components/ListingCard';
import ListingDetails from './components/ListingDetails';
import PostListingForm from './components/PostListingForm';
import RoommateFinder from './components/RoommateFinder';
import SavedListings from './components/SavedListings';
import Footer from './components/Footer';

const listingsData = [
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

function ListingDetailsRoute({ listings, likedListings, toggleLike }) {
  const { id } = useParams();
  const listing = listings.find(l => l.id === Number(id));
  const navigate = useNavigate();
  if (!listing) return <div className="text-center py-20">Listing not found.</div>;
  return (
    <ListingDetails
      listing={listing}
      likedListings={likedListings}
      toggleLike={toggleLike}
      onBack={() => navigate('/')}
    />
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('browse');
  const [likedListings, setLikedListings] = useState(new Set());
  const [showFilters, setShowFilters] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  // Filter state
  const [filters, setFilters] = useState({
    budget: '',
    location: '',
    roomType: '',
    safety: ''
  });
  const listings = listingsData;

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

  const toggleLike = (listingId) => {
    const newLiked = new Set(likedListings);
    if (newLiked.has(listingId)) {
      newLiked.delete(listingId);
    } else {
      newLiked.add(listingId);
    }
    setLikedListings(newLiked);
  };

  // Filtering logic
  const filteredListings = listings.filter(listing => {
    // Budget
    if (filters.budget === 'under-10k' && parseInt(listing.price.replace(/[^\d]/g, '')) >= 10000) return false;
    if (filters.budget === '10k-15k' && (parseInt(listing.price.replace(/[^\d]/g, '')) < 10000 || parseInt(listing.price.replace(/[^\d]/g, '')) > 15000)) return false;
    if (filters.budget === '15k-20k' && (parseInt(listing.price.replace(/[^\d]/g, '')) < 15000 || parseInt(listing.price.replace(/[^\d]/g, '')) > 20000)) return false;
    if (filters.budget === 'above-20k' && parseInt(listing.price.replace(/[^\d]/g, '')) <= 20000) return false;
    // Location
    if (filters.location && !listing.location.toLowerCase().includes(filters.location.replace(/-/g, ' ').toLowerCase())) return false;
    // Room Type
    if (filters.roomType && !listing.roomType.toLowerCase().includes(filters.roomType.replace('bhk', 'bhk').replace('rk', 'rk'))) return false;
    // Safety
    if (filters.safety && listing.safetyRating < parseFloat(filters.safety)) return false;
    return true;
  });

  // Handler for filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
        <Header
          mousePosition={mousePosition}
          setShowFilters={setShowFilters}
          showFilters={showFilters}
          onSignUp={() => setShowSignUp(true)}
          onSignIn={() => setShowSignIn(true)}
        />
        <StatsSection />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <Routes>
          <Route path="/" element={
            activeTab === 'browse' ? (
              <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
                <div className="container mx-auto px-4 py-8">
                  <FilterPanel
                    showFilters={showFilters}
                    filters={filters}
                    onFilterChange={handleFilterChange}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredListings.map(listing => (
                      <ListingCard
                        key={listing.id}
                        listing={listing}
                        likedListings={likedListings}
                        toggleLike={toggleLike}
                        onDetails={() => window.location.assign(`/listing/${listing.id}`)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : activeTab === 'post' ? (
              <PostListingForm />
            ) : activeTab === 'matches' ? (
              <RoommateFinder />
            ) : activeTab === 'saved' ? (
              <SavedListings
                listings={listings}
                likedListings={likedListings}
                setActiveTab={setActiveTab}
                toggleLike={toggleLike}
                onDetails={id => window.location.assign(`/listing/${id}`)}
              />
            ) : null
          } />
          <Route path="/listing/:id" element={
            <ListingDetailsRoute
              listings={listings}
              likedListings={likedListings}
              toggleLike={toggleLike}
            />
          } />
        </Routes>
        <Footer />
        {showSignUp && <SignUpForm onClose={() => setShowSignUp(false)} />}
        {showSignIn && <SignInForm onClose={() => setShowSignIn(false)} />}
      </div>
    </Router>
  );
}

export default App;