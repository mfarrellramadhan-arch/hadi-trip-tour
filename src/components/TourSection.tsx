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
      className="py-24 bg-[#F4F1EA]/60 dark:bg-[#12161A] border-y border-[#EAE6DF] dark:border-[#282E38] transition-colors duration-250"
      id="paket-wisata"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FBF7EC] dark:bg-[#262015] border border-[#E9DCB8] dark:border-[#544626] text-[#9E7B1D] dark:text-[#C5A059] text-xs uppercase tracking-wider font-semibold">
            <span className="material-symbols-outlined text-[16px]">
              flight_takeoff
            </span>
            All-Inclusive Tour Destinasi Ikonik
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1E293B] dark:text-[#F1F5F9] tracking-tight">
            Paket Wisata Favorit Nusantara
          </h2>
          <p className="text-[#64748B] dark:text-[#94A3B8] text-sm sm:text-base font-normal leading-relaxed">
            Rencanakan liburan impian tanpa repot menyusun itinerary. Nikmati armada privat ber-AC, hotel terverifikasi, dan pemandu lokal bersertifikat.
          </p>
        </div>

        {/* Bento Grid Tour Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOUR_PACKAGES.map((tour) => (
            <div
              key={tour.id}
              className="group bg-white dark:bg-[#181C22] rounded-2xl border border-[#EAE6DF] dark:border-[#282E38] hover:border-[#E4D4A8] dark:hover:border-[#C5A059]/50 overflow-hidden shadow-[0_10px_30px_-10px_rgba(30,41,59,0.05)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 dark:bg-[#181C22]/90 backdrop-blur-sm text-[#1E293B] dark:text-[#F1F5F9] text-xs font-bold flex items-center gap-1 shadow-sm border border-[#EAE6DF] dark:border-[#282E38]">
                    <span className="material-symbols-outlined text-[14px] text-[#C5A059]">
                      schedule
                    </span>
                    {tour.durationBadge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2.5">
                  <div className="text-xs uppercase tracking-wider text-[#9E7B1D] dark:text-[#C5A059] font-semibold">
                    {tour.departure}
                  </div>
                  <h3
                    onClick={() => onSelectTour(tour)}
                    className="font-serif text-xl font-bold text-[#1E293B] dark:text-[#F1F5F9] group-hover:text-[#9E7B1D] dark:hover:text-[#C5A059] transition-colors cursor-pointer"
                  >
                    {tour.title}
                  </h3>
                  <p className="text-xs text-[#64748B] dark:text-[#94A3B8] line-clamp-2 leading-relaxed">
                    {tour.description}
                  </p>

                  {/* Inclusions summary */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {tour.inclusions.slice(0, 3).map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] text-[#1E293B] dark:text-[#94A3B8]"
                      >
                        {item.split(' ')[0]} {item.split(' ')[1] || ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-5 pt-0">
                <div className="pt-4 border-t border-[#EAE6DF] dark:border-[#282E38] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#64748B] dark:text-[#94A3B8] block">
                      Harga / Pax
                    </span>
                    <div className="font-serif text-xl font-bold text-[#9E7B1D] dark:text-[#C5A059]">
                      {tour.priceFormatted}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectTour(tour)}
                    className="px-3.5 py-1.5 rounded-full bg-[#FAF9F6] dark:bg-[#1E232B] hover:bg-[#FBF7EC] dark:hover:bg-[#262015] text-[#1E293B] dark:text-[#F1F5F9] hover:text-[#9E7B1D] dark:hover:text-[#C5A059] border border-[#EAE6DF] dark:border-[#282E38] hover:border-[#E4D4A8] dark:hover:border-[#544626] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Detail Paket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tour Banner / Trigger */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#181C22] border border-[#E4D4A8] dark:border-[#4E4228] shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FBF7EC] dark:bg-[#262015] border border-[#E9DCB8] dark:border-[#544626] flex items-center justify-center text-[#9E7B1D] dark:text-[#C5A059] shrink-0">
              <span className="material-symbols-outlined text-[28px]">
                draw
              </span>
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold text-[#1E293B] dark:text-[#F1F5F9]">
                Punya Rencana Perjalanan Wisata Sendiri?
              </h4>
              <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8]">
                Susun destinasi impian, tentukan armada favorit, dan dapatkan penawaran custom all-in dengan supir berpengalaman.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenCustomTour}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#9E7B1D] to-[#C5A059] hover:from-[#C5A059] hover:to-[#E5C578] text-white dark:text-[#0E1217] font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-[0_4px_14px_0_rgba(197,155,39,0.3)] hover:shadow-lg transition-all active:scale-95 shrink-0 cursor-pointer"
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
