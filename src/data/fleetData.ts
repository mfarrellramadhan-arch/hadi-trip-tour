export interface Vehicle {
  id: string;
  name: string;
  category: 'mpv' | 'suv' | 'city' | 'van';
  categoryLabel: string;
  basePrice: number;
  priceFormatted: string;
  priceUnit: string;
  priceNote: string;
  includesDriver: boolean;
  transmission: string;
  capacity: string;
  fuelType: string;
  specialFeature: string;
  imageUrl: string;
  description: string;
  specs: {
    engine: string;
    fuelTank: string;
    doors: number;
    luggage: string;
    year: string;
    airConditioning: string;
  };
  inspectionPoints: string[];
  requirements: string[];
}

export const FLEET_DATA: Vehicle[] = [
  {
    id: 'toyota-avanza',
    name: 'Toyota All New Avanza',
    category: 'mpv',
    categoryLabel: 'MPV Favorit',
    basePrice: 350000,
    priceFormatted: 'Rp 350.000',
    priceUnit: '/ hari',
    priceNote: 'Mulai dari',
    includesDriver: false,
    transmission: 'Automatic / CVT',
    capacity: '7 Penumpang',
    fuelType: 'Bensin Hemat',
    specialFeature: 'Double Blower',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-bgPzOMW4lUdEaOMgDB-xn2HyGtgaogtyHJtxZrmS6kG_X_3pRREYXBlnwL_dRvKHqw0nS9jDMPbRutaVb2slsj6hG-qPdzz-pw-pkSOFd5K7V1pDK40eWBs-bS3acGxc4hdGastjSzKIVYeQeBrJrEJPnaHm_jl_aqQ_HWEOlA_W2t1e1aBi_xn8yZMkyk1PhnBK-9ThAY_FDsMtdkmGYMS-UR3qCobamR6yNtE',
    description: 'Mobil keluarga terpopuler di Indonesia dengan kabin lega, suspensi empuk, dan efisiensi bahan bakar optimal. Sangat cocok untuk perjalanan dalam kota maupun antar-kota di Jawa dan Bali.',
    specs: {
      engine: '1.5L Dual VVT-i 4-Silinder',
      fuelTank: '43 Liter (1:14 km/l)',
      doors: 5,
      luggage: '3 Koper Sedang + 2 Ransel',
      year: '2023 - 2024',
      airConditioning: 'AC Digital Double Blower Dingin Merata',
    },
    inspectionPoints: [
      'Pengecekan rem cakram & kampas rem',
      'Kondisi ban (ketebalan ulir > 85%) & tekanan angin',
      'Pembersihan filter kabin & disinfeksi ozone AC',
      'Level oli mesin, radiator coolant, & minyak rem',
      'Sistem lampu depan, rem, dan sein 100% aktif',
      'Pembersihan interior menyeluruh (wangi showroom)',
    ],
    requirements: [
      'KTP Asli Penyewa',
      'SIM A Aktif',
      'Deposit jaminan aman (dikembalikan penuh saat serah terima)',
      'Opsi lepas kunci atau dengan supir profesional',
    ],
  },
  {
    id: 'innova-zenix',
    name: 'Innova Zenix Hybrid',
    category: 'mpv',
    categoryLabel: 'Executive MPV',
    basePrice: 750000,
    priceFormatted: 'Rp 750.000',
    priceUnit: '/ hari',
    priceNote: 'Mulai dari',
    includesDriver: false,
    transmission: 'Automatic E-CVT',
    capacity: '7 Penumpang (Captain Seat)',
    fuelType: 'Hybrid / Senyap',
    specialFeature: 'Captain Seat & EV Mode',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBzRNKZ0rXqECzMkW5eo2ugi1c1jmgs8IV2HFOc1mdTb3k38-7M6bivGpYBwxuYfiu4Jo7xwDvTTdfboTwcON2YeooLQU6Mi90IoeK0jOZCKp3gl5h-JW7ig9vtgjvwuDJjxkhBUwgSMsT77L3v7XGEk0r8RubtLbmZdP50BsNtwnvOCtKZwCpKH6pg9MXgn79cYYUZut3U-YSDWnbwdf9CIutvjy2ghrhpL5ZEfY',
    description: 'Pilihan utama direksi, pejabat, dan tamu kehormatan. Menggunakan platform TNGA dengan mesin hybrid canggih yang luar biasa senyap, kursi captain seat baris kedua dengan ottoman, dan suspensi sekelas sedan premium.',
    specs: {
      engine: '2.0L Hybrid Synergy Drive Dual VVT-i',
      fuelTank: '52 Liter (Sangat Irit 1:20 km/l)',
      doors: 5,
      luggage: '4 Koper Besar + 2 Koper Kabin',
      year: '2024 Terbaru',
      airConditioning: 'Dual Zone Automatic Climate Control',
    },
    inspectionPoints: [
      'Pemeriksaan baterai hybrid & motor listrik',
      'Pengecekan sistem pengereman regenerative',
      'Kalibrasi radar Toyota Safety Sense (TSS)',
      'Inspeksi kursi elektrik & sandaran kaki captain seat',
      'Sterilisasi uap interior tanpa bau asap rokok',
      'Sertifikat kelayakan operasional VIP',
    ],
    requirements: [
      'KTP & Kartu Nama / ID Perusahaan (untuk instansi)',
      'SIM A Pengemudi',
      'Layanan antar-jemput bandara gratis untuk sewa min. 3 hari',
      'Tersedia opsi pengemudi berseragam jas resmi',
    ],
  },
  {
    id: 'pajero-sport',
    name: 'Pajero Sport Dakar',
    category: 'suv',
    categoryLabel: 'Tangguh 4x4',
    basePrice: 1100000,
    priceFormatted: 'Rp 1.100.000',
    priceUnit: '/ hari',
    priceNote: 'Mulai dari',
    includesDriver: false,
    transmission: '8-Speed Automatic',
    capacity: '7 Penumpang',
    fuelType: 'Diesel VGT',
    specialFeature: 'Torsi Besar 430 Nm',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYnjzq-WhHfodU3DcMMl2F8MB5_z0aqGWvit_bBIH_h80zO3US7O2259m9uyKGSvS_bYfA9GREpcGazGx7YYY3dLHw6-bZR-yThVsslb4OD6sFHIpelDawwLQ1UaFrnrdH3nxb2nnsh1szhLHhvFYuZorS6YrnA3VUyODdLLNymE83ttcOOPYatlE6LIl3k-wfWPNoE66_fefXE6MA72gQv3IspGBMsvRDsfBclhI',
    description: 'SUV maskulin bertenaga tinggi yang siap menaklukkan berbagai kontur jalan perbukitan, pegunungan Bromo, hingga jalan lintas pulau. Ground clearance tinggi 218 mm memastikan perjalanan selalu aman dan nyaman.',
    specs: {
      engine: '2.4L MIVEC Turbo Diesel Intercooled',
      fuelTank: '68 Liter Diesel Euro 4',
      doors: 5,
      luggage: '4 Koper Besar + Peralatan Outdoor',
      year: '2023 - 2024',
      airConditioning: 'Dual Climate Control + Roof Air Ducts',
    },
    inspectionPoints: [
      'Pengecekan sistem transmisi 4WD / Super Select II',
      'Pemeriksaan suspensi kejut off-road & arm bushing',
      'Uji tekanan ban All-Terrain & ban serep',
      'Pengujian turbocharger & injektor diesel',
      'Inspeksi kamera 360 derajat & sensor parkir',
      'Pencucian sasis dan poles bodi tanpa goresan',
    ],
    requirements: [
      'KTP Asli Penyewa',
      'SIM A Masih Berlaku',
      'Pengalaman berkendara SUV besar direkomendasikan',
      'Tersedia supir berpengalaman rute pegunungan',
    ],
  },
  {
    id: 'toyota-alphard',
    name: 'Toyota Alphard VIP',
    category: 'suv',
    categoryLabel: 'VVIP Luxury',
    basePrice: 2200000,
    priceFormatted: 'Rp 2.200.000',
    priceUnit: '/ hari',
    priceNote: 'Termasuk Sopir',
    includesDriver: true,
    transmission: 'Automatic Luxury',
    capacity: 'Ottoman Seats (7 Seats)',
    fuelType: 'Bensin Premium',
    specialFeature: 'Driver Berpakaian Rapi & BBM',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA919jkkZbNFevPlf3czAy9uvb9OeYpt51xNWONF94PuAeqAp91_ZZaP2WYqBCi8tnX7UXbJZ1fqodDgEzkcl-yo7dtPKq7eL7hZSigiTZYUmxMabtD3k2MiIFj8COJ4MK2Mepxyu6G4eZa1Zg7YP3nx_9YIG6X6ywzv3jj2EFY9ODNNc5LifX_2egHBd_xJIIJ3LLowwA_W7xItiOPXaQ1ScRQlwBN9S28noe-wk',
    description: 'Kemewahan paripurna untuk menyambut VIP, artis, pebisnis, atau pernikahan impian. Dilengkapi kursi Ottoman elektrik, sunshade privasi, ambient lighting 16 warna, suspensi super lembut, dan supir terlatih standar kepresidenan.',
    specs: {
      engine: '2.5L DOHC Dual VVT-i CVT',
      fuelTank: '75 Liter',
      doors: 5,
      luggage: '5 Koper Mewah + Bagasi Ekstra',
      year: '2023 - 2024 Facelift',
      airConditioning: 'Triple-Zone Nanoe™ X Air Purifier',
    },
    inspectionPoints: [
      'Pembersihan mendalam jok kulit asli Nappa leather',
      'Pengecekan fungsi motor sliding door otomatis kedua sisi',
      'Pemeriksaan sunroof dan ambient cabin lighting',
      'Penyemprotan disinfektan medis & pengharum aromaterapi lembut',
      'Uji kelancaran sistem audio JBL 17-Speaker',
      'Pengecekan seragam & kelayakan lisensi driver bintang lima',
    ],
    requirements: [
      'Pemesanan minimal 24 jam sebelum jadwal',
      'Tarif sudah all-in termasuk Driver profesional & BBM',
      'Protokol kerahasiaan rute penumpang (Non-Disclosure)',
      'Penyambutan VIP di pintu bandara dengan signage nama',
    ],
  },
  {
    id: 'hiace-premio',
    name: 'HiAce Premio Luxury',
    category: 'van',
    categoryLabel: 'Rombongan Nyaman',
    basePrice: 1400000,
    priceFormatted: 'Rp 1.400.000',
    priceUnit: '/ hari',
    priceNote: 'Termasuk Driver',
    includesDriver: true,
    transmission: 'Manual / Matic',
    capacity: '12 - 14 Kursi Reclining',
    fuelType: 'Diesel Ramah Lingkungan',
    specialFeature: 'Karaoke & Audio Set',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXlC4a251fxlBTregyxVX0RaZJlr5Cy6x4Ejt45HVVQwq8TyRdhe5QFwxWD-THUuhJL9rGLlpgQ_Y9Pd1LZ5vSlgb64ARaAg6Qf86WefPGzXMMi6t18Q6IeHaT12Nu12jeOQuo4wSNDhly_U8wPj1z_DAyt_-c2lHgH6ahwKJ2okSr0Y8w4lWgTZgAmmKRlq5iCm6g1dN7wPsWb43uLlaEtVtjx27zHCwi7STvRC8',
    description: 'Armada van pariwisata eksekutif paling diandalkan untuk rombongan keluarga besar, gathering perusahaan, atau tur nusantara. Desain atap tinggi (high-roof) memungkinkan penumpang bergerak leluasa tanpa membungkuk.',
    specs: {
      engine: '2.8L 1GD-FTV Common Rail Turbo Diesel',
      fuelTank: '70 Liter',
      doors: 4,
      luggage: 'Bagasi Belakang Luas (10+ Koper Rombongan)',
      year: '2023 - 2024',
      airConditioning: 'AC Individual Setiap Baris Kursi',
    },
    inspectionPoints: [
      'Pemeriksaan sistem rem berbeban berat (ABS + VSC)',
      'Inspeksi seluruh tuas kursi reclining & seatbelt 3 titik',
      'Pengujian mikroklimat AC individual tiap baris penumpang',
      'Pemeriksaan fasilitas hiburan smart TV & port USB charger',
      'Pemeriksaan tapak ban radial komersial',
      'Supir berpengalaman rute wisata Jawa-Bali-Lombok',
    ],
    requirements: [
      'Termasuk Driver berlisensi resmi pariwisata',
      'Pemberitahuan estimasi rute luar kota',
      'Rekomendasi terbaik untuk delegasi 8 hingga 14 orang',
      'Bantuan penanganan koper saat tiba di terminal / bandara',
    ],
  },
  {
    id: 'honda-brio',
    name: 'Honda Brio RS',
    category: 'city',
    categoryLabel: 'City Car Gesit',
    basePrice: 300000,
    priceFormatted: 'Rp 300.000',
    priceUnit: '/ hari',
    priceNote: 'Mulai dari',
    includesDriver: false,
    transmission: 'Automatic CVT',
    capacity: '5 Penumpang',
    fuelType: 'Sangat Irit BBM',
    specialFeature: 'Parkir Mudah & Gesit',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlXyVKJ4PJ9Aoud8PWvfzRpwqt4LsO_slktZGsiPTxrMKznbaOJ1O-1_h0T-Gb_MupCpl6uf-qqAqE_Ha1aPvGc8Kpj3ulAzIK-DS4r-fKqQ7cWv53RfrgIfRcLxe2qEFKXqXVAO1GITJBFVFuBK-fqRIrT_ZC4ZJJR6qpCp3BMvd6-xGAnki_VU_Ni450Jz6mk8d-o_QROIIdaVZwS-vR7ApE9-jV7JujNkqJiS0',
    description: 'Hatchback lincah dan sangat hemat bahan bakar, cocok untuk menjelajahi gang-gang kuliner Jogja, kawasan Seminyak Bali, atau menembus padatnya lalu lintas Jakarta. Sangat ramah untuk solo traveler dan pasangan.',
    specs: {
      engine: '1.2L i-VTEC 4-Silinder',
      fuelTank: '35 Liter (1:18 km/l sangat hemat)',
      doors: 5,
      luggage: '2 Koper Kabin + 2 Ransel',
      year: '2023 - 2024 Facelift',
      airConditioning: 'AC Digital Kompak Cepat Dingin',
    },
    inspectionPoints: [
      'Pengecekan rem depan cakram & teromol belakang',
      'Pemeriksaan kelistrikan aki & alternator',
      'Uji responsivitas transmisi matic CVT',
      'Pembersihan karpet & jok bersih steril',
      'Pengujian wiper kaca depan & belakang',
      'Pengecekan kelengkapan toolkit, dongkrak, & ban serep',
    ],
    requirements: [
      'KTP Asli Penyewa',
      'SIM A Aktif',
      'Proses serah terima kilat (10 menit di bandara/stasiun)',
      'Opsi lepas kunci atau dengan supir ramah',
    ],
  },
];
