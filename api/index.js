export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      message: "Server aktif 🚀",
      method: "GET"
    });
  }

  if (req.method === "POST") {
    return res.status(200).json({
      message: "Data diterima",
      data: req.body
    });
  }

  res.status(405).json({ message: "Method tidak diizinkan" });
}
