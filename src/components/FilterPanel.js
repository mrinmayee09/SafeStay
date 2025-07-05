import React from 'react';

const FilterPanel = ({ showFilters, filters, onFilterChange }) => (
  <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8 border border-white/20 ${showFilters ? 'block' : 'hidden lg:block'}`}>
    <h3 className="font-bold text-xl mb-6 text-gray-800">Filters</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">Budget Range</label>
        <select
          className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
          name="budget"
          value={filters.budget}
          onChange={onFilterChange}
        >
          <option value="">Any Budget</option>
          <option value="under-10k">Under ₹10k</option>
          <option value="10k-15k">₹10k - ₹15k</option>
          <option value="15k-20k">₹15k - ₹20k</option>
          <option value="above-20k">Above ₹20k</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">Location</label>
        <select
          className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
          name="location"
          value={filters.location}
          onChange={onFilterChange}
        >
          <option value="">Any Location</option>
          <option value="sector-15">Sector 15</option>
          <option value="dlf-phase-2">DLF Phase 2</option>
          <option value="cyber-city">Cyber City</option>
          <option value="mg-road">MG Road</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">Room Type</label>
        <select
          className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
          name="roomType"
          value={filters.roomType}
          onChange={onFilterChange}
        >
          <option value="">Any Type</option>
          <option value="1rk">1 RK</option>
          <option value="1bhk">1 BHK</option>
          <option value="2bhk">2 BHK</option>
          <option value="3bhk">3 BHK</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">Min Safety Rating</label>
        <select
          className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-300"
          name="safety"
          value={filters.safety}
          onChange={onFilterChange}
        >
          <option value="">Any Rating</option>
          <option value="4.5">4.5+ Stars</option>
          <option value="4.0">4.0+ Stars</option>
          <option value="3.5">3.5+ Stars</option>
        </select>
      </div>
    </div>
  </div>
);

export default FilterPanel;
