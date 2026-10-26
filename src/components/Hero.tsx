import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden bg-gradient-to-b from-[#F5F2EA] via-[#FAF8F5] to-[#F8F9FA] dark:from-[#161B21] dark:via-[#14181E] dark:to-[#12161A] transition-colors duration-250">
      {/* Ambient Warm Gold Lighting */}
      <div className="absolute top-0 right-10 -z-10 w-96 h-96 bg-[#EFE2B0]/30 dark:bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-5 -z-10 w-80 h-80 bg-[#FAF7F2] dark:bg-[#1E232A]/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Copywriting Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-[#1E232A] border border-[#EFE2B0]/80 dark:border-[#2A313A] shadow-xs">
              <span className="flex text-amber-500">
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              </span>
              <span className="text-xs font-bold text-[#0F172A] dark:text-[#F1F5F9] tracking-wide">
                4.9 / 5.0
              </span>
              <span className="text-xs text-[#475569] dark:text-[#94A3B8] font-medium">
                (2.500+ Ulasan Pelanggan Terverifikasi)
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] dark:text-[#F1F5F9] font-extrabold leading-[1.12] tracking-tight">
              Rental Mobil &amp; Paket Wisata{' '}
              <span className="relative inline-block text-[#B8860B] dark:text-[#C5A059] after:content-[''] after:absolute after:bottom-1 after:left-0 after:right-0 after:h-2 after:bg-[#EFE2B0]/60 dark:after:bg-[#C5A059]/20 after:-z-10">
                Terpercaya
              </span>{' '}
              di Indonesia
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#475569] dark:text-[#94A3B8] max-w-2xl leading-relaxed font-normal">
              Solusi transportasi nyaman untuk perjalanan dinas, liburan keluarga, dan petualangan tanpa repot. Armada terawat, opsi lepas kunci atau didampingi driver profesional ramah bersertifikasi.
            </p>

            {/* Key Feature Metrics Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-6 sm:gap-8 text-[#0F172A] dark:text-[#F1F5F9]">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#FCF9EE] dark:bg-[#1E232A] border border-[#EFE2B0]/80 dark:border-[#2A313A] flex items-center justify-center text-[#B8860B] dark:text-[#C5A059] shadow-xs">
                  <span className="material-symbols-outlined text-[22px]">
                    directions_car
                  </span>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9]">
                    500+
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] font-medium">
                    Armada Terawat
                  </div>
                </div>
              </div>

              <div className="h-9 w-px bg-[#E2DACB] dark:bg-[#2A313A] hidden sm:block"></div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#FCF9EE] dark:bg-[#1E232A] border border-[#EFE2B0]/80 dark:border-[#2A313A] flex items-center justify-center text-[#B8860B] dark:text-[#C5A059] shadow-xs">
                  <span className="material-symbols-outlined text-[22px]">
                    schedule
                  </span>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9]">
                    24 Jam
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] font-medium">
                    Layanan Siaga Nonstop
                  </div>
                </div>
              </div>

              <div className="h-9 w-px bg-[#E2DACB] dark:bg-[#2A313A] hidden sm:block"></div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#FCF9EE] dark:bg-[#1E232A] border border-[#EFE2B0]/80 dark:border-[#2A313A] flex items-center justify-center text-[#B8860B] dark:text-[#C5A059] shadow-xs">
                  <span className="material-symbols-outlined text-[22px]">
                    verified_user
                  </span>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9]">
                    100% Aman
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#64748B] dark:text-[#94A3B8] font-medium">
                    Asuransi Perjalanan
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Graphic Column with Framed Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto rounded-3xl overflow-hidden border border-[#E9DFCE] dark:border-[#2A313A] bg-white dark:bg-[#1E232A] p-3 shadow-[0_10px_30px_-5px_rgba(212,175,55,0.12),0_4px_6px_-2px_rgba(0,0,0,0.03)] dark:shadow-glow-warm">
              <img
                className="w-full h-80 lg:h-96 object-cover rounded-2xl"
                alt="Armada mobil mewah Nusantara Trans"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6yYkwpArRDXlVSjHB3CxyRCV5M_eGQPS7zCuOA4LnH3ckIwW5_A4XKTlg62YjXgdJIOl5C-lC7l7WYgnKi8Go9gr9L_JJHlJZxdteX6SFiuOqVwi9P0P9-d17BkGANBFcNHdGsHN5uBs-Szu37Oi2So0QV5nhs1lKT728VLp_2ytqrE1Xgunv_ID28YI-vnZ8ZUkNhGhcbsUIiK_3frGf2NseqyQFY8oEUeQX8Xo"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/aistudio/Image_1_936f7feb.jpeg';
                }}
              />

              {/* Floating Notification Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 dark:bg-[#1E232A]/95 backdrop-blur-md border border-[#E9DFCE] dark:border-[#2A313A] shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F2D8] dark:bg-[#252C36] flex items-center justify-center text-[#8F6705] dark:text-[#C5A059]">
                    <span className="material-symbols-outlined text-[22px]">
                      airline_seat_recline_extra
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A] dark:text-[#F1F5F9] font-serif tracking-normal text-[15px]">
                      Armada Baru &amp; Higienis
                    </h4>
                    <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                      Disinfeksi dan servis rutin berkala
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[#8F6705] dark:text-[#C5A059] text-xs font-bold uppercase tracking-wider bg-[#FCF9EE] dark:bg-[#252C36] px-2.5 py-1 rounded-full border border-[#EFE2B0] dark:border-[#3D3728]">
                  Ready
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
