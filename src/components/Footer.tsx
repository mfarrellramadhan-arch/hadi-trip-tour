import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F172A] dark:bg-[#0D1013] text-slate-300 pt-28 pb-12 border-t border-slate-800 dark:border-[#1E232A] transition-colors duration-250">
      <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto space-y-12">
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center text-white shadow-md shadow-[#C59E30]/20">
                <span className="material-symbols-outlined text-[22px]">
                  directions_car
                </span>
              </div>
              <span className="font-serif text-2xl font-bold text-white">
                Nusantara Trans
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Penyedia jasa rental mobil eksekutif, sewa kendaraan rombongan, dan paket wisata nusantara resmi berbadan hukum PT Nusantara Trans Indonesia.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 pt-2 text-slate-300">
              <span className="text-xs bg-[#1E293B] border border-slate-700 px-3 py-1.5 rounded-lg font-medium">
                Kemenkumham Terdaftar
              </span>
              <span className="text-xs bg-[#1E293B] border border-slate-700 px-3 py-1.5 rounded-lg font-medium">
                Anggota ASITA
              </span>
            </div>
          </div>

          {/* Links Group 1 */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-white">
              Layanan Kami
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a className="hover:text-[#D4AF37] transition-colors duration-200" href="#sewa-mobil">
                  Sewa Mobil
                </a>
              </li>
              <li>
                <a className="hover:text-[#D4AF37] transition-colors duration-200" href="#paket-wisata">
                  Paket Wisata
                </a>
              </li>
              <li>
                <a className="hover:text-[#D4AF37] transition-colors duration-200" href="#sewa-mobil">
                  Lepas Kunci
                </a>
              </li>
              <li>
                <a className="hover:text-[#D4AF37] transition-colors duration-200" href="#sewa-mobil">
                  Dengan Sopir
                </a>
              </li>
            </ul>
          </div>

          {/* Links Group 2 */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-white">
              Informasi &amp; Bantuan
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a
                  className="hover:text-[#D4AF37] transition-colors duration-200"
                  href="https://wa.me/6281234567890?text=Halo%20Nusantara%20Trans,%20saya%20ingin%20tanya%20syarat%20dan%20ketentuan."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Syarat &amp; Ketentuan
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#D4AF37] transition-colors duration-200"
                  href="https://wa.me/6281234567890?text=Halo%20Nusantara%20Trans,%20bagaimana%20kebijakan%20privasi%20data%20pelanggan?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#D4AF37] transition-colors duration-200"
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kontak 24/7
                </a>
              </li>
              <li>
                <a className="hover:text-[#D4AF37] transition-colors duration-200" href="#testimoni">
                  Testimoni Klien
                </a>
              </li>
            </ul>
          </div>

          {/* Office Branch Network */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-white">
              Kantor Cabang
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <span className="font-semibold text-white">Jakarta:</span> Cengkareng / Bandara Soetta
              </li>
              <li>
                <span className="font-semibold text-white">Bali:</span> Jl. Bypass Ngurah Rai No. 88, Tuban
              </li>
              <li>
                <span className="font-semibold text-white">Yogyakarta:</span> Jl. Malioboro No. 42
              </li>
              <li>
                <span className="font-semibold text-white">Surabaya:</span> Juanda Airport Area
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Gateways & Secure Channels */}
        <div className="pt-8 border-t border-slate-800 dark:border-[#1E232A] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs text-slate-400">
              Metode Pembayaran Resmi:
            </span>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <span className="px-2.5 py-1 rounded bg-[#1E293B] border border-slate-700 text-slate-200">
                Bank BCA
              </span>
              <span className="px-2.5 py-1 rounded bg-[#1E293B] border border-slate-700 text-slate-200">
                Mandiri
              </span>
              <span className="px-2.5 py-1 rounded bg-[#1E293B] border border-slate-700 text-slate-200">
                Bank BRI
              </span>
              <span className="px-2.5 py-1 rounded bg-[#1E293B] border border-slate-700 text-slate-200">
                QRIS
              </span>
            </div>
          </div>

          {/* Copyright text */}
          <p className="text-xs text-slate-500">
            © 2024 Nusantara Trans Indonesia. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};
