import React, { useState } from 'react';

interface CustomTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomTourModal: React.FC<CustomTourModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [destinations, setDestinations] = useState<string[]>(['Bali']);
  const [duration, setDuration] = useState<string>('3 Hari 2 Malam');
  const [vehiclePref, setVehiclePref] = useState<string>('Innova Zenix Hybrid');
  const [paxCount, setPaxCount] = useState<number>(4);
  const [hotelTier, setHotelTier] = useState<string>('Hotel Bintang 4');
  const [startDate, setStartDate] = useState<string>('2024-12-20');
  const [userName, setUserName] = useState<string>('');
  const [userPhone, setUserPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const toggleDestination = (dest: string) => {
    if (destinations.includes(dest)) {
      if (destinations.length > 1) {
        setDestinations(destinations.filter((d) => d !== dest));
      }
    } else {
      setDestinations([...destinations, dest]);
    }
  };

  const handleSendCustomTour = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim()) {
      setErrorMsg('Silakan isi nama Anda.');
      return;
    }
    if (!userPhone.trim()) {
      setErrorMsg('Silakan isi nomor WhatsApp Anda.');
      return;
    }
    setErrorMsg('');

    const message = `Halo Konsultan Nusantara Trans, saya ingin menyusun *Custom Rute Wisata Nusantara*:
*Destinasi*: ${destinations.join(' + ')}
*Durasi Tour*: ${duration}
*Prakiraan Berangkat*: ${startDate}
*Jumlah Peserta*: ${paxCount} Orang
*Pilihan Armada*: ${vehiclePref}
*Akomodasi Hotel*: ${hotelTier}
*Nama Pemesan*: ${userName}
*No. WhatsApp*: ${userPhone}
${notes ? `*Permintaan Khusus*: ${notes}` : ''}

Mohon bantu susun estimasi itinerary harian dan penawaran harga terbaik. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6281234567890?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white dark:bg-[#181C22] text-[#1E293B] dark:text-[#F1F5F9] rounded-3xl border border-[#E4D4A8] dark:border-[#4E4228] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FAF9F6] dark:bg-[#1E232B] hover:bg-[#FBF7EC] dark:hover:bg-[#262015] border border-[#EAE6DF] dark:border-[#282E38] text-[#64748B] dark:text-[#94A3B8] hover:text-[#1E293B] dark:hover:text-[#F1F5F9] flex items-center justify-center transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="border-b border-[#EAE6DF] dark:border-[#282E38] pb-4 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF7EC] dark:bg-[#262015] border border-[#E9DCB8] dark:border-[#544626] text-[#9E7B1D] dark:text-[#C5A059] text-xs font-semibold uppercase tracking-wider mb-2">
            <span className="material-symbols-outlined text-[15px]">route</span>
            Custom Itinerary Builder
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E293B] dark:text-[#F1F5F9]">
            Rancang Custom Rute Wisata Impian
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] mt-1">
            Bebas pilih destinasi, durasi liburan, dan tipe armada. Tim konsultan kami akan menyusun rute paling efisien dengan harga resmi.
          </p>
        </div>

        <form onSubmit={handleSendCustomTour} className="space-y-6">
          {/* Destination Selector */}
          <div>
            <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] block mb-2">
              1. Pilih Destinasi yang Ingin Dikunjungi (Bisa Multi-Pilihan)
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                'Bali (Kuta, Ubud, Bedugul)',
                'Bromo & Kawah Ijen',
                'Malang & Kota Batu',
                'Yogyakarta & Borobudur',
                'Labuan Bajo & Komodo',
                'Bandung & Lembang',
                'Lombok & Gili Trawangan',
              ].map((dest) => {
                const selected = destinations.includes(dest);
                return (
                  <button
                    key={dest}
                    type="button"
                    onClick={() => toggleDestination(dest)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      selected
                        ? 'bg-gradient-to-r from-[#9E7B1D] to-[#C5A059] text-white dark:text-[#0E1217] shadow-xs'
                        : 'bg-[#FAF9F6] dark:bg-[#1E232B] text-[#1E293B] dark:text-[#94A3B8] border border-[#EAE6DF] dark:border-[#282E38] hover:border-[#C5A059]'
                    }`}
                  >
                    {selected ? '✓ ' : '+ '}
                    {dest}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Duration & Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] block mb-1.5">
                2. Estimasi Durasi Perjalanan
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059]"
              >
                <option>1 Hari (Day Tour / Midnight)</option>
                <option>2 Hari 1 Malam</option>
                <option>3 Hari 2 Malam (Paling Populer)</option>
                <option>4 Hari 3 Malam</option>
                <option>5 Hari 4 Malam</option>
                <option>7 Hari 6 Malam (Grand Tour)</option>
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] block mb-1.5">
                3. Prakiraan Tanggal Berangkat
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059]"
              />
            </div>
          </div>

          {/* Vehicle & Hotel Tier */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] block mb-1.5">
                4. Preferensi Armada
              </label>
              <select
                value={vehiclePref}
                onChange={(e) => setVehiclePref(e.target.value)}
                className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-3 py-2.5 text-xs sm:text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059]"
              >
                <option>Toyota All New Avanza</option>
                <option>Innova Zenix Hybrid (Favorit)</option>
                <option>Pajero Sport Dakar 4x4</option>
                <option>Toyota Alphard VIP</option>
                <option>HiAce Premio Luxury (Rombongan)</option>
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] block mb-1.5">
                5. Jumlah Peserta (Pax)
              </label>
              <select
                value={paxCount}
                onChange={(e) => setPaxCount(Number(e.target.value))}
                className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-3 py-2.5 text-xs sm:text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059]"
              >
                <option value={2}>2 Orang (Pasangan)</option>
                <option value={4}>4 Orang (Keluarga Kecil)</option>
                <option value={6}>6 Orang</option>
                <option value={8}>8 - 10 Orang</option>
                <option value={14}>12 - 14 Orang (Van Rombongan)</option>
                <option value={20}>20+ Orang (Bus Pariwisata)</option>
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] block mb-1.5">
                6. Opsi Hotel / Penginapan
              </label>
              <select
                value={hotelTier}
                onChange={(e) => setHotelTier(e.target.value)}
                className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-3 py-2.5 text-xs sm:text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059]"
              >
                <option>Hotel Bintang 4 (Rekomendasi)</option>
                <option>Resort Bintang 5 / Luxury Villa</option>
                <option>Hotel Bintang 3 Nyaman</option>
                <option>Tanpa Hotel (Hanya Transport &amp; Guide)</option>
              </select>
            </div>
          </div>

          {/* User Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#EAE6DF] dark:border-[#282E38]">
            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] block mb-1">
                Nama Lengkap *
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: dr. Sarah Anindita"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] block mb-1">
                Nomor WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="Contoh: 081234567890"
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059]"
              />
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] block mb-1">
              Catatan Khusus / Keinginan Spesifik
            </label>
            <textarea
              rows={2}
              placeholder="Contoh: Ada anak kecil dan orang tua, butuh rute santai tanpa trekking berat, request kuliner halal, dll."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059]"
            />
          </div>

          {errorMsg && (
            <p className="text-xs text-rose-500 font-medium">{errorMsg}</p>
          )}

          {/* Action Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#9E7B1D] via-[#C5A059] to-[#E5C578] hover:brightness-105 text-white dark:text-[#0E1217] font-semibold text-sm py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(197,155,39,0.3)] hover:shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
            <span>Kirim Rancangan Rute ke WhatsApp Konsultan</span>
          </button>
        </form>
      </div>
    </div>
  );
};
