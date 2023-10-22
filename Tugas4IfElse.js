// Variabel untuk menampung pendapatan
let pendapatan = 0;

// Input pendapatan
pendapatan = parseInt(prompt("Masukkan pendapatan hari ini (dalam Rupiah):"));

// Proses perhitungan
let uangJasa = 0;
let komisi = 0;

if (pendapatan <= 200000) {
    uangJasa = 10000;
    komisi = 0.1 * pendapatan;
} else if (pendapatan <= 500000) {
    uangJasa = 20000;
    komisi = 0.15 * pendapatan;
} else {
    uangJasa = 30000;
    komisi = 0.2 * pendapatan;
}

// Hasil perhitungan
let totalKomisi = uangJasa + komisi;

// Menampilkan hasil perhitungan
alert("Total komisi hari ini adalah Rp. " + totalKomisi + ",-");