const express = require('express');
const bodyParser = require('body-parser');
const Path = require('path');


let app = express();
app.use(bodyParser.json());

app.use(express.static(Path.join(__dirname, '../client')));

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log('connected!')
})