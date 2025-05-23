const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // ✅ Render에서는 반드시 이렇게 지정

app.use(express.json());

// Carrier Service Endpoint
app.post('/carrier_service', (req, res) => {
  console.log('📦 POST 요청 도착!');

  res.json({
    rates: [
      {
        service_name: 'Cuckoo Standard',
        service_code: 'CUCKOO_STD',
        total_price: 1500, // 가격: 센트 단위 (15.00 AUD)
        currency: 'AUD',
        description: 'Standard shipping',
        min_delivery_date: new Date(),
        max_delivery_date: new Date()
      }
    ]
  });
});

// 에러 핸들링 미들웨어 (항상 맨 마지막에 위치)
app.use((err, req, res, next) => {
  console.error('❌ 서버 내부 에러:', err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`✅ Rate server running on port ${PORT}`);
});
