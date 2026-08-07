import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CategoriesGrid from './components/CategoriesGrid';
import RoomCatalog from './components/RoomCatalog';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');

  const handleOpenBookingWithRoom = (room) => {
    setSelectedRoom(room);
    setIsBookingOpen(true);
  };

  const handleSearchAvailability = (filters) => {
    console.log('Recherche effectuée:', filters);
    if (filters.category) {
      setFilterCategory(filters.category);
    }
    setIsBookingOpen(true);
  };

  const handleSelectCategoryTile = (catId) => {
    setFilterCategory(catId);
    const roomsElem = document.getElementById('rooms');
    if (roomsElem) {
      roomsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="chrysalide-light-app">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      
      <main>
        <Hero 
          onSearchAvailability={handleSearchAvailability} 
          onOpenBooking={() => setIsBookingOpen(true)}
        />
        <AboutSection onOpenBooking={() => setIsBookingOpen(true)} />
        <CategoriesGrid onSelectCategory={handleSelectCategoryTile} />
        <RoomCatalog 
          filterCategory={filterCategory} 
          onSelectRoomForBooking={handleOpenBookingWithRoom} 
        />
      </main>

      <Footer />

      {isBookingOpen && (
        <BookingModal 
          selectedRoom={selectedRoom}
          onClose={() => {
            setIsBookingOpen(false);
            setSelectedRoom(null);
          }}
        />
      )}
    </div>
  );
}
