const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;  // ✅ Render에서는 반드시 이 방식으로 설정

app.use(express.json());

app.post('/carrier_service', (req, res) => {
  console.log('📦 POST 요청 도착!');
  // 여기에 rate response 로직
  res.json({
    rates: [
      {
        service_name: "Cuckoo Standard",
        service_code: "CUCKOO_STD",
        total_price: 1500, // in cents
        currency: "AUD",
        description: "Standard shipping",
        min_delivery_date: new Date(),
        max_delivery_date: new Date(),
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`✅ Rate server running on port ${PORT}`);
});
