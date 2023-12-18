
# MedPoin Backend 

Sumber Repo : [Source](https://github.com/BAMBAROO/med_poin_backend)

## Prasyarat

- Node.js
- npm (Node Package Manager)
- Mysql Server


## Instalasi

1. Clone / download repositori ini ke dalam direktori lokal Anda

```bash
  git clone https://github.com/Mask512/medpoin_backend -b instalation
```

2. Masuk ke direktori lalu install dependensi

```bash
  cd medpoin_backend
  npm install
```

3. Konfigurasi file lingkungan (environment).
  Buat file .env lalu isi sesuai konfigurasi mysql server anda lalu simpan.  
  Contoh :

```bash
  DATABASE_URL="mysql://root:myrootpass@localhost:3306/medpoin"
  SECRET_KEY_ACCESS=secret
  SECRET_KEY_REFRESH=secret
  SUPERADMIN_ID=admin
  SUPERADMIN_PASS=pass
```
4. Sync Database Dan Server

  _tunggu hingga selesai_  
  
```bash
  npx prisma migrate dev
  npx prisma generate
```

_Catatan untuk pengguna xampp :_  
    - Untuk pengguna xampp yang mengalami error file too large bisa ubah koknfigurasi pada my.ini tambahkan max_allowed_packet atau disable menggunakan #    
  
Setelah selesai jalankan 

```bash
  npm run start:dev
```

Secara default server berjalan di http://localhost:5000  

## Demo

Berikut Demo Aplikasi .

_Kami deploy aplikasi di private server dengan protokol http menyebabkan service worker dan caching tidak berjalan secara default_

[Live Demo](http://medpoin.sytes.net/)

```
 Username : superadmin
 Password : nimdarepus
 ```


Untuk lebih detail bisa langsung kunjungi [Repository](https://github.com/BAMBAROO/med_poin_backend)
