const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Shopify 앱 기본 테스트 경로 (브라우저에서 확인용)
app.get('/', (req, res) => {
  res.status(200).send('✅ Cuckoo Shopify Shipping App is live!');
});

// Shopify CarrierService API 요청 처리 엔드포인트
app.post('/carrier_service', (req, res) => {
  console.log('✅ POST 요청 도착!');
  const requestBody = req.body;
  console.log(JSON.stringify(requestBody, null, 2)); // 요청 내용 로그 출력

  // 응답할 배송 요금 정보 구성
  const shippingRate = {
    service_name: 'Cuckoo Standard Shipping',
    service_code: 'CUCKOO_STD',
    total_price: 1500, // 1500 cents = $15.00
    currency: 'AUD',
    min_delivery_date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2일 후
    max_delivery_date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString()  // 5일 후
  };

  res.status(200).json({
    rates: [shippingRate]
  });
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
