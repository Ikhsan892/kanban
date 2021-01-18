const express = require("express");
const router = express.Router();
const kategori = require("./KategoriModel");

// async function insertName() {
//   const tambah = await kategori.create({ nama_kategori: "Selesai" });
//   // Jane exists in the database now!
//   console.log(tambah instanceof kategori); // true
//   console.log(tambah.nama_kategori); // "Selesai"
// }
// async function deleteAllKategories() {
//   const response = await kategori.findAll({
//     where: {
//       id: 1,
//     },
//   });
//   return response;
// }

router.get("/", function (req, res, next) {
  //   deleteAllKategories().then(function (result) {
  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.write(JSON.stringify(result.length));
  //     res.end();
  //   });
  res.send("kategori");
  //   const hasil = getAllKategories();
});

module.exports = router;
