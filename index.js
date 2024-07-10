const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());


app.get('/sum', (req, res) => {
  const a= parseInt(req.query.a);
  const b= parseInt(req.query.b);
  const sum =a+b;
  res.send(sum.toString());
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});