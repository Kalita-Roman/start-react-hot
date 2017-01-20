import path from 'path';
import express from 'express';

var bodyParser = require('body-parser');
var upload = require('multer')();  // for parsing multipart/form-data

const app = express();
const isDev = process.env.NODE_ENV !== 'production';

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('map'));
app.use(express.static('css'));
app.use(express.static('build'));
app.use('/images', express.static('images'));
app.use('/pictures', express.static('pictures'));

if (isDev) {
  require('./dev.js')(app);
  app.get('/bundle.css', function (req, res) { res.sendStatus(200); });
}

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, '..') }, err => { err && console.log(err); });
});

export default app;