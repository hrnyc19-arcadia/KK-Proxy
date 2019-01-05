const express = require('express');
const bodyParser = require('body-parser');
const Path = require('path');
const cors = require('cors');
const proxy = require('http-proxy-middleware');

let corsOptions = {
  'origin': true
}

let app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(function(req, res, next) { 
  res.header("Access-Control-Allow-Origin", "*"); next(); 
});

app.use(express.static(Path.join(__dirname, '../client')));

app.use('/similar-listings', proxy({
  target: 'ec2-3-17-11-240.us-east-2.compute.amazonaws.com'
}))


app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log('connected!')
})