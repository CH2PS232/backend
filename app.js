// app.js

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config');
const Data = require('./models');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Handler untuk root path
app.get('/', (req, res) => {
    res.send('Selamat datang di FitChange!');
  });

// Endpoint untuk menambahkan data
app.post('/', async (req, res) => {
  try {
    const { weight, height, age, gender } = req.body;
    const newData = await Data.create({ weight, height, age, gender });
    res.json({ message: 'Data added successfully!', data: newData });
        // Tanggapan sukses dengan pesan khusus
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
});