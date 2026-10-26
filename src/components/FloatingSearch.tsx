import React, { useState } from 'react';
import { PICKUP_LOCATIONS } from '../data/toursData';

interface FloatingSearchProps {
  onSearchRental: (criteria: {
    locationCode: string;
    startDate: string;
    pickupTime: string;
    durationDays: number;
    withDriver: boolean;
  }) => void;
  onSearchTour: (criteria: {
    destination: string;
    departureDate: string;
    paxGroup: string;
  }) => void;
}

export const FloatingSearch: React.FC<FloatingSearchProps> = ({
  onSearchRental,
  onSearchTour,
}) => {
  const [activeTab, setActiveTab] = useState<'rental' | 'tour'>('rental');
  const [withDriver, setWithDriver] = useState<boolean>(true);

  // Rental Form State
  const [pickupLocation, setPickupLocation] = useState<string>('DPS');
  const [startDate, setStartDate] = useState<string>('2024-11-20');
  const [pickupTime, setPickupTime] = useState<string>('09:00 WIB');
  const [durationDays, setDurationDays] = useState<number>(3);

  // Tour Form State
  const [tourDestination, setTourDestination] = useState<string>('Bali Island Experience');
  const [departureDate, setDepartureDate] = useState<string>('2024-12-15');
  const [paxGroup, setPaxGroup] = useState<string>('4 - 6 Orang (Keluarga)');

  const handleRentalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchRental({
      locationCode: pickupLocation,
      startDate,
      pickupTime,
      durationDays,
      withDriver,
    });
    const el = document.getElementById('sewa-mobil');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchTour({
      destination: tourDestination,
      departureDate,
      paxGroup,
    });
    const el = document.getElementById('paket-wisata');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative -mt-16 z-30 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="bg-white dark:bg-[#1E232A] rounded-3xl border border-[#E9DFCE] dark:border-[#2A313A] shadow-[0_2px_14px_rgba(30,41,59,0.04),0_0_0_1px_rgba(233,223,206,0.75)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4),0_0_0_1px_rgba(42,49,58,0.8)] p-6 md:p-8 transition-colors duration-250">
        {/* Search Mode Tabs & Driver Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EFE9DE] dark:border-[#2A313A] pb-5 mb-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setActiveTab('rental')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'rental'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white shadow-md shadow-[#B8860B]/20'
                  : 'bg-[#F6F4EE] dark:bg-[#161B21] text-[#334155] dark:text-[#94A3B8] hover:bg-[#FAF7F2] hover:text-[#B8860B] dark:hover:bg-[#252C36] dark:hover:text-[#E2E8F0] border border-[#E9DFCE] dark:border-[#2A313A]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">
                directions_car
              </span>
              <span>Sewa Mobil</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('tour')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'tour'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white shadow-md shadow-[#B8860B]/20'
                  : 'bg-[#F6F4EE] dark:bg-[#161B21] text-[#334155] dark:text-[#94A3B8] hover:bg-[#FAF7F2] hover:text-[#B8860B] dark:hover:bg-[#252C36] dark:hover:text-[#E2E8F0] border border-[#E9DFCE] dark:border-[#2A313A]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">
                travel_explore
              </span>
              <span>Paket Wisata</span>
            </button>
          </div>

          {/* Driver vs Self-Drive Toggle */}
          {activeTab === 'rental' && (
            <div className="inline-flex p-1 bg-[#F4F1EA] dark:bg-[#161B21] rounded-xl border border-[#E9DFCE] dark:border-[#2A313A] self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setWithDriver(true)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-150 cursor-pointer ${
                  withDriver
                    ? 'bg-white dark:bg-[#1E232A] text-[#8F6705] dark:text-[#C5A059] shadow-xs border border-[#EFE2B0] dark:border-[#2A313A]'
                    : 'text-[#475569] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#E2E8F0]'
                }`}
              >
                Dengan Sopir
              </button>
              <button
                type="button"
                onClick={() => setWithDriver(false)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-150 cursor-pointer ${
                  !withDriver
                    ? 'bg-white dark:bg-[#1E232A] text-[#8F6705] dark:text-[#C5A059] shadow-xs border border-[#EFE2B0] dark:border-[#2A313A]'
                    : 'text-[#475569] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#E2E8F0]'
                }`}
              >
                Lepas Kunci
              </button>
            </div>
          )}
        </div>

        {/* Dynamic Rental Form */}
        {activeTab === 'rental' && (
          <form
            onSubmit={handleRentalSubmit}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {/* Input 1: Lokasi */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#475569] dark:text-[#94A3B8] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#B8860B] dark:text-[#C5A059]">
                  location_on
                </span>
                Lokasi Penjemputan
              </label>
              <div className="relative">
                <select
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full bg-[#FAF9F5] dark:bg-[#161B21] border border-[#E5DEC3] dark:border-[#2A313A] rounded-xl px-4 py-3 text-sm text-[#0F172A] dark:text-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#C59E30] focus:bg-white dark:focus:bg-[#1E232A] transition-all cursor-pointer"
                >
                  {PICKUP_LOCATIONS.map((loc) => (
                    <option
                      key={loc.code}
                      value={loc.code}
                      className="bg-white dark:bg-[#161B21]"
                    >
                      {loc.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Input 2: Tanggal Sewa */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#475569] dark:text-[#94A3B8] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#B8860B] dark:text-[#C5A059]">
                  calendar_month
                </span>
                Tanggal Mulai Sewa
              </label>
              <div className="relative flex items-center">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-[#FAF9F5] dark:bg-[#161B21] border border-[#E5DEC3] dark:border-[#2A313A] rounded-xl px-3.5 py-2.5 text-sm text-[#0F172A] dark:text-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#C59E30] focus:bg-white dark:focus:bg-[#1E232A] transition-all"
                />
              </div>
            </div>

            {/* Input 3: Jam Jemput & Durasi */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#475569] dark:text-[#94A3B8] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#B8860B] dark:text-[#C5A059]">
                  schedule
                </span>
                Jam &amp; Durasi Sewa
              </label>
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full bg-[#FAF9F5] dark:bg-[#161B21] border border-[#E5DEC3] dark:border-[#2A313A] rounded-xl px-2.5 py-3 text-sm text-[#0F172A] dark:text-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#C59E30] focus:bg-white dark:focus:bg-[#1E232A] transition-all cursor-pointer"
                >
                  <option className="bg-white dark:bg-[#161B21]">08:00 WIB</option>
                  <option className="bg-white dark:bg-[#161B21]">09:00 WIB</option>
                  <option className="bg-white dark:bg-[#161B21]">10:00 WIB</option>
                  <option className="bg-white dark:bg-[#161B21]">13:00 WIB</option>
                  <option className="bg-white dark:bg-[#161B21]">18:00 WIB</option>
                </select>
                <select
                  value={durationDays}
                  onChange={(e) => setDurationDays(Number(e.target.value))}
                  className="w-full bg-[#FAF9F5] dark:bg-[#161B21] border border-[#E5DEC3] dark:border-[#2A313A] rounded-xl px-2.5 py-3 text-sm text-[#0F172A] dark:text-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#C59E30] focus:bg-white dark:focus:bg-[#1E232A] transition-all cursor-pointer"
                >
                  <option value={1} className="bg-white dark:bg-[#161B21]">1 Hari</option>
                  <option value={2} className="bg-white dark:bg-[#161B21]">2 Hari</option>
                  <option value={3} className="bg-white dark:bg-[#161B21]">3 Hari</option>
                  <option value={4} className="bg-white dark:bg-[#161B21]">4 Hari</option>
                  <option value={5} className="bg-white dark:bg-[#161B21]">5 Hari</option>
                  <option value={7} className="bg-white dark:bg-[#161B21]">7 Hari (1 Mgg)</option>
                  <option value={14} className="bg-white dark:bg-[#161B21]">14 Hari</option>
                </select>
              </div>
            </div>

            {/* Action Button: Search */}
            <div className="flex flex-col justify-end">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#C59E30] hover:to-[#9E7307] text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">
                  search
                </span>
                <span>Cari Mobil Tersedia</span>
              </button>
            </div>
          </form>
        )}

        {/* Dynamic Tour Form */}
        {activeTab === 'tour' && (
          <form
            onSubmit={handleTourSubmit}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#475569] dark:text-[#94A3B8] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#B8860B] dark:text-[#C5A059]">
                  map
                </span>
                Destinasi Impian
              </label>
              <select
                value={tourDestination}
                onChange={(e) => setTourDestination(e.target.value)}
                className="w-full bg-[#FAF9F5] dark:bg-[#161B21] border border-[#E5DEC3] dark:border-[#2A313A] rounded-xl px-4 py-3 text-sm text-[#0F172A] dark:text-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#C59E30] focus:bg-white dark:focus:bg-[#1E232A] transition-all cursor-pointer"
              >
                <option className="bg-white dark:bg-[#161B21]">Bromo &amp; Kawah Ijen</option>
                <option className="bg-white dark:bg-[#161B21]">Bali Island Experience</option>
                <option className="bg-white dark:bg-[#161B21]">Labuan Bajo &amp; Komodo</option>
                <option className="bg-white dark:bg-[#161B21]">Yogyakarta Cultural Tour</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#475569] dark:text-[#94A3B8] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#B8860B] dark:text-[#C5A059]">
                  event
                </span>
                Perkiraan Keberangkatan
              </label>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full bg-[#FAF9F5] dark:bg-[#161B21] border border-[#E5DEC3] dark:border-[#2A313A] rounded-xl px-3.5 py-2.5 text-sm text-[#0F172A] dark:text-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#C59E30] focus:bg-white dark:focus:bg-[#1E232A] transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#475569] dark:text-[#94A3B8] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#B8860B] dark:text-[#C5A059]">
                  group
                </span>
                Jumlah Peserta
              </label>
              <select
                value={paxGroup}
                onChange={(e) => setPaxGroup(e.target.value)}
                className="w-full bg-[#FAF9F5] dark:bg-[#161B21] border border-[#E5DEC3] dark:border-[#2A313A] rounded-xl px-3 py-3 text-sm text-[#0F172A] dark:text-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#C59E30] focus:bg-white dark:focus:bg-[#1E232A] transition-all cursor-pointer"
              >
                <option className="bg-white dark:bg-[#161B21]">2 Orang (Pasangan)</option>
                <option className="bg-white dark:bg-[#161B21]">4 - 6 Orang (Keluarga)</option>
                <option className="bg-white dark:bg-[#161B21]">10+ Orang (Rombongan)</option>
              </select>
            </div>

            <div className="flex flex-col justify-end">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#C59E30] hover:to-[#9E7307] text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">
                  explore
                </span>
                <span>Temukan Paket Tour</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
