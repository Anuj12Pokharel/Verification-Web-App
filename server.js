
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/verify', (req, res) => {
  const { code } = req.body;

  if (typeof code !== 'string' || code.length !== 6 || code[5] === '7') {
    return res.status(400).json({ error: 'Verification Error' });
  }

  return res.status(200).json({ success: true });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
