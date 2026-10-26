import React from 'react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12" id="keunggulan">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FBF7EC] dark:bg-[#262015] border border-[#E9DCB8] dark:border-[#544626] text-[#9E7B1D] dark:text-[#C5A059] text-xs uppercase tracking-wider font-semibold">
            <span className="material-symbols-outlined text-[16px]">
              thumb_up
            </span>
            Standar Pelayanan Eksekutif
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1E293B] dark:text-[#F1F5F9] leading-snug tracking-tight">
            Kenapa Ribuan Pelanggan Memilih{' '}
            <span className="text-[#9E7B1D] dark:text-[#C5A059] italic font-normal">
              Nusantara Trans?
            </span>
          </h2>
          <p className="text-[#64748B] dark:text-[#94A3B8] text-sm sm:text-base leading-relaxed font-normal">
            Kami memahami bahwa kenyamanan, ketepatan waktu, dan kepastian armada adalah prioritas utama setiap perjalanan Anda, baik untuk urusan dinas maupun rekreasi keluarga tercinta.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Nusantara%20Trans,%20saya%20ingin%20tanya%20syarat%20dan%20kebijakan%20rental%20mobil."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#9E7B1D] dark:text-[#C5A059] font-bold hover:underline text-sm uppercase tracking-wider group"
            >
              <span>Pelajari Syarat &amp; Kebijakan Rental</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
        </div>

        {/* Right Column: 4 Pillars */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#181C22] border border-[#EAE6DF] dark:border-[#282E38] hover:border-[#E4D4A8] dark:hover:border-[#C5A059]/50 shadow-[0_10px_30px_-10px_rgba(30,41,59,0.05)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#FBF7EC] dark:bg-[#262015] border border-[#E9DCB8] dark:border-[#544626] flex items-center justify-center text-[#9E7B1D] dark:text-[#C5A059] mb-4 shadow-sm">
              <span className="material-symbols-outlined text-[26px]">
                clean_hands
              </span>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1E293B] dark:text-[#F1F5F9] mb-2">
              Unit 100% Bersih &amp; Prima
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed font-normal">
              Mobil dicuci bersih, wangi, dan melalui inspeksi 24 titik mesin sebelum diantarkan ke tangan Anda.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#181C22] border border-[#EAE6DF] dark:border-[#282E38] hover:border-[#E4D4A8] dark:hover:border-[#C5A059]/50 shadow-[0_10px_30px_-10px_rgba(30,41,59,0.05)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#FBF7EC] dark:bg-[#262015] border border-[#E9DCB8] dark:border-[#544626] flex items-center justify-center text-[#9E7B1D] dark:text-[#C5A059] mb-4 shadow-sm">
              <span className="material-symbols-outlined text-[26px]">
                badge
              </span>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1E293B] dark:text-[#F1F5F9] mb-2">
              Driver Ramah &amp; Hafal Rute
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed font-normal">
              Didukung driver profesional berlisensi, berseragam rapi, tidak merokok di dalam unit, dan hafal jalur bebas macet.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#181C22] border border-[#EAE6DF] dark:border-[#282E38] hover:border-[#E4D4A8] dark:hover:border-[#C5A059]/50 shadow-[0_10px_30px_-10px_rgba(30,41,59,0.05)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#FBF7EC] dark:bg-[#262015] border border-[#E9DCB8] dark:border-[#544626] flex items-center justify-center text-[#9E7B1D] dark:text-[#C5A059] mb-4 shadow-sm">
              <span className="material-symbols-outlined text-[26px]">
                payments
              </span>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1E293B] dark:text-[#F1F5F9] mb-2">
              Harga Jujur &amp; Transparan
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed font-normal">
              Tidak ada biaya tersembunyi (hidden fees). Seluruh rincian biaya sewa dan opsi include tertulis jelas pada invoice resmi.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#181C22] border border-[#EAE6DF] dark:border-[#282E38] hover:border-[#E4D4A8] dark:hover:border-[#C5A059]/50 shadow-[0_10px_30px_-10px_rgba(30,41,59,0.05)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#FBF7EC] dark:bg-[#262015] border border-[#E9DCB8] dark:border-[#544626] flex items-center justify-center text-[#9E7B1D] dark:text-[#C5A059] mb-4 shadow-sm">
              <span className="material-symbols-outlined text-[26px]">
                published_with_changes
              </span>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1E293B] dark:text-[#F1F5F9] mb-2">
              Garansi Unit Pengganti
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed font-normal">
              Jika terjadi kendala teknis tak terduga, tim support kami segera mengirimkan unit pengganti setara dalam waktu singkat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
