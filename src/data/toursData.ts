export interface TourPackage {
  id: string;
  title: string;
  departure: string;
  durationBadge: string;
  durationDays: number;
  pricePerPax: number;
  priceFormatted: string;
  description: string;
  imageUrl: string;
  inclusions: string[];
  exclusions: string[];
  highlights: string[];
  itinerary: { day: string; title: string; activities: string[] }[];
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'bromo-midnight',
    title: 'Bromo Midnight & Sunrise Tour',
    departure: 'Malang / Surabaya Departure',
    durationBadge: '1 Hari (Midnight)',
    durationDays: 1,
    pricePerPax: 450000,
    priceFormatted: 'Rp 450.000',
    description: 'Penanjakan Sunrise Viewpoint, Kawah Bromo aktif, Pasir Berbisik, dan Bukit Teletubbies.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0vthdsrPqrryK0LnTYT7NbBa-xdL2liJgkD0xU_NMwAAMH1qqC9djan5BA4Tg7e1MibdPh3hyrezOCSTHcT7aZ8fVfjID7UXgtAEBsCARlJVyxAnXdNjHZrxTBqusYEheQq4-1dibxJL-yENkdyoKn7FUx5N4BCD0Ev3sZ5yZpu7UU_kyTsbPPV8-cNHZkJDZclssONHHqrQ-QlL0528FZGWbReVJaIDHHmLWr7o',
    inclusions: [
      'Jeep Hardtop 4x4 Privat All-Route',
      'Tiket Masuk TNBTS (Taman Nasional Bromo Tengger Semeru)',
      'Guide Lokal Berpengalaman & Masker Gas',
      'Antar Jemput Hotel di Malang / Surabaya',
      'Air Mineral & Sarapan Ringan Hangat',
      'Asuransi Jiwa Perjalanan Wisata',
    ],
    exclusions: [
      'Sewa Kuda di Lautan Pasir (opsional)',
      'Pengeluaran pribadi & jaket sewa',
      'Makan siang di luar paket',
    ],
    highlights: [
      'Menyaksikan Golden Sunrise tercantik di dunia dari Puncak Penanjakan 1',
      'Mendaki 250 anak tangga menuju bibir kawah aktif Gunung Bromo',
      'Sesi foto estetik bersama Jeep klasik di Lautan Pasir Berbisik',
      'Menikmati keasrian lembah hijau Bukit Teletubbies & Savana Bromo',
    ],
    itinerary: [
      {
        day: 'Malam - Subuh (Day 1)',
        title: 'Penjemputan & Sunrise Bromo',
        activities: [
          '00.00 - Penjemputan di hotel/stasiun Malang atau Surabaya dengan mobil privat',
          '02.30 - Tiba di transit point Bromo, transit pindah ke armada Jeep 4x4',
          '04.00 - Tiba di Spot Sunrise Penanjakan 1 / Kingkong Hill, briefing guide',
          '05.15 - Menikmati momen Golden Sunrise spektakuler dengan latar Gunung Batok & Semeru',
        ],
      },
      {
        day: 'Pagi - Siang (Day 1)',
        title: 'Eksplorasi Kaldera & Kembali',
        activities: [
          '06.30 - Turun ke Lautan Pasir, jalan kaki / berkuda ke Pura Luhur Poten & Kawah Bromo',
          '08.30 - Kunjungan ke Pasir Berbisik & Bukit Widodaren untuk foto ikonik',
          '09.30 - Bersantai di Savana Bukit Teletubbies',
          '11.00 - Sarapan hangat & perjalanan kembali ke hotel / bandara',
        ],
      },
    ],
  },
  {
    id: 'pesona-bali',
    title: 'Pesona Bali Romantic & Family',
    departure: 'Bali Island Tour',
    durationBadge: '3 Hari 2 Malam',
    durationDays: 3,
    pricePerPax: 1850000,
    priceFormatted: 'Rp 1.850.000',
    description: 'Eksplorasi Ubud, Kintamani, Pantai Melasti, Tari Kecak Uluwatu, dan sunset dinner di Jimbaran.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCndcieWoHg5wmUfkQApWOApaIvdSmt_2JD_EqH02Z6GR2JOB4QP_0zm24OavWEHA6hmzdVuys3vljyr-0_ZzgMLkI8T60f2XQ0GUaQ29Ry04EcXWPhjIUcC9XXJboR1NKVrmpoVJm1gHbK1XfQDUTGALM0ruGSiq6-pJV9T7_2xw4YQhl7bkxXNL2Pilll9MnLtr0uaqD6k8fGbJkUhtZ5EQtVfFVvuHSGNsHqMpw',
    inclusions: [
      'Mobil Privat Ber-AC + Driver Pariwisata Ramah + BBM',
      'Hotel Bintang 4 di Area Kuta / Seminyak (2 Malam)',
      'Makan 3x Sehari (termasuk Romantic Seafood Dinner Jimbaran)',
      'Tiket Masuk Semua Objek Wisata & Pertunjukan Tari Kecak',
      'Dokumentasi Foto & Kalungan Bunga Sambutan di Bandara',
      'Tol, Parkir, & Air Mineral Dingin di Mobil',
    ],
    exclusions: [
      'Tiket Pesawat ke/dari Bali',
      'Wahana Watersport Tanjung Benoa (opsional)',
      'Tipping sukarela untuk driver / pemandu',
    ],
    highlights: [
      'Pemandangan danau dan kaldera Gunung Batur di Kintamani',
      'Nuansa mistis & sunset dramatis Candi Uluwatu dengan Tari Kecak',
      'Pantai berpasir putih Melasti dengan tebing kapur megah',
      'Makan malam seafood segar tepi pantai di bawah taburan lilin Jimbaran',
    ],
    itinerary: [
      {
        day: 'Hari 1',
        title: 'Kedatangan, Pantai Melasti & Sunset Uluwatu',
        activities: [
          'Penjemputan di Bandara Ngurah Rai Bali dengan kalungan bunga',
          'Mengunjungi tebing Pantai Melasti Ungasan',
          'Nonton pertunjukan Tari Kecak Uluwatu saat senja',
          'Makan malam seafood Jimbaran & check-in hotel',
        ],
      },
      {
        day: 'Hari 2',
        title: 'Pesona Budaya Ubud & Danau Batur Kintamani',
        activities: [
          'Sarapan di hotel & meluncur ke Alas Harum Tegalalang Ubud',
          'Makan siang buffet menghadap pemandangan Danau Batur Kintamani',
          'Kunjungan ke Desa Tradisional Penglipuran (Desa terbersih di dunia)',
          'Belanja oleh-oleh khas Bali di Krisna Sunset Road',
        ],
      },
      {
        day: 'Hari 3',
        title: 'Pura Tanah Lot & Pengantaran Bandara',
        activities: [
          'Sarapan santai & check-out hotel',
          'Mengunjungi Pura Tanah Lot yang megah di atas batu karang samudera',
          'Pusat pie susu asli Bali & pengantaran kembali ke Bandara Ngurah Rai',
        ],
      },
    ],
  },
  {
    id: 'labuan-bajo',
    title: 'Labuan Bajo & Komodo Sailing',
    departure: 'Labuan Bajo Archipelago',
    durationBadge: '3 Hari 2 Malam',
    durationDays: 3,
    pricePerPax: 2950000,
    priceFormatted: 'Rp 2.950.000',
    description: 'Pulau Padar, Pink Beach, Manta Point Snorkeling, Pulau Komodo Ranger, dan Taka Makassar.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGSPLAiS0uRk8L1JQifhzhl3lXyKmyAn79D7r6Vnq1SdFZFpONzAsm9X2anMeOkWkpOG2hLC904nD1hL28pYRYZ7rfI2so0YnkRpW8XozZn9z3sEoGLonQLSRd30n3n4bOkWvBKNmp1IMChXvV-eBYlixG9tc1PjQ3nYLybcAzvxVQo0SAJ0Bj0YvP34ri50PSZNQKOfiyyL7HKYo1p2KdVfw5_FKbk5Gv_dtTX70',
    inclusions: [
      'Kabin AC di Kapal Phinisi Semi-Luxury (Liveaboard)',
      'Kapten, Kru Kapal, & Chef Pribadi di Atas Kapal',
      'Makan Pagi, Siang, & Malam Masakan Segar Nusantara',
      'Peralatan Lengkap Snorkeling (Masker, Snorkel, Fin)',
      'Dokumentasi Drone & Foto Underwater GoPro',
      'Antar Jemput Hotel / Bandara Komodo ke Pelabuhan',
    ],
    exclusions: [
      'Tiket Penerbangan ke Labuan Bajo (LBJ)',
      'Tiket Taman Nasional Komodo (dibayar langsung saat masuk)',
      'Keperluan laundry dan alkohol pribadi',
    ],
    highlights: [
      'Trekking ke puncak ikonik Pulau Padar dengan 3 lekukan pantai berbeda warna',
      'Melihat langsung kadal purba Komodo bersama Ranger terlatih',
      'Berenang bersama Ikan Pari Manta raksasa di Manta Point',
      'Menginap di kapal Phinisi kayu berlayar di bawah langit bertabur bintang',
    ],
    itinerary: [
      {
        day: 'Hari 1',
        title: 'Boarding Kapal Phinisi & Pulau Kelor',
        activities: [
          'Penjemputan di Bandara Komodo dan transfer ke Pelabuhan Labuan Bajo',
          'Welcome drink & pengenalan kabin kapal phinisi',
          'Sailing ke Pulau Kelor untuk trekking dan foto lanskap',
          'Sunset spektakuler di Pulau Kalong menyaksikan ribuan kelelawar terbang',
        ],
      },
      {
        day: 'Hari 2',
        title: 'Pulau Padar, Pink Beach & Komodo',
        activities: [
          'Subuh trekking Puncak Padar menyambut matahari terbit spektakuler',
          'Snorkeling & foto di hamparan pasir merah muda Pink Beach',
          'Eksplorasi Pulau Komodo mencari habitat asli satwa purba',
          'Berenang di gundukan pasir putih tengah laut Taka Makassar',
        ],
      },
      {
        day: 'Hari 3',
        title: 'Manta Point, Kanawa & Kepulangan',
        activities: [
          'Snorkeling seru bersama kawanan Manta Ray liar',
          'Bersantai di terumbu karang pulau Kanawa',
          'Sailing santai kembali ke Pelabuhan Labuan Bajo & diantar ke bandara',
        ],
      },
    ],
  },
  {
    id: 'jogja-heritage',
    title: 'Jogja Heritage & Merapi Lava Tour',
    departure: 'Yogyakarta Istimewa',
    durationBadge: '2 Hari 1 Malam',
    durationDays: 2,
    pricePerPax: 850000,
    priceFormatted: 'Rp 850.000',
    description: 'Candi Borobudur, Candi Prambanan, Lava Tour Jeep Merapi, dan kuliner khas Malioboro.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFTnpmir3DdN99YZ8BpuUXUBisZ8V99v54ByRlFl06YFAt1wsOX-NtOMCEO5EySPZdO-Uea-Ha9aZQizTHv7RXOlDT5wO24Ra9ARfbKfryaO3VLl4nah9PamVEqIdwqgojpxjgF5-Errqdf7Rob5gjsHgFzsgJ9uTu2nRFTbAkiUVQ7u9Go4fRZJrB6cfvV2qME0IRKzTV6X8eaTbbM6QpvK33eOFV5tjMGdw13i4',
    inclusions: [
      'Mobil Privat + Driver Ramah Jogja + BBM',
      'Jeep 4x4 Terbuka Lava Tour Merapi (Short/Medium Route)',
      'Tiket Masuk Candi Borobudur & Candi Prambanan Terusan',
      'Hotel Nyaman di Pusat Kota Dekat Malioboro (1 Malam)',
      'Makan 2x Kuliner Khas (Gudeg Yu Djum & Kopi Klotok)',
      'Penjemputan dari Bandara YIA / Stasiun Tugu',
    ],
    exclusions: [
      'Naik ke struktur atas stupa Borobudur (kuota khusus regulasi UNESCO)',
      'Belanja oleh-oleh pribadi di Malioboro',
      'Tiket kereta / pesawat ke Jogja',
    ],
    highlights: [
      'Menyusuri mahakarya arsitektur Buddha terbesar di dunia di Candi Borobudur',
      'Pacu adrenalin dengan Jeep off-road melewati Bunker Kaliadem & sungai Merapi',
      'Romantisme senja kemegahan relief Candi Prambanan',
      'Nongkrong santai mencicipi kopi tubruk dan pisang goreng Kopi Klotok Pakem',
    ],
    itinerary: [
      {
        day: 'Hari 1',
        title: 'Borobudur & Petualangan Merapi Jeep',
        activities: [
          'Penjemputan di Stasiun Tugu / Bandara YIA oleh driver',
          'Mengunjungi Candi Borobudur dengan pemandangan pegunungan Menoreh',
          'Makan siang masakan tradisional Jogja',
          'Lava Tour Jeep Merapi: Museum Sisa Hartaku, Batu Alien, dan manuver Kali Kuning',
          'Check-in hotel & jalan malam di pedestrian Malioboro',
        ],
      },
      {
        day: 'Hari 2',
        title: 'Prambanan, Kraton & Pusat Bakpia',
        activities: [
          'Sarapan pagi legendaris di Kopi Klotok Pakem',
          'Kunjungan budaya ke Kraton Ngayogyakarta & Tamansari Water Castle',
          'Eksplorasi kemegahan Candi Hindu Prambanan',
          'Singgah di sentra Bakpia Kukus Tugu & pengantaran ke stasiun/bandara',
        ],
      },
    ],
  },
];

export const PICKUP_LOCATIONS = [
  { code: 'CGK', city: 'Jakarta', label: 'Bandara Soekarno-Hatta (Jakarta)' },
  { code: 'HLP', city: 'Jakarta', label: 'Bandara Halim Perdanakusuma (Jakarta)' },
  { code: 'DPS', city: 'Bali', label: 'Bandara Ngurah Rai (Bali)' },
  { code: 'JOG', city: 'Yogyakarta', label: 'Stasiun Tugu / Bandara YIA (Yogyakarta)' },
  { code: 'MLG', city: 'Malang', label: 'Stasiun Kotabaru / Hotel (Malang)' },
  { code: 'SUB', city: 'Surabaya', label: 'Bandara Juanda / Stasiun Gubeng (Surabaya)' },
  { code: 'BDO', city: 'Bandung', label: 'Stasiun Bandung / Pasteur (Bandung)' },
  { code: 'LBJ', city: 'Labuan Bajo', label: 'Bandara Komodo / Pelabuhan (Labuan Bajo)' },
];
