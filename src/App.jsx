import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import BookingBar from './components/BookingBar';
import TrustBar from './components/TrustBar';
import AboutSection from './components/AboutSection';
import RoomCatalog from './components/RoomCatalog';
import VideoSection from './components/VideoSection';
import EventsSection from './components/EventsSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import TeamSection from './components/TeamSection';
import CTAFinalSection from './components/CTAFinalSection';
import ContactLocationSection from './components/ContactLocationSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import EventsPage from './components/EventsPage';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'events'
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchParams, setSearchParams] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#events-page' || window.location.hash === '#billetterie') {
        setCurrentView('events');
      } else {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToView = (view) => {
    setCurrentView(view);
    if (view === 'events') {
      window.location.hash = '#events-page';
    } else {
      window.location.hash = '#hero';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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

  if (currentView === 'events') {
    return (
      <EventsPage onBackToHome={() => navigateToView('home')} />
    );
  }

  return (
    <div className="bg-white text-dark min-vh-100 font-sans">
      <Navbar 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenEventsPage={() => navigateToView('events')}
      />
      
      <main style={{ paddingTop: '72px' }}>
        {/* Section 1: Hero Carousel */}
        <HeroCarousel onOpenBooking={() => handleOpenBooking()} />

        {/* Floating Booking Search Bar */}
        <BookingBar onSearchAvailability={handleSearchAvailability} />

        {/* Section 2: Trust & Key Statistics Bar */}
        <TrustBar />

        {/* Section 3: About Us */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* Section 4: Room & Suite Catalog */}
        <RoomCatalog 
          selectedFilter={selectedCategory}
          onSelectRoom={(room) => handleOpenBooking(room)} 
        />

        {/* Section 5: Video Presentation */}
        <VideoSection onOpenBooking={() => handleOpenBooking()} />

        {/* Section 6: Événements, Bar Lounge & Privatisation */}
        <EventsSection 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenEventsPage={() => navigateToView('events')}
        />

        {/* Section 7: Process Steps (Comment réserver ?) */}
        <ProcessSection onOpenBooking={() => handleOpenBooking()} />

        {/* Section 8: Testimonials */}
        <TestimonialsSection />

        {/* Section 9: FAQ Accordions */}
        <FAQSection onOpenBooking={() => handleOpenBooking()} />

        {/* Section 10: Team Section */}
        <TeamSection />

        {/* Section 11: High Conversion CTA Banner */}
        <CTAFinalSection onOpenBooking={() => handleOpenBooking()} />

        {/* Section 12: Location & Google Maps */}
        <ContactLocationSection />
      </main>

      {/* Section 13: Rich MPB-inspired Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenEventsPage={() => navigateToView('events')}
      />

      {/* Dynamic Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        selectedRoom={selectedRoom}
        searchParams={searchParams}
      />
    </div>
  );
}
