import React from 'react';
import Profile from '../assets/Profile.png';
import YourZoneIcon from '../assets/headphones.png';
import BrowseIcon from '../assets/search.png';
import PlaylistIcon from '../assets/playlist.png';
import FeaturedIcon from '../assets/feature.png';
import MoodsIcon from '../assets/mood.png';

const Home = () => {
  return (
    <div className="flex h-screen text-white bg-gradient-to-br from-[#0a0f2c] to-[#1e3a8a]">
      
      {/* Sidebar */}
      <div className="w-1/5 bg-[#1c3457] p-4 flex flex-col items-center">
        {/* Profile Image */}
        <img
          src={Profile}
          alt="Profile"
          className="w-20 h-20 rounded-full border-4 border-white object-cover"
        />
        {/* Username */}
        <h2 className="mt-4 text-lg font-semibold">Kevin Bach</h2>
        {/* Status */}
        <span className="text-sm text-blue-300">Online</span>

        {/* Navigation */}
        <div className="mt-8 w-full">
          <nav className="flex flex-col gap-4 text-left">
            <div className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded cursor-pointer">
              <img src={YourZoneIcon} alt="Your Zone" className="w-5 h-5" />
              <span>Your Zone</span>
            </div>
            <div className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded cursor-pointer">
              <img src={BrowseIcon} alt="Browse" className="w-5 h-5" />
              <span>Browse</span>
            </div>
            <div className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded cursor-pointer">
              <img src={PlaylistIcon} alt="Playlist" className="w-5 h-5" />
              <span>Playlist</span>
            </div>
            <div className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded cursor-pointer">
              <img src={FeaturedIcon} alt="Featured" className="w-5 h-5" />
              <span>Featured</span>
            </div>
            <div className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded cursor-pointer">
              <img src={MoodsIcon} alt="Moods" className="w-5 h-5" />
              <span>Moods</span>
            </div>
          </nav>
        </div>


      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Now playing, Featured, Recommended */}
          {/* Now Playing Section */}
          <div className="bg-[#253a7d] rounded-2xl p-6 shadow-lg mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-200 uppercase tracking-wide">Now Playing</p>
              <h1 className="text-2xl font-bold mt-1">Song Name</h1>
              <p className="text-sm text-blue-300">Artist Name</p>
            </div>
            
            {/* Placeholder for waveform animation */}
            <div className="w-32 h-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-sm opacity-70 animate-pulse" />
          </div>

          {/* Featured For You */}
          <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-6 mb-8 shadow-md overflow-hidden">
            {/* Text content */}
            <div>
              <p className="text-sm uppercase tracking-wide text-white/80">Featured for you</p>
              <h2 className="text-xl font-bold text-white mt-1">Artist Name</h2>
              <p className="text-sm text-white/80 mb-4">Date | Location</p>
              <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-100 transition">
                Buy Tickets
              </button>
            </div>

            {/* Artist image */}
            <img
              src="" // Placeholder image — replace later with your asset
              alt="Featured Artist"
              className="absolute right-4 bottom-0 h-24 object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Recommended */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Recommended for You</h3>
            <div className="flex space-x-4 overflow-x-auto">
              {/* Placeholder album cards */}
              <div className="min-w-[150px] bg-[#2d4373] p-4 rounded-lg">
                <div className="w-full h-32 bg-blue-300 rounded mb-2"></div>
                <p className="text-sm font-medium">Album Title</p>
                <p className="text-xs text-blue-200">Artist Name</p>
              </div>

              <div className="min-w-[150px] bg-[#2d4373] p-4 rounded-lg">
                <div className="w-full h-32 bg-blue-300 rounded mb-2"></div>
                <p className="text-sm font-medium">Album Title</p>
                <p className="text-xs text-blue-200">Artist Name</p>
              </div>

              <div className="min-w-[150px] bg-[#2d4373] p-4 rounded-lg">
                <div className="w-full h-32 bg-blue-300 rounded mb-2"></div>
                <p className="text-sm font-medium">Album Title</p>
                <p className="text-xs text-blue-200">Artist Name</p>
              </div>

              <div className="min-w-[150px] bg-[#2d4373] p-4 rounded-lg">
                <div className="w-full h-32 bg-blue-300 rounded mb-2"></div>
                <p className="text-sm font-medium">Album Title</p>
                <p className="text-xs text-blue-200">Artist Name</p>
              </div> <div className="min-w-[150px] bg-[#2d4373] p-4 rounded-lg">
                <div className="w-full h-32 bg-blue-300 rounded mb-2"></div>
                <p className="text-sm font-medium">Album Title</p>
                <p className="text-xs text-blue-200">Artist Name</p>
              </div>
              
              <div className="min-w-[150px] bg-[#2d4373] p-4 rounded-lg">
                <div className="w-full h-32 bg-blue-300 rounded mb-2"></div>
                <p className="text-sm font-medium">Album Title</p>
                <p className="text-xs text-blue-200">Artist Name</p>
              </div>
          </div>
        </div>


      </div>

      {/* Right Panel */}
      <div className="w-1/5 bg-[#182a55] p-4 space-y-4 overflow-y-auto">
        <h3 className="text-lg font-semibold text-white mb-4">Recently Played</h3>

        {/* Placeholder items */}
        <div className="bg-white/10 rounded-md p-3 text-sm text-white/80 shadow">
          <p className="font-medium">Song Title</p>
          <span className="text-white/60">Artist Name</span>
        </div>

        <div className="bg-white/10 rounded-md p-3 text-sm text-white/80 shadow">
          <p className="font-medium">Song Title</p>
          <span className="text-white/60">Artist Name</span>
        </div>

        <div className="bg-white/10 rounded-md p-3 text-sm text-white/80 shadow">
          <p className="font-medium">Song Title</p>
          <span className="text-white/60">Artist Name</span>
        </div>
      </div>

      {/* Music Control Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0d1a36] text-white px-6 py-2 pt-1">
        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-600 rounded overflow-hidden mb-2">
          <div className="h-full bg-blue-400 w-[30%]"></div> {/* Static progress (40%) */}
        </div>

        {/* Controls and Info */}
        <div className="flex items-center justify-between">
          {/* Song Info */}
          <div className="flex items-center space-x-4">
            {/* Album cover (placeholder) */}
            <div className="w-12 h-12 bg-gray-500 rounded overflow-hidden"></div>
            {/* Song title and artist */}
            <div>
              <p className="font-semibold">Song Title</p>
              <p className="text-sm text-gray-300">Artist Name</p>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center space-x-6">
            <button className="text-2xl"></button>
            <button className="text-3xl"></button>
            <button className="text-2xl"></button>
          </div>

          {/* Duration */}
          <div className="text-sm text-gray-300">1:15 / 3:45</div>
          </div>
      </div>


    </div>
  );
};

export default Home;




