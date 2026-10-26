import React from 'react';
import { Vehicle } from '../data/fleetData';

interface VehicleDrawerProps {
  vehicle: Vehicle | null;
  isOpen: boolean;
  onClose: () => void;
  onBookNow: (vehicle: Vehicle) => void;
}

export const VehicleDrawer: React.FC<VehicleDrawerProps> = ({
  vehicle,
  isOpen,
  onClose,
  onBookNow,
}) => {
  if (!isOpen || !vehicle) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end animate-fadeIn">
      {/* Drawer Container */}
      <div className="w-full max-w-xl bg-white dark:bg-[#181C22] text-[#1E293B] dark:text-[#F1F5F9] h-full overflow-y-auto shadow-2xl border-l border-[#EAE6DF] dark:border-[#282E38] p-6 sm:p-8 flex flex-col justify-between transition-colors duration-250 animate-slideLeft">
        <div>
          {/* Header & Close button */}
          <div className="flex items-center justify-between border-b border-[#EAE6DF] dark:border-[#282E38] pb-4 mb-6">
            <span className="px-3 py-1 rounded-full bg-[#FBF7EC] dark:bg-[#262015] border border-[#E9DCB8] dark:border-[#544626] text-[#9E7B1D] dark:text-[#C5A059] text-xs font-semibold uppercase tracking-wider">
              {vehicle.categoryLabel}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#FAF9F6] dark:bg-[#1E232B] hover:bg-[#FBF7EC] dark:hover:bg-[#262015] border border-[#EAE6DF] dark:border-[#282E38] text-[#64748B] dark:text-[#94A3B8] hover:text-[#1E293B] dark:hover:text-[#F1F5F9] flex items-center justify-center transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Vehicle Visual */}
          <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] mb-6">
            <img
              src={vehicle.imageUrl}
              alt={vehicle.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/aistudio/Image_1_936f7feb.jpeg';
              }}
            />
            <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/95 dark:bg-[#181C22]/90 backdrop-blur-sm text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 shadow-sm border border-[#EAE6DF] dark:border-[#282E38]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Lulus Inspeksi Siap Pakai
            </div>
          </div>

          {/* Title & Description */}
          <h2 className="font-serif text-3xl font-bold text-[#1E293B] dark:text-[#F1F5F9] mb-2">
            {vehicle.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed mb-6 font-normal">
            {vehicle.description}
          </p>

          {/* Technical Specifications Grid */}
          <div className="mb-6 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#9E7B1D] dark:text-[#C5A059]">
              Spesifikasi Kendaraan
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 rounded-xl bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38]">
                <span className="text-[#64748B] dark:text-[#94A3B8] block mb-0.5">Mesin &amp; Performa</span>
                <span className="font-semibold text-[#1E293B] dark:text-[#F1F5F9]">{vehicle.specs.engine}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38]">
                <span className="text-[#64748B] dark:text-[#94A3B8] block mb-0.5">Kapasitas Tangki</span>
                <span className="font-semibold text-[#1E293B] dark:text-[#F1F5F9]">{vehicle.specs.fuelTank}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38]">
                <span className="text-[#64748B] dark:text-[#94A3B8] block mb-0.5">Tahun Unit</span>
                <span className="font-semibold text-[#1E293B] dark:text-[#F1F5F9]">{vehicle.specs.year}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38]">
                <span className="text-[#64748B] dark:text-[#94A3B8] block mb-0.5">Daya Tampung Bagasi</span>
                <span className="font-semibold text-[#1E293B] dark:text-[#F1F5F9]">{vehicle.specs.luggage}</span>
              </div>
              <div className="col-span-2 p-3 rounded-xl bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38]">
                <span className="text-[#64748B] dark:text-[#94A3B8] block mb-0.5">Sistem Pendingin AC</span>
                <span className="font-semibold text-[#1E293B] dark:text-[#F1F5F9]">{vehicle.specs.airConditioning}</span>
              </div>
            </div>
          </div>

          {/* 24-Point Inspection Checklist */}
          <div className="mb-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#C5A059]">
                fact_check
              </span>
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#1E293B] dark:text-[#F1F5F9]">
                Poin Inspeksi Pra-Pengiriman
              </h4>
            </div>
            <div className="p-4 rounded-2xl bg-[#FBF7EC] dark:bg-[#262015] border border-[#E9DCB8] dark:border-[#544626] space-y-2">
              {vehicle.inspectionPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#1E293B] dark:text-[#F1F5F9]">
                  <span className="material-symbols-outlined text-[16px] text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rental Requirements */}
          <div className="mb-6 space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#64748B] dark:text-[#94A3B8]">
              Syarat &amp; Ketentuan Rental
            </h4>
            <ul className="text-xs text-[#64748B] dark:text-[#94A3B8] space-y-1 list-disc list-inside">
              {vehicle.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer with Price and Book Button */}
        <div className="pt-6 border-t border-[#EAE6DF] dark:border-[#282E38] mt-6 flex items-center justify-between gap-4">
          <div>
            <span className="text-xs text-[#64748B] dark:text-[#94A3B8] block">
              {vehicle.priceNote}
            </span>
            <div className="font-serif text-3xl font-bold text-[#9E7B1D] dark:text-[#C5A059]">
              {vehicle.priceFormatted}{' '}
              <span className="font-sans text-xs font-normal text-[#64748B] dark:text-[#94A3B8]">
                {vehicle.priceUnit}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onBookNow(vehicle);
            }}
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#9E7B1D] via-[#C5A059] to-[#E5C578] hover:brightness-105 text-white dark:text-[#0E1217] text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_4px_14px_0_rgba(197,155,39,0.3)] hover:shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <span>Pesan Unit Ini</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
