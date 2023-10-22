switch (pendapatan) {
    case pendapatan <= 200000:
        uangJasa = 10000;
        komisi = 0.1 * pendapatan;
        break;
    case pendapatan <= 500000:
        uangJasa = 20000;
        komisi = 0.15 * pendapatan;
        break;
    default:
        uangJasa = 30000;
        komisi = 0.2 * pendapatan;
        break;
}

let totalKomisi = uangJasa + komisi;
alert("Total komisi hari ini adalah Rp. " + totalKomisi + ",-");