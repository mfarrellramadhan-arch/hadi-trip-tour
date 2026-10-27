import React from 'react';

export const ConsultationBanner: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 -mb-16 relative z-20">
      <div className="bg-gradient-to-br from-[#FAF6ED] via-[#F4EDE0] to-[#EBE2D0] dark:bg-gradient-to-br dark:from-[#1E232A] dark:via-[#1A1F26] dark:to-[#161B21] border border-[#E4CE83] dark:border-[#3D3728] text-[#0F172A] dark:text-[#E2E8F0] rounded-3xl p-8 md:p-12 shadow-[0_10px_30px_-5px_rgba(212,175,55,0.15)] dark:shadow-glow-warm relative overflow-hidden transition-colors duration-250">
        {/* Ambient Warm Ray */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#E4CE83]/30 dark:bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
          <div className="lg:col-span-8 space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-[#EFE2B0] dark:bg-[#161B21] border border-[#E4CE83] dark:border-[#3D3728] text-[#4D3605] dark:text-[#C5A059] text-xs font-bold inline-block">
              Konsultasi Rute Gratis
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0F172A] dark:text-[#F1F5F9] tracking-tight">
              Butuh Rekomendasi Sewa Mobil atau Custom Rute Wisata?
            </h2>
            <p className="text-sm sm:text-base text-[#334155] dark:text-[#94A3B8] max-w-xl font-normal leading-relaxed">
              Tim support 24 jam kami siap menyusun estimasi rute paling efisien, ketersediaan unit terbaru, dan penawaran harga terbaik untuk kebutuhan Anda.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <a
              className="px-6 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#C59E30] hover:to-[#9E7307] text-white dark:text-[#12161A] text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all text-center cursor-pointer"
              href="https://wa.me/6281234567890?text=Halo%20Admin%20Nusantara%20Trans,%20saya%20ingin%20konsultasi%20rekomendasi%20sewa%20mobil%20atau%20rute%20wisata."
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Hubungi Admin WhatsApp</span>
            </a>
            <a
              className="px-6 py-4 rounded-xl bg-white/80 hover:bg-white dark:bg-[#161B21] dark:hover:bg-[#252C36] text-[#0F172A] dark:text-[#E2E8F0] text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border border-[#E4CE83] dark:border-[#2A313A] shadow-xs transition-all text-center cursor-pointer"
              href="tel:+6281234567890"
            >
              <span className="material-symbols-outlined text-[20px] text-[#8F6705] dark:text-[#C5A059]">call</span>
              <span>Telepon Call Center</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
