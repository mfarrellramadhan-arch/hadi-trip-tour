# Hadi Trip - Tour & Travel

Website profil dan pemesanan untuk layanan rental mobil serta paket wisata Hadi Trip. Aplikasi ini dibangun dengan React dan TypeScript, dengan antarmuka yang responsif untuk membantu pengguna mencari layanan, melihat armada dan paket wisata, serta mengisi formulir pemesanan.

> **Status:** Dalam pengembangan. Beberapa alur pada antarmuka masih berupa interaksi sisi klien dan belum terhubung ke layanan pemesanan atau backend.

## Fitur

- Pencarian rental mobil dan paket wisata.
- Katalog armada dengan detail kendaraan dan kalkulator pemesanan.
- Daftar paket wisata beserta detail dan formulir permintaan tur khusus.
- Tema terang dan gelap.
- Bagian informasi layanan, testimoni, konsultasi, dan kontak.

## Teknologi

- React 19 dan TypeScript
- Vite
- Tailwind CSS 4
- Lucide React
- Motion

## Persyaratan

- Node.js 20 atau lebih baru
- npm

## Menjalankan secara lokal

1. Klon repositori dan masuk ke direktori proyek:

   ```bash
   git clone https://github.com/mfarrellramadhan-arch/tour-travel-project.git
   cd tour-travel-project
   ```

2. Pasang dependensi:

   ```bash
   npm ci
   ```

3. Jalankan server pengembangan:

   ```bash
   npm run dev
   ```

4. Buka alamat yang ditampilkan Vite di terminal. Secara default, server menggunakan port `3000`.

## Perintah yang tersedia

| Perintah | Kegunaan |
| --- | --- |
| `npm run dev` | Menjalankan server pengembangan Vite pada port `3000`. |
| `npm run build` | Membuat build produksi di direktori `dist/`. |
| `npm run preview` | Menjalankan pratinjau lokal dari build produksi. Jalankan `npm run build` terlebih dahulu. |
| `npm run lint` | Memeriksa tipe TypeScript dengan `tsc --noEmit`. |

## Struktur proyek

```text
.
├── public/                 # Aset statis
├── src/
│   ├── components/         # Komponen antarmuka dan modal
│   ├── data/               # Data armada dan paket wisata
│   ├── App.tsx             # Komposisi halaman dan state utama
│   ├── index.css           # Gaya global
│   └── main.tsx            # Titik masuk aplikasi
├── index.html              # Dokumen HTML utama
└── package.json            # Dependensi dan perintah proyek
```

## Panduan kontribusi

Kontribusi perbaikan bug, penyempurnaan antarmuka, dan dokumentasi sangat dihargai.

1. Buat branch untuk perubahan:

   ```bash
   git switch -c feat/deskripsi-perubahan
   ```

2. Buat perubahan dengan cakupan yang jelas dan ikuti pola komponen serta penamaan yang sudah digunakan.
3. Jalankan pemeriksaan tipe dan build:

   ```bash
   npm run lint
   npm run build
   ```

4. Pastikan perubahan yang diajukan tidak menyertakan rahasia, kunci API, atau file hasil build.
5. Kirim pull request dengan ringkasan perubahan dan hasil pemeriksaan.

## Konfigurasi

Tidak diperlukan konfigurasi environment untuk menjalankan antarmuka saat ini.
