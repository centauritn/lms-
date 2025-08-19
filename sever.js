import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors()); // cho phép frontend gọi API

const TOKEN = "NHẬP TOKEN CỦA BẠN"; // giữ bí mật

app.post('/get-test', async (req, res) => {
  const { class_id, week } = req.body;
  const response = await fetch(`https://apps.ictu.edu.vn:9087/ionline/api/summary/week-test?class_id=${class_id}&week=${week}`, {
    headers: { 'Authorization': `Bearer ${TOKEN}` }
  });
  const data = await response.json();
  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server chạy tại port ${PORT}`));
