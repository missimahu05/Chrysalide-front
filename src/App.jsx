import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import BookingBar from './components/BookingBar';
import AboutSection from './components/AboutSection';
import RoomCatalog from './components/RoomCatalog';
import VideoSection from './components/VideoSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchParams, setSearchParams] = useState(null);

  const handleOpenBooking = (room = null) => {
    setSelectedRoom(room);
    setIsBookingOpen(true);
  };

  const handleSearchAvailability = (params) => {
    setSearchParams(params);
    if (params.category) {
      setSelectedCategory(params.category);
    }
    const roomsElem = document.getElementById('rooms');
    if (roomsElem) {
      roomsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    const roomsElem = document.getElementById('rooms');
    if (roomsElem) {
      roomsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-dark min-vh-100 font-sans">
      <Navbar onOpenBooking={() => handleOpenBooking()} />
      
      <main>
        <HeroCarousel onOpenBooking={() => handleOpenBooking()} />
        <BookingBar onSearchAvailability={handleSearchAvailability} />
        <AboutSection onOpenBooking={() => handleOpenBooking()} />
        <RoomCatalog 
          selectedFilter={selectedCategory}
          onSelectRoom={(room) => handleOpenBooking(room)} 
        />
        <VideoSection onOpenBooking={() => handleOpenBooking()} />
        <ServicesSection onSelectCategory={handleSelectCategory} />
        <TestimonialsSection />
        <TeamSection />
      </main>

      <Footer onOpenBooking={() => handleOpenBooking()} />

      <BookingModal 
        isOpen={isBookingOpen}
        selectedRoom={selectedRoom}
        searchParams={searchParams}
        onClose={() => {
          setIsBookingOpen(false);
          setSelectedRoom(null);
        }}
      />
    </div>
  );
}
