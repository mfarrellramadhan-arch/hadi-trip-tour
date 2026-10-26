import React, { useState } from 'react';
import { Vehicle, FLEET_DATA } from '../data/fleetData';

interface FleetSectionProps {
  onSelectVehicleForBooking: (vehicle: Vehicle) => void;
  onViewVehicleDetail: (vehicle: Vehicle) => void;
  activeFilterCategory?: string;
}

export const FleetSection: React.FC<FleetSectionProps> = ({
  onSelectVehicleForBooking,
  onViewVehicleDetail,
  activeFilterCategory = 'all',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(activeFilterCategory);

  const filteredFleet = FLEET_DATA.filter((car) => {
    if (selectedCategory === 'all') return true;
    return car.category === selectedCategory;
  });

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12" id="sewa-mobil">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FBF7EC] dark:bg-[#262015] border border-[#E9DCB8] dark:border-[#544626] text-[#9E7B1D] dark:text-[#C5A059] text-xs uppercase tracking-wider font-semibold">
            <span className="material-symbols-outlined text-[16px]">
              verified
            </span>
            Armada Siap Pakai &amp; Berasuransi
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1E293B] dark:text-[#F1F5F9] tracking-tight">
            Pilihan Armada Terpopuler
          </h2>
          <p className="text-[#64748B] dark:text-[#94A3B8] text-sm sm:text-base max-w-xl font-normal leading-relaxed">
            Tersedia unit transmisi otomatis &amp; manual dalam kondisi prima, selalu dibersihkan dan diservis berkala sebelum diserahkan kepada Anda.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'Semua' },
            { id: 'mpv', label: 'MPV Keluarga' },
            { id: 'suv', label: 'SUV Premium' },
            { id: 'city', label: 'City Car Hemat' },
            { id: 'van', label: 'Van Rombongan' },
          ].map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#9E7B1D] to-[#C5A059] text-white dark:text-[#0E1217] shadow-[0_4px_14px_0_rgba(197,155,39,0.3)]'
                    : 'bg-white dark:bg-[#181C22] text-[#1E293B] dark:text-[#94A3B8] border border-[#EAE6DF] dark:border-[#282E38] hover:border-[#E4D4A8] dark:hover:border-[#C5A059]/40 hover:text-[#9E7B1D] dark:hover:text-[#F1F5F9]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Fleet Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFleet.map((vehicle) => (
          <div
            key={vehicle.id}
            className="group bg-white dark:bg-[#181C22] rounded-2xl border border-[#EAE6DF] dark:border-[#282E38] hover:border-[#E4D4A8] dark:hover:border-[#C5A059]/50 p-5 shadow-[0_10px_30px_-10px_rgba(30,41,59,0.05)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Category & Availability */}
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-0.5 rounded-full bg-[#FBF7EC] dark:bg-[#262015] border border-[#E9DCB8] dark:border-[#544626] text-[#9E7B1D] dark:text-[#C5A059] text-xs font-semibold uppercase tracking-wider">
                  {vehicle.categoryLabel}
                </span>
                <span className="text-xs text-[#64748B] dark:text-[#94A3B8] flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Unit Tersedia
                </span>
              </div>

              {/* Vehicle Visual with Hover Zoom */}
              <div
                onClick={() => onViewVehicleDetail(vehicle)}
                className="relative w-full h-48 rounded-xl overflow-hidden bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] mb-5 flex items-center justify-center cursor-pointer group/img"
                title="Klik untuk melihat spesifikasi lengkap"
              >
                <img
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                  alt={vehicle.name}
                  src={vehicle.imageUrl}
                  onError={(e) => {
                    // Fallback to placeholder gradient if image cannot load
                    (e.target as HTMLImageElement).src = '/assets/aistudio/Image_1_936f7feb.jpeg';
                  }}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-full bg-black/75 text-white text-xs font-medium backdrop-blur-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">visibility</span>
                    Lihat Spesifikasi
                  </span>
                </div>
              </div>

              {/* Title & Clickable to drawer */}
              <h3
                onClick={() => onViewVehicleDetail(vehicle)}
                className="font-serif text-2xl font-bold text-[#1E293B] dark:text-[#F1F5F9] mb-2.5 hover:text-[#9E7B1D] dark:hover:text-[#C5A059] cursor-pointer transition-colors"
              >
                {vehicle.name}
              </h3>

              {/* Specification Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] text-[#1E293B] dark:text-[#94A3B8] text-xs">
                  <span className="material-symbols-outlined text-[14px] text-[#C5A059]">
                    tune
                  </span>
                  {vehicle.transmission}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] text-[#1E293B] dark:text-[#94A3B8] text-xs">
                  <span className="material-symbols-outlined text-[14px] text-[#C5A059]">
                    group
                  </span>
                  {vehicle.capacity}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] text-[#1E293B] dark:text-[#94A3B8] text-xs">
                  <span className="material-symbols-outlined text-[14px] text-[#C5A059]">
                    local_gas_station
                  </span>
                  {vehicle.fuelType}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] text-[#1E293B] dark:text-[#94A3B8] text-xs">
                  <span className="material-symbols-outlined text-[14px] text-[#C5A059]">
                    verified
                  </span>
                  {vehicle.specialFeature}
                </span>
              </div>
            </div>

            {/* Price & CTA Buttons */}
            <div className="pt-4 border-t border-[#EAE6DF] dark:border-[#282E38] flex items-center justify-between">
              <div>
                <span className="text-xs text-[#64748B] dark:text-[#94A3B8] block">
                  {vehicle.priceNote}
                </span>
                <div className="font-serif text-2xl font-bold text-[#9E7B1D] dark:text-[#C5A059]">
                  {vehicle.priceFormatted}{' '}
                  <span className="font-sans text-xs font-normal text-[#64748B] dark:text-[#94A3B8]">
                    {vehicle.priceUnit}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onViewVehicleDetail(vehicle)}
                  className="px-3 py-2 rounded-full border border-[#EAE6DF] dark:border-[#282E38] hover:border-[#C5A059] text-xs font-semibold text-[#1E293B] dark:text-[#F1F5F9] hover:text-[#9E7B1D] dark:hover:text-[#C5A059] transition-colors cursor-pointer"
                  title="Lihat Detail & Foto"
                >
                  Detail
                </button>
                <button
                  type="button"
                  onClick={() => onSelectVehicleForBooking(vehicle)}
                  className="px-4 py-2.5 rounded-full bg-gradient-to-r from-[#9E7B1D] to-[#C5A059] hover:from-[#C5A059] hover:to-[#E5C578] text-white dark:text-[#0E1217] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-[0_4px_14px_0_rgba(197,155,39,0.25)] active:scale-95 transition-all cursor-pointer"
                >
                  <span>Sewa</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
