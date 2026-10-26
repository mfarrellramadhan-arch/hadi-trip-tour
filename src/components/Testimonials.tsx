import React from 'react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      initials: 'BW',
      name: 'Bambang Wibisono',
      role: 'Corporate Director, Jakarta',
      comment:
        'Sewa Innova Zenix untuk kunjungan dinas kementerian di Bali selama 4 hari. Driver Mas Wayan sangat ramah, selalu on-time, dan mobilnya wangi seperti keluar dari showroom. Sangat rekomen untuk level eksekutif!',
    },
    {
      initials: 'SA',
      name: 'dr. Sarah Anindita',
      role: 'Liburan Keluarga, Surabaya',
      comment:
        'Paket Tour Bromo Midnight kemarin juara banget! Jeep datang tepat waktu di hotel Malang, guide mas Rizky sigap bantuin foto keluarga di Pasir Berbisik. Hasil dokumentasinya keren-keren. Liburan tanpa pusing!',
    },
    {
      initials: 'DA',
      name: 'Dimas Anggoro',
      role: 'Solo Traveler, Bandung',
      comment:
        'Proses lepas kunci Avanza di Bandara YIA Yogyakarta super gampang. Verifikasi KTP cepat, serah terima kunci cuma 10 menit langsung bisa jalan ke Borobudur. CS WhatsApp ramah dan fast respon walau dihubungi malam.',
    },
  ];

  return (
    <section
      className="py-24 bg-[#F5F2EA]/60 dark:bg-[#161B21] border-y border-[#E9DFCE] dark:border-[#2A313A] transition-colors duration-250"
      id="testimoni"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FCF9EE] dark:bg-[#1E232A] border border-[#EFE2B0] dark:border-[#3D3728] text-[#705007] dark:text-[#C5A059] text-xs uppercase tracking-wider font-semibold">
            <span className="material-symbols-outlined text-[16px]">
              rate_review
            </span>
            Ulasan Pengguna Asli
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0F172A] dark:text-[#F1F5F9] tracking-tight">
            Apa Kata Klien Kami?
          </h2>
          <p className="text-[#475569] dark:text-[#94A3B8] text-sm sm:text-base font-normal">
            Kepercayaan dari ribuan keluarga, profesional, dan institusi yang telah menjelajahi nusantara bersama kami.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1E232A] p-7 rounded-2xl border border-[#E9DFCE] dark:border-[#2A313A] hover:border-[#E4CE83] dark:hover:border-[#C5A059]/40 shadow-[0_2px_14px_rgba(30,41,59,0.04),0_0_0_1px_rgba(233,223,206,0.75)] dark:shadow-subtle-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex text-amber-400 dark:text-[#C5A059] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#334155] dark:text-[#CBD5E1] italic leading-relaxed font-normal">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-[#EFE9DE] dark:border-[#2A313A] flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#F7F2D8] dark:bg-[#161B21] border border-[#E4CE83] dark:border-[#3D3728] text-[#705007] dark:text-[#C5A059] flex items-center justify-center font-bold text-sm shrink-0 font-outfit">
                  {rev.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A] dark:text-[#F1F5F9] font-outfit">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                    {rev.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
