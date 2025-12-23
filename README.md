## **Studi Kasus QA Bug Case Form Penitipan Barang**
Pada saat user mengisi form penitipan dan menekan tombol Ambil Nomor Tiket, sistem berhasil menampilkan halaman hasil.
Namun nomor tiket yang muncul di halaman justru NaN, dan di Google Spreadsheet kolom nomor tiket menampilkan error #NUM!.

## 🐞 Tampilan di Aplikasi
Nomor tiket yang seharusnya berupa angka malah muncul sebagai NaN
Informasi nama dan barang tetap tampil normal
<img width="756" height="460" alt="Screenshot 2025-12-23 073306" src="https://github.com/user-attachments/assets/20ac004a-6075-4b76-a789-a169919cd22b" />

## 🐞 Tampilan di Spreadsheet
Kolom nomor tiket berisi #NUM!
Data nama dan barang tetap masuk
Status transaksi tetap tercatat sebagai Aktif
<img width="728" height="338" alt="Screenshot 2025-12-23 073759" src="https://github.com/user-attachments/assets/4dc79982-c486-4d19-9f08-b81b001297d7" />

## 🐞 Penyebab
Bug disebabkan oleh pengambilan nomor tiket dari kolom Timestamp
menggunakan parseInt(), sehingga menghasilkan nilai NaN.
<img width="774" height="196" alt="Screenshot 2025-12-23 075821" src="https://github.com/user-attachments/assets/6fda3f40-1bad-4289-9852-d6f6b5da62bb" />


## 🔧 Perbaikan
Perbaikan dilakukan pada kode apps script dengan mengambil nomor tiket dari kolom
yang memang berisi data numerik (kolom No Tiket),
bukan dari kolom Timestamp.
<img width="612" height="348" alt="Screenshot 2025-12-23 083815" src="https://github.com/user-attachments/assets/5f9f2d7e-7fda-43be-a0d4-802889eb8e3b" />

Hal ini mencegah nilai NaN dan memastikan nomor tiket
dibuat secara berurutan dan valid.

## ✅ Hasil Setelah Perbaikan
- Nomor tiket tampil dengan benar (contoh: 001 / 1 )
- Data masuk ke spreadsheet sesuai kolom
- Tidak ada lagi NaN atau #NUM!
<img width="544" height="373" alt="Screenshot 2025-12-23 084213" src="https://github.com/user-attachments/assets/32eddb16-dbce-4e94-ac62-495302491793" />
<img width="617" height="286" alt="image" src="https://github.com/user-attachments/assets/f853dd42-35b0-4efb-8446-f46b038d8c83" />

## Demo Aplikasi https://frostlgc.github.io/proyek_testingQA/
## Demo Data Spreadsheets https://docs.google.com/spreadsheets/d/1w8HdgxoHKXI00FUUOMqIYdAaJlIQGjA3EydXE1G-Kog/edit?usp=sharing

