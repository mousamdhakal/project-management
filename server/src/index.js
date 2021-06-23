require('dotenv').config();

const express = require('express');

let app = express();

app.listen(process.env.PORT, () => {
  console.log('Server running on', process.env.PORT);
});