const { DataTypes } = require("sequelize");
const db = require("../../database/connection").sequelize;
const user = db.define(
  "user",
  {
    nama_depan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nama_belakang: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    umur: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hobi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ttl: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kecamatan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kota_kabupaten: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    freezeTableName: true,
  }
);

async function findUserForLogin(nama, pw) {
  return await user.findOne({
    where: {
      nama_depan: nama,
      password: pw,
    },
  });
}
async function insertNewUser(arr) {
  return await user.create({
    nama_depan: arr["nama_depan"],
    nama_belakang: arr["nama_belakang"],
    umur: arr["umur"],
    gender: arr["gender"],
    hobi: arr["hobi"],
    ttl: arr["ttl"],
    alamat: arr["alamat"],
    kecamatan: arr["kecamatan"],
    kota_kabupaten: arr["kota_kabupaten"],
    password: arr["password"],
  });
}

// `sequelize.define` also returns the model
// console.log(Kategori === sequelize.models.Kategori); // true
module.exports = { user, findUserForLogin, insertNewUser };
