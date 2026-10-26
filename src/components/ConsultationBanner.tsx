import React from 'react';

export const ConsultationBanner: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 -mb-16 relative z-20">
      <div className="bg-[#1E293B] dark:bg-[#14181E] text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-[#C5A059]/30 dark:border-[#544626]">
        {/* Ambient Warm Ray */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
          <div className="lg:col-span-8 space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#E5C578] text-xs font-semibold uppercase tracking-wider inline-block">
              Konsultasi Rute Gratis
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              Butuh Rekomendasi Sewa Mobil atau Custom Rute Wisata?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 dark:text-[#94A3B8] max-w-xl font-normal leading-relaxed">
              Tim support 24 jam kami siap menyusun estimasi rute paling efisien, ketersediaan unit terbaru, dan penawaran harga terbaik untuk kebutuhan Anda.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <a
              className="px-6 py-4 rounded-xl bg-gradient-to-r from-[#9E7B1D] via-[#C5A059] to-[#E5C578] hover:brightness-105 text-[#0E1217] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(197,155,39,0.3)] active:scale-95 transition-all text-center"
              href="https://wa.me/6281234567890?text=Halo%20Admin%20Nusantara%20Trans,%20saya%20ingin%20konsultasi%20rekomendasi%20sewa%20mobil%20atau%20rute%20wisata."
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Hubungi Admin WhatsApp</span>
            </a>
            <a
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border border-white/20 transition-all text-center"
              href="tel:+6281234567890"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>Telepon Call Center</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
