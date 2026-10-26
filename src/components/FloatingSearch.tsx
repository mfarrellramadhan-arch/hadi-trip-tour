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
      <div className="bg-white dark:bg-[#181C22] rounded-2xl border border-[#E4D4A8] dark:border-[#4E4228] shadow-[0_10px_30px_-10px_rgba(30,41,59,0.05),0_4px_12px_-2px_rgba(197,155,39,0.04)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5),0_0_0_1px_rgba(78,66,40,0.3)] p-6 md:p-8 transition-colors duration-250">
        {/* Search Mode Tabs & Driver Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAE6DF] dark:border-[#282E38] pb-5 mb-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setActiveTab('rental')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === 'rental'
                  ? 'bg-gradient-to-r from-[#9E7B1D] to-[#C5A059] text-white dark:text-[#0E1217] shadow-[0_4px_14px_0_rgba(197,155,39,0.25)]'
                  : 'bg-[#FAF9F6] dark:bg-[#1E232B] text-[#1E293B] dark:text-[#94A3B8] hover:bg-[#FBF7EC] dark:hover:bg-[#262015] hover:text-[#9E7B1D] dark:hover:text-[#C5A059] border border-[#EAE6DF] dark:border-[#282E38]'
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
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === 'tour'
                  ? 'bg-gradient-to-r from-[#9E7B1D] to-[#C5A059] text-white dark:text-[#0E1217] shadow-[0_4px_14px_0_rgba(197,155,39,0.25)]'
                  : 'bg-[#FAF9F6] dark:bg-[#1E232B] text-[#1E293B] dark:text-[#94A3B8] hover:bg-[#FBF7EC] dark:hover:bg-[#262015] hover:text-[#9E7B1D] dark:hover:text-[#C5A059] border border-[#EAE6DF] dark:border-[#282E38]'
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
            <div className="inline-flex p-1 bg-[#FAF9F6] dark:bg-[#12161A] rounded-full border border-[#EAE6DF] dark:border-[#282E38] self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setWithDriver(true)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-150 ${
                  withDriver
                    ? 'bg-white dark:bg-[#262015] text-[#9E7B1D] dark:text-[#C5A059] shadow-xs border border-[#E4D4A8] dark:border-[#544626]'
                    : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#1E293B] dark:hover:text-[#F1F5F9]'
                }`}
              >
                Dengan Sopir
              </button>
              <button
                type="button"
                onClick={() => setWithDriver(false)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-150 ${
                  !withDriver
                    ? 'bg-white dark:bg-[#262015] text-[#9E7B1D] dark:text-[#C5A059] shadow-xs border border-[#E4D4A8] dark:border-[#544626]'
                    : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#1E293B] dark:hover:text-[#F1F5F9]'
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
              <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#C5A059]">
                  location_on
                </span>
                Lokasi Penjemputan
              </label>
              <div className="relative">
                <select
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-4 py-3 text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:bg-white dark:focus:bg-[#181C22] transition-all cursor-pointer"
                >
                  {PICKUP_LOCATIONS.map((loc) => (
                    <option
                      key={loc.code}
                      value={loc.code}
                      className="bg-white dark:bg-[#1E232B]"
                    >
                      {loc.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Input 2: Tanggal Sewa */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#C5A059]">
                  calendar_month
                </span>
                Tanggal Mulai Sewa
              </label>
              <div className="relative flex items-center">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-3.5 py-2.5 text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:bg-white dark:focus:bg-[#181C22] transition-all"
                />
              </div>
            </div>

            {/* Input 3: Jam Jemput & Durasi */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#C5A059]">
                  schedule
                </span>
                Jam &amp; Durasi Sewa
              </label>
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-2.5 py-3 text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all cursor-pointer"
                >
                  <option className="bg-white dark:bg-[#1E232B]">08:00 WIB</option>
                  <option className="bg-white dark:bg-[#1E232B]">09:00 WIB</option>
                  <option className="bg-white dark:bg-[#1E232B]">10:00 WIB</option>
                  <option className="bg-white dark:bg-[#1E232B]">13:00 WIB</option>
                  <option className="bg-white dark:bg-[#1E232B]">18:00 WIB</option>
                </select>
                <select
                  value={durationDays}
                  onChange={(e) => setDurationDays(Number(e.target.value))}
                  className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-2.5 py-3 text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all cursor-pointer"
                >
                  <option value={1} className="bg-white dark:bg-[#1E232B]">1 Hari</option>
                  <option value={2} className="bg-white dark:bg-[#1E232B]">2 Hari</option>
                  <option value={3} className="bg-white dark:bg-[#1E232B]">3 Hari</option>
                  <option value={4} className="bg-white dark:bg-[#1E232B]">4 Hari</option>
                  <option value={5} className="bg-white dark:bg-[#1E232B]">5 Hari</option>
                  <option value={7} className="bg-white dark:bg-[#1E232B]">7 Hari (1 Mgg)</option>
                  <option value={14} className="bg-white dark:bg-[#1E232B]">14 Hari</option>
                </select>
              </div>
            </div>

            {/* Action Button: Search */}
            <div className="flex flex-col justify-end">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#9E7B1D] via-[#C5A059] to-[#E5C578] hover:brightness-105 text-white dark:text-[#0E1217] font-semibold text-sm py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(197,155,39,0.3)] hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
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
              <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#C5A059]">
                  map
                </span>
                Destinasi Impian
              </label>
              <select
                value={tourDestination}
                onChange={(e) => setTourDestination(e.target.value)}
                className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-4 py-3 text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:bg-white dark:focus:bg-[#181C22] transition-all cursor-pointer"
              >
                <option className="bg-white dark:bg-[#1E232B]">Bromo &amp; Kawah Ijen</option>
                <option className="bg-white dark:bg-[#1E232B]">Bali Island Experience</option>
                <option className="bg-white dark:bg-[#1E232B]">Labuan Bajo &amp; Komodo</option>
                <option className="bg-white dark:bg-[#1E232B]">Yogyakarta Cultural Tour</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#C5A059]">
                  event
                </span>
                Perkiraan Keberangkatan
              </label>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-3.5 py-2.5 text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:bg-white dark:focus:bg-[#181C22] transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#C5A059]">
                  group
                </span>
                Jumlah Peserta
              </label>
              <select
                value={paxGroup}
                onChange={(e) => setPaxGroup(e.target.value)}
                className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-3 py-3 text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] focus:bg-white dark:focus:bg-[#181C22] transition-all cursor-pointer"
              >
                <option className="bg-white dark:bg-[#1E232B]">2 Orang (Pasangan)</option>
                <option className="bg-white dark:bg-[#1E232B]">4 - 6 Orang (Keluarga)</option>
                <option className="bg-white dark:bg-[#1E232B]">10+ Orang (Rombongan)</option>
              </select>
            </div>

            <div className="flex flex-col justify-end">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#9E7B1D] via-[#C5A059] to-[#E5C578] hover:brightness-105 text-white dark:text-[#0E1217] font-semibold text-sm py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(197,155,39,0.3)] hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
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
