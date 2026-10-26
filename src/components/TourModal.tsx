import React from 'react';
import { TourPackage } from '../data/toursData';

interface TourModalProps {
  tour: TourPackage | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TourModal: React.FC<TourModalProps> = ({ tour, isOpen, onClose }) => {
  if (!isOpen || !tour) return null;

  const handleBookViaWhatsApp = () => {
    const message = `Halo Nusantara Trans, saya ingin memesan *${tour.title}* (${tour.durationBadge}):
*Harga*: ${tour.priceFormatted} / Pax
*Asal Keberangkatan*: ${tour.departure}

Mohon informasi ketersediaan tanggal keberangkatan dan prosedur booking. Terima kasih!`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6281234567890?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white dark:bg-[#181C22] text-[#0F172A] dark:text-[#F1F5F9] rounded-3xl border border-[#E9DFCE] dark:border-[#2A313A] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FAF9F5] dark:bg-[#1E232B] hover:bg-[#FCF9EE] dark:hover:bg-[#262015] border border-[#E9DFCE] dark:border-[#282E38] text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F1F5F9] flex items-center justify-center transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Hero Visual */}
        <div className="relative h-64 rounded-2xl overflow-hidden mb-6 border border-[#EFE9DE] dark:border-[#282E38]">
          <img
            src={tour.imageUrl}
            alt={tour.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/aistudio/Image_1_936f7feb.jpeg';
            }}
          />
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 dark:bg-[#181C22]/90 backdrop-blur-sm text-xs font-bold text-[#0F172A] dark:text-[#F1F5F9] border border-[#E9DFCE] dark:border-[#282E38]">
            {tour.durationBadge}
          </div>
          <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/60 backdrop-blur-md text-white flex justify-between items-center">
            <div>
              <span className="text-[10px] text-amber-300 uppercase tracking-wider block">
                {tour.departure}
              </span>
              <span className="font-serif text-lg font-bold">{tour.title}</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-300 block">Mulai dari</span>
              <span className="font-serif text-xl font-bold text-[#D4AF37]">
                {tour.priceFormatted}
              </span>
            </div>
          </div>
        </div>

        {/* Overview & Highlights */}
        <div className="space-y-6">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#8F6705] dark:text-[#C5A059] mb-1.5">
              Highlight Destinasi
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {tour.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-[#FAF9F5] dark:bg-[#1E232B] border border-[#EFE9DE] dark:border-[#282E38]">
                  <span className="material-symbols-outlined text-[16px] text-[#B8860B] dark:text-[#C5A059] shrink-0 mt-0.5">
                    star
                  </span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Itinerary Steps */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#8F6705] dark:text-[#C5A059] mb-3">
              Rencana Perjalanan (Itinerary)
            </h4>
            <div className="space-y-3">
              {tour.itinerary.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#FAF9F5] dark:bg-[#1E232B] border border-[#EFE9DE] dark:border-[#282E38]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FCF9EE] dark:bg-[#262015] border border-[#EFE2B0] dark:border-[#544626] text-xs font-bold text-[#705007] dark:text-[#C5A059]">
                      {step.day}
                    </span>
                    <h5 className="font-bold text-xs sm:text-sm text-[#0F172A] dark:text-[#F1F5F9]">
                      {step.title}
                    </h5>
                  </div>
                  <ul className="text-xs text-[#475569] dark:text-[#94A3B8] space-y-1.5 pl-2">
                    {step.activities.map((act, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#B8860B] font-bold">•</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                Sudah Termasuk (Inclusions)
              </h4>
              <ul className="text-xs text-[#475569] dark:text-[#94A3B8] space-y-1 list-disc list-inside">
                {tour.inclusions.map((inc, i) => (
                  <li key={i}>{inc}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-rose-700 dark:text-rose-400 mb-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">cancel</span>
                Belum Termasuk (Exclusions)
              </h4>
              <ul className="text-xs text-[#475569] dark:text-[#94A3B8] space-y-1 list-disc list-inside">
                {tour.exclusions.map((exc, i) => (
                  <li key={i}>{exc}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action button */}
          <div className="pt-4 border-t border-[#EFE9DE] dark:border-[#282E38] flex items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[#64748B] dark:text-[#94A3B8] block">
                Harga per Orang (Pax)
              </span>
              <div className="font-serif text-3xl font-bold text-[#B8860B] dark:text-[#C5A059]">
                {tour.priceFormatted}
              </div>
            </div>

            <button
              type="button"
              onClick={handleBookViaWhatsApp}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#C59E30] hover:to-[#9E7307] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Pesan via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
