const express = require("express");
const app = express();

app.use(express.json());

// Endpoint test
app.get("/", (req, res) => {
  res.send("Server aktif 🚀");
});

// Endpoint kirim data (contoh dari ESP32 / app)
app.post("/data", (req, res) => {
  console.log("Data masuk:", req.body);
  res.json({
    status: "success",
    data: req.body
  });
});

// Endpoint ambil data sederhana
app.get("/ping", (req, res) => {
  res.json({
    message: "pong",
    time: new Date()
  });
});

// Port dari Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server jalan di port ${PORT}`);
});
