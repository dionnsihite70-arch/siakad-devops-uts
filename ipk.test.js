const test = require('node:test');
const assert = require('node:assert');
const { hitungIPK } = require('./ipk');
test('IPK dihitung berdasarkan bobot SKS', () => {
  const data = [{ nama: 'A', sks: 3, nilai: 4 }, { nama: 'B', sks: 2, nilai: 3 }];
  assert.strictEqual(hitungIPK(data), 3.6);
});
