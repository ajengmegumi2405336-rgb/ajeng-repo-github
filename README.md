# Portofolio UI/UX Design - Kelompok 4

Portfolio React + Vite untuk menampilkan project UI/UX kelompok pada kategori industri dan pendidikan.

## Menjalankan di lokal

```bash
npm install
npm run dev
```

## Validasi production

```bash
npm run lint
npm run build
npm run preview
```

## Deploy ke Vercel

1. Push folder `portfolio-ice9-react` ke repository GitHub.
2. Buka [vercel.com](https://vercel.com) dan pilih **Add New Project**.
3. Import repository tersebut.
4. Pastikan **Framework Preset** bernilai `Vite`.
5. Gunakan pengaturan berikut:
	- **Root Directory:** `portfolio-ice9-react` jika repository berisi folder project ini.
	- **Build Command:** `npm run build`
	- **Output Directory:** `dist`
	- **Install Command:** `npm install`
6. Klik **Deploy**.

Project ini tidak membutuhkan environment variable atau konfigurasi server tambahan.
