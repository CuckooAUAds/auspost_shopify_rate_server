const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(bodyParser.json());

app.post('/carrier_service', (req, res) => {
  const shippingRate = {
    service_name: "Cuckoo Standard Shipping",
    description: "Tracked standard shipping",
    service_code: "CUCKOO_STD",
    currency: "AUD",
    total_price: 1000, // cents → $10.00
    min_delivery_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    max_delivery_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
  };

  res.json({ rates: [shippingRate] });
});

app.listen(PORT, () => {
  console.log(`Rate server running on port ${PORT}`);
});
