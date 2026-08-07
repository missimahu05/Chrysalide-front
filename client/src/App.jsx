import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import RoomCatalog from './components/RoomCatalog';
import ServicesSection from './components/ServicesSection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleOpenBookingWithRoom = (room) => {
    setSelectedRoom(room);
    setIsBookingOpen(true);
  };

  const handleSearchAvailability = (filters) => {
    console.log('Filtres de recherche appliqués:', filters);
    setIsBookingOpen(true);
  };

  return (
    <div className="chrysalide-app">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      
      <main>
        <Hero onSearchAvailability={handleSearchAvailability} />
        <AboutSection />
        <RoomCatalog onSelectRoomForBooking={handleOpenBookingWithRoom} />
        <ServicesSection />
        <Testimonials />
        <ContactSection />
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
