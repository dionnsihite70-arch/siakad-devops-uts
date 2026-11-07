function hitungIPK(daftarMatkul) {
  if (!Array.isArray(daftarMatkul) || daftarMatkul.length === 0) return 0;
  let totalMutu = 0, totalSks = 0;
  for (const mk of daftarMatkul) {
      if (!(mk.sks > 0) || !(mk.nilai >= 0 && mk.nilai <= 4)) {
     throw new Error('Data tidak valid: ' + mk.nama);
   }
    totalMutu += mk.sks * mk.nilai;
    totalSks += mk.sks;
  }
  return Math.round((totalMutu / totalSks) * 100) / 100;
}
module.exports = { hitungIPK };
