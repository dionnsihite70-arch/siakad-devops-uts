function hitungIPK(daftarMatkul) {
  if (!Array.isArray(daftarMatkul) || daftarMatkul.length === 0) return 0;
  let totalMutu = 0, totalSks = 0;
  for (const mk of daftarMatkul) {
    totalMutu += mk.sks * mk.nilai;
    totalSks += mk.sks;
  }
  return Math.round((totalMutu / totalSks) * 100) / 100;
}
module.exports = { hitungIPK };
