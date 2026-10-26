import React, { useState, useEffect } from 'react';
import { Vehicle } from '../data/fleetData';
import { PICKUP_LOCATIONS } from '../data/toursData';

interface BookingModalProps {
  vehicle: Vehicle | null;
  isOpen: boolean;
  onClose: () => void;
  initialWithDriver?: boolean;
  initialStartDate?: string;
  initialDays?: number;
  initialLocationCode?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  vehicle,
  isOpen,
  onClose,
  initialWithDriver = true,
  initialStartDate,
  initialDays = 3,
  initialLocationCode = 'DPS',
}) => {
  if (!isOpen || !vehicle) return null;

  // Pricing & Date Logic
  const today = new Date().toISOString().split('T')[0];
  const [startDate, setStartDate] = useState<string>(initialStartDate || today);
  const [days, setDays] = useState<number>(initialDays);
  const [withDriver, setWithDriver] = useState<boolean>(
    vehicle.includesDriver ? true : initialWithDriver
  );

  // Add-ons
  const [addonInsurance, setAddonInsurance] = useState<boolean>(false);
  const [addonBabySeat, setAddonBabySeat] = useState<boolean>(false);
  const [addonAirportVip, setAddonAirportVip] = useState<boolean>(false);

  // Customer Contact
  const [locationCode, setLocationCode] = useState<string>(initialLocationCode);
  const [customAddress, setCustomAddress] = useState<string>('');
  const [pickupTime, setPickupTime] = useState<string>('09:00 WIB');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [specialNotes, setSpecialNotes] = useState<string>('');
  const [formError, setFormError] = useState<string>('');

  // Daily costs
  const baseDaily = vehicle.basePrice;
  // If vehicle already includes driver, driver fee is 0; otherwise +150,000 / day if chosen
  const driverFeeDaily = !vehicle.includesDriver && withDriver ? 150000 : 0;
  const insuranceFeeDaily = addonInsurance ? 50000 : 0;
  const babySeatFeeDaily = addonBabySeat ? 35000 : 0;
  const airportOneTime = addonAirportVip ? 75000 : 0;

  const totalDaily = baseDaily + driverFeeDaily + insuranceFeeDaily + babySeatFeeDaily;
  const grandTotal = totalDaily * days + airportOneTime;

  // Format currency
  const formatIdr = (num: number) => {
    return 'Rp ' + num.toLocaleString('id-ID');
  };

  // Compute End Date
  const calculateEndDate = (start: string, duration: number) => {
    const d = new Date(start);
    if (isNaN(d.getTime())) return start;
    d.setDate(d.getDate() + (duration - 1));
    return d.toISOString().split('T')[0];
  };

  const endDate = calculateEndDate(startDate, days);

  const selectedLocation =
    PICKUP_LOCATIONS.find((l) => l.code === locationCode)?.label || locationCode;

  const handleConfirmWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) {
      setFormError('Silakan masukkan nama lengkap Anda.');
      return;
    }
    if (!customerPhone.trim()) {
      setFormError('Silakan masukkan nomor WhatsApp Anda.');
      return;
    }
    setFormError('');

    const message = `Halo Nusantara Trans, saya ingin reservasi armada sewa:
*Armada*: ${vehicle.name} (${vehicle.categoryLabel})
*Layanan*: ${withDriver ? 'Dengan Sopir' : 'Lepas Kunci'}
*Durasi*: ${days} Hari (${startDate} s/d ${endDate})
*Lokasi Penjemputan*: ${selectedLocation} ${customAddress ? `(${customAddress})` : ''}
*Jam Jemput*: ${pickupTime}
*Add-on*: ${[
      addonInsurance ? 'Asuransi All-Risk' : '',
      addonBabySeat ? 'Kursi Bayi' : '',
      addonAirportVip ? 'Antar-Jemput VIP' : '',
    ]
      .filter(Boolean)
      .join(', ') || 'Tanpa Add-on'}
*Estimasi Total*: ${formatIdr(grandTotal)}

*Data Pemesan*:
- Nama: ${customerName}
- No. WhatsApp: ${customerPhone}
${specialNotes ? `- Catatan: ${specialNotes}` : ''}

Mohon konfirmasi ketersediaan unit dan jadwal ini. Terima kasih!`;

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

        {/* Modal Header */}
        <div className="flex items-center gap-4 border-b border-[#EAE6DF] dark:border-[#282E38] pb-5 mb-6">
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] shrink-0">
            <img
              src={vehicle.imageUrl}
              alt={vehicle.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/aistudio/Image_1_936f7feb.jpeg';
              }}
            />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[#9E7B1D] dark:text-[#C5A059] font-semibold">
              Kalkulator &amp; Pemesanan Sewa
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1E293B] dark:text-[#F1F5F9]">
              {vehicle.name}
            </h3>
            <div className="text-xs text-[#64748B] dark:text-[#94A3B8]">
              Tarif Dasar: <span className="font-bold text-[#9E7B1D] dark:text-[#C5A059]">{vehicle.priceFormatted}</span> {vehicle.priceUnit}
            </div>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleConfirmWhatsApp} className="space-y-6">
          {/* Driver Mode Selection */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8]">
              Opsi Pengemudi
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setWithDriver(true)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  withDriver
                    ? 'border-[#C5A059] bg-[#FBF7EC] dark:bg-[#262015] shadow-xs'
                    : 'border-[#EAE6DF] dark:border-[#282E38] bg-[#FAF9F6] dark:bg-[#1E232B]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#1E293B] dark:text-[#F1F5F9]">
                    Dengan Sopir
                  </span>
                  {withDriver && (
                    <span className="material-symbols-outlined text-[16px] text-[#C5A059]">
                      check_circle
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8]">
                  {vehicle.includesDriver
                    ? 'Sudah termasuk dalam tarif dasar'
                    : '+ Rp 150.000 / hari (bebas lelah)'}
                </p>
              </button>

              <button
                type="button"
                disabled={vehicle.includesDriver}
                onClick={() => setWithDriver(false)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  vehicle.includesDriver
                    ? 'opacity-50 cursor-not-allowed border-[#EAE6DF] dark:border-[#282E38]'
                    : !withDriver
                    ? 'border-[#C5A059] bg-[#FBF7EC] dark:bg-[#262015] shadow-xs cursor-pointer'
                    : 'border-[#EAE6DF] dark:border-[#282E38] bg-[#FAF9F6] dark:bg-[#1E232B] cursor-pointer'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#1E293B] dark:text-[#F1F5F9]">
                    Lepas Kunci
                  </span>
                  {!withDriver && (
                    <span className="material-symbols-outlined text-[16px] text-[#C5A059]">
                      check_circle
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8]">
                  {vehicle.includesDriver
                    ? 'Unit ini wajib dengan supir VIP'
                    : 'Kendali penuh, serah kunci cepat'}
                </p>
              </button>
            </div>
          </div>

          {/* Dates & Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] block mb-1.5">
                Mulai Sewa
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] block mb-1.5">
                Durasi Sewa
              </label>
              <select
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-3 py-2.5 text-xs sm:text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059]"
              >
                <option value={1}>1 Hari (24 Jam)</option>
                <option value={2}>2 Hari</option>
                <option value={3}>3 Hari</option>
                <option value={4}>4 Hari</option>
                <option value={5}>5 Hari</option>
                <option value={7}>7 Hari (1 Minggu)</option>
                <option value={10}>10 Hari</option>
                <option value={14}>14 Hari</option>
                <option value={30}>30 Hari (Bulanan)</option>
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] block mb-1.5">
                Jam Penjemputan
              </label>
              <select
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-3 py-2.5 text-xs sm:text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059]"
              >
                <option>07:00 WIB</option>
                <option>08:00 WIB</option>
                <option>09:00 WIB</option>
                <option>10:00 WIB</option>
                <option>12:00 WIB</option>
                <option>14:00 WIB</option>
                <option>18:00 WIB</option>
                <option>21:00 WIB</option>
              </select>
            </div>
          </div>

          {/* Location & Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] block mb-1.5">
                Area / Bandara Penjemputan
              </label>
              <select
                value={locationCode}
                onChange={(e) => setLocationCode(e.target.value)}
                className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059]"
              >
                {PICKUP_LOCATIONS.map((loc) => (
                  <option key={loc.code} value={loc.code}>
                    {loc.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] block mb-1.5">
                Alamat / Nama Hotel (Opsional)
              </label>
              <input
                type="text"
                placeholder="Contoh: Hotel Mulia Senayan / Villa Seminyak"
                value={customAddress}
                onChange={(e) => setCustomAddress(e.target.value)}
                className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059]"
              />
            </div>
          </div>

          {/* Optional Add-ons */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8]">
              Layanan Tambahan (Opsional)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <label className="flex items-center gap-2 p-2.5 rounded-xl border border-[#EAE6DF] dark:border-[#282E38] bg-[#FAF9F6] dark:bg-[#1E232B] cursor-pointer hover:border-[#C5A059]">
                <input
                  type="checkbox"
                  checked={addonInsurance}
                  onChange={(e) => setAddonInsurance(e.target.checked)}
                  className="rounded text-[#C5A059] focus:ring-[#C5A059]"
                />
                <span className="text-xs text-[#1E293B] dark:text-[#F1F5F9]">
                  Asuransi All-Risk (+50rb/hr)
                </span>
              </label>

              <label className="flex items-center gap-2 p-2.5 rounded-xl border border-[#EAE6DF] dark:border-[#282E38] bg-[#FAF9F6] dark:bg-[#1E232B] cursor-pointer hover:border-[#C5A059]">
                <input
                  type="checkbox"
                  checked={addonBabySeat}
                  onChange={(e) => setAddonBabySeat(e.target.checked)}
                  className="rounded text-[#C5A059] focus:ring-[#C5A059]"
                />
                <span className="text-xs text-[#1E293B] dark:text-[#F1F5F9]">
                  Kursi Balita (+35rb/hr)
                </span>
              </label>

              <label className="flex items-center gap-2 p-2.5 rounded-xl border border-[#EAE6DF] dark:border-[#282E38] bg-[#FAF9F6] dark:bg-[#1E232B] cursor-pointer hover:border-[#C5A059]">
                <input
                  type="checkbox"
                  checked={addonAirportVip}
                  onChange={(e) => setAddonAirportVip(e.target.checked)}
                  className="rounded text-[#C5A059] focus:ring-[#C5A059]"
                />
                <span className="text-xs text-[#1E293B] dark:text-[#F1F5F9]">
                  VIP Meet &amp; Greet (+75rb)
                </span>
              </label>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 pt-2 border-t border-[#EAE6DF] dark:border-[#282E38]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] block mb-1">
                  Nama Lengkap Pemesan *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Hendra Wijaya"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] block mb-1">
                  Nomor WhatsApp Aktif *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Contoh: 081234567890"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#64748B] dark:text-[#94A3B8] block mb-1">
                Catatan Tambahan (Opsional)
              </label>
              <input
                type="text"
                placeholder="Nomor penerbangan, request supir berbahasa Inggris, dll."
                value={specialNotes}
                onChange={(e) => setSpecialNotes(e.target.value)}
                className="w-full bg-[#FAF9F6] dark:bg-[#1E232B] border border-[#EAE6DF] dark:border-[#282E38] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1E293B] dark:text-[#F1F5F9] focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            {formError && (
              <p className="text-xs text-rose-500 font-medium">{formError}</p>
            )}
          </div>

          {/* Real-time Calculation Summary Box */}
          <div className="p-4 rounded-2xl bg-[#FBF7EC] dark:bg-[#262015] border border-[#E9DCB8] dark:border-[#544626] space-y-2">
            <div className="flex justify-between items-center text-xs text-[#64748B] dark:text-[#94A3B8]">
              <span>Sewa {vehicle.name} ({days} Hari)</span>
              <span className="font-medium text-[#1E293B] dark:text-[#F1F5F9]">
                {formatIdr(baseDaily * days)}
              </span>
            </div>

            {driverFeeDaily > 0 && (
              <div className="flex justify-between items-center text-xs text-[#64748B] dark:text-[#94A3B8]">
                <span>Biaya Supir Ramah ({days} Hari)</span>
                <span className="font-medium text-[#1E293B] dark:text-[#F1F5F9]">
                  +{formatIdr(driverFeeDaily * days)}
                </span>
              </div>
            )}

            {(insuranceFeeDaily > 0 || babySeatFeeDaily > 0 || airportOneTime > 0) && (
              <div className="flex justify-between items-center text-xs text-[#64748B] dark:text-[#94A3B8]">
                <span>Add-on Tambahan</span>
                <span className="font-medium text-[#1E293B] dark:text-[#F1F5F9]">
                  +{formatIdr((insuranceFeeDaily + babySeatFeeDaily) * days + airportOneTime)}
                </span>
              </div>
            )}

            <div className="pt-2 border-t border-[#E9DCB8] dark:border-[#544626] flex justify-between items-center">
              <div>
                <span className="text-xs font-bold text-[#1E293B] dark:text-[#F1F5F9] block">
                  Total Estimasi Sewa
                </span>
                <span className="text-[11px] text-[#64748B] dark:text-[#94A3B8]">
                  Periode {startDate} s/d {endDate}
                </span>
              </div>
              <div className="font-serif text-2xl font-bold text-[#9E7B1D] dark:text-[#C5A059]">
                {formatIdr(grandTotal)}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#9E7B1D] via-[#C5A059] to-[#E5C578] hover:brightness-105 text-white dark:text-[#0E1217] font-semibold text-sm py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(197,155,39,0.3)] hover:shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>Konfirmasi &amp; Hubungi WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};
