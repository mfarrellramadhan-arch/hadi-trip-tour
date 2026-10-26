/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FloatingSearch } from './components/FloatingSearch';
import { FleetSection } from './components/FleetSection';
import { TourSection } from './components/TourSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { ConsultationBanner } from './components/ConsultationBanner';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { VehicleDrawer } from './components/VehicleDrawer';
import { TourModal } from './components/TourModal';
import { CustomTourModal } from './components/CustomTourModal';
import { Vehicle, FLEET_DATA } from './data/fleetData';
import { TourPackage } from './data/toursData';

export default function App() {
  // Theme state: defaults to dark luxury or checks stored preference
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('nusantara_theme');
      if (stored) return stored === 'dark';
      // Default to luxury light travertine with smooth dark capability
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('nusantara_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('nusantara_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Interactive Modal & Drawer States
  const [bookingVehicle, setBookingVehicle] = useState<Vehicle | null>(null);
  const [detailVehicle, setDetailVehicle] = useState<Vehicle | null>(null);
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [isCustomTourOpen, setIsCustomTourOpen] = useState<boolean>(false);

  // Search parameters from floating search
  const [searchParams, setSearchParams] = useState<{
    locationCode: string;
    startDate: string;
    pickupTime: string;
    durationDays: number;
    withDriver: boolean;
  }>({
    locationCode: 'DPS',
    startDate: new Date().toISOString().split('T')[0],
    pickupTime: '09:00 WIB',
    durationDays: 3,
    withDriver: true,
  });

  const handleSearchRental = (criteria: {
    locationCode: string;
    startDate: string;
    pickupTime: string;
    durationDays: number;
    withDriver: boolean;
  }) => {
    setSearchParams(criteria);
  };

  const handleSearchTour = (criteria: {
    destination: string;
    departureDate: string;
    paxGroup: string;
  }) => {
    // Open custom tour modal with these pre-filled values or scroll to tour
    setIsCustomTourOpen(true);
  };

  // ESC key handler for modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setBookingVehicle(null);
        setDetailVehicle(null);
        setSelectedTour(null);
        setIsCustomTourOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#0E1217] text-[#1E293B] dark:text-[#F1F5F9] transition-colors duration-250 selection:bg-[#EFE2B0] selection:text-[#705007] dark:selection:bg-[#C5A059]/30 dark:selection:text-[#E5C578]">
      {/* Top Application Bar */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        onOpenCustomTour={() => setIsCustomTourOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Floating Multi-Tab Search Box */}
        <FloatingSearch
          onSearchRental={handleSearchRental}
          onSearchTour={handleSearchTour}
        />

        {/* Fleet Showcase Section */}
        <FleetSection
          onSelectVehicleForBooking={(vehicle) => setBookingVehicle(vehicle)}
          onViewVehicleDetail={(vehicle) => setDetailVehicle(vehicle)}
        />

        {/* Featured Archipelago Tour Packages */}
        <TourSection
          onSelectTour={(tour) => setSelectedTour(tour)}
          onOpenCustomTour={() => setIsCustomTourOpen(true)}
        />

        {/* Why Choose Us - 4 Service Pillars */}
        <WhyChooseUs />

        {/* Authentic Customer Reviews & Social Proof */}
        <Testimonials />

        {/* 24/7 Consultation Callout Banner */}
        <ConsultationBanner />
      </main>

      {/* Corporate Comprehensive Footer */}
      <Footer />

      {/* Interactive Overlays */}
      {/* 1. Booking Calculator Modal */}
      <BookingModal
        vehicle={bookingVehicle}
        isOpen={Boolean(bookingVehicle)}
        onClose={() => setBookingVehicle(null)}
        initialWithDriver={searchParams.withDriver}
        initialStartDate={searchParams.startDate}
        initialDays={searchParams.durationDays}
        initialLocationCode={searchParams.locationCode}
      />

      {/* 2. Slide-Over Vehicle Detail Drawer */}
      <VehicleDrawer
        vehicle={detailVehicle}
        isOpen={Boolean(detailVehicle)}
        onClose={() => setDetailVehicle(null)}
        onBookNow={(v) => {
          setDetailVehicle(null);
          setBookingVehicle(v);
        }}
      />

      {/* 3. Tour Package Detail Modal */}
      <TourModal
        tour={selectedTour}
        isOpen={Boolean(selectedTour)}
        onClose={() => setSelectedTour(null)}
      />

      {/* 4. Custom Tour Itinerary Builder Modal */}
      <CustomTourModal
        isOpen={isCustomTourOpen}
        onClose={() => setIsCustomTourOpen(false)}
      />
    </div>
  );
}
