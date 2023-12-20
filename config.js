const Sequelize = require('sequelize');

// Konfigurasi database
const sequelize = new Sequelize('db_fitchange', 'root', 'root123', {
  host: '34.101.60.233', // Ganti dengan host database Anda
  dialect: 'mysql',   // Tipe database (MySQL, PostgreSQL, dll.)

  // Opsional: Define timezone jika Anda ingin menggunakan zona waktu tertentu
  // timezone: '+07:00'  // Misalnya, untuk timezone Indonesia WIB
});

module.exports = sequelize;
