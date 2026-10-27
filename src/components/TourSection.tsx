import React from 'react';
import { TourPackage, TOUR_PACKAGES } from '../data/toursData';

interface TourSectionProps {
  onSelectTour: (tour: TourPackage) => void;
  onOpenCustomTour: () => void;
}

export const TourSection: React.FC<TourSectionProps> = ({
  onSelectTour,
  onOpenCustomTour,
}) => {
  return (
    <section
      className="py-24 bg-[#F4F1EA]/70 dark:bg-[#161B21] border-y border-[#E9DFCE] dark:border-[#2A313A] transition-colors duration-250"
      id="paket-wisata"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7F2D8] dark:bg-[#1E232A] border border-[#E4CE83] dark:border-[#3D3728] text-[#4D3605] dark:text-[#C5A059] text-xs uppercase tracking-wider font-semibold">
            <span className="material-symbols-outlined text-[16px]">
              flight_takeoff
            </span>
            All-Inclusive Tour Destinasi Ikonik
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0F172A] dark:text-[#F1F5F9] tracking-tight">
            Paket Wisata Favorit Nusantara
          </h2>
          <p className="text-[#475569] dark:text-[#94A3B8] text-sm sm:text-base font-normal leading-relaxed">
            Rencanakan liburan impian tanpa repot menyusun itinerary. Nikmati armada privat ber-AC, hotel terverifikasi, dan pemandu lokal bersertifikat.
          </p>
        </div>

        {/* Bento Grid Tour Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOUR_PACKAGES.map((tour) => (
            <div
              key={tour.id}
              className="group bg-white dark:bg-[#1E232A] rounded-2xl border border-[#E9DFCE] dark:border-[#2A313A] hover:border-[#D7B756] dark:hover:border-[#C5A059]/60 overflow-hidden shadow-[0_2px_14px_rgba(30,41,59,0.04),0_0_0_1px_rgba(233,223,206,0.75)] dark:shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image and Duration Badge */}
                <div
                  onClick={() => onSelectTour(tour)}
                  className="relative h-56 overflow-hidden cursor-pointer"
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={tour.title}
                    src={tour.imageUrl}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/aistudio/Image_1_936f7feb.jpeg';
                    }}
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 dark:bg-[#12161A]/90 backdrop-blur-sm text-[#0F172A] dark:text-[#F1F5F9] text-xs font-bold flex items-center gap-1 shadow-sm border border-[#E9DFCE] dark:border-[#2A313A]">
                    <span className="material-symbols-outlined text-[14px] text-[#B8860B] dark:text-[#C5A059]">
                      schedule
                    </span>
                    {tour.durationBadge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-2.5">
                  <div className="text-xs uppercase tracking-wider text-[#8F6705] dark:text-[#C5A059] font-semibold">
                    {tour.departure}
                  </div>
                  <h3
                    onClick={() => onSelectTour(tour)}
                    className="font-serif text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] group-hover:text-[#B8860B] dark:group-hover:text-[#C5A059] transition-colors cursor-pointer"
                  >
                    {tour.title}
                  </h3>
                  <p className="text-xs text-[#475569] dark:text-[#94A3B8] line-clamp-2 leading-relaxed">
                    {tour.description}
                  </p>

                  {/* Inclusions summary */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {tour.inclusions.slice(0, 3).map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#FAF8F5] dark:bg-[#161B21] border border-[#EFE9DE] dark:border-[#2A313A] text-[#334155] dark:text-[#CBD5E1]"
                      >
                        {item.split(' ')[0]} {item.split(' ')[1] || ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-[#EFE9DE] dark:border-[#2A313A] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#64748B] dark:text-[#94A3B8] block">
                      Harga / Pax
                    </span>
                    <div className="font-serif text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9]">
                      {tour.priceFormatted}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectTour(tour)}
                    className="px-3.5 py-1.5 rounded-full bg-[#FCF9EE] dark:bg-[#161B21] hover:bg-[#B8860B] hover:text-white dark:hover:bg-[#C5A059] dark:hover:text-[#12161A] text-[#705007] dark:text-[#C5A059] border border-[#E4CE83] dark:border-[#3D3728] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Detail Paket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tour Banner / Trigger */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1E232A] border border-[#E9DFCE] dark:border-[#3D3728] shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FCF9EE] dark:bg-[#161B21] border border-[#EFE2B0] dark:border-[#3D3728] flex items-center justify-center text-[#B8860B] dark:text-[#C5A059] shrink-0">
              <span className="material-symbols-outlined text-[28px]">
                draw
              </span>
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9]">
                Punya Rencana Perjalanan Wisata Sendiri?
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8]">
                Susun destinasi impian, tentukan armada favorit, dan dapatkan penawaran custom all-in dengan supir berpengalaman.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenCustomTour}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#C59E30] hover:to-[#9E7307] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95 shrink-0 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">
              route
            </span>
            Rancang Custom Rute
          </button>
        </div>
      </div>
    </section>
  );
};
