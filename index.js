const express = require('express');
const cors = require('cors');
const fs = require('fs');
//const https = require('https');
const path = require('path');

const PORT = process.env.PORT || 80
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join('C:\\inetpub\\wwwroot\\gescore_suite_dash\\atenea3\\', 'build')));

/*const corsOptions = {
  origin: 'http://10.167.218.11',
};
// Enable CORS for all routes with the specified options
router.use(cors(corsOptions));*/

app.get("/", (req, res) => {
  console.log("The server has sent an OK response.");
  res.status(200).send('OK');
});

app.get("/hazCosas", (req, res) => {
  console.log("prueba");
});

/*https.createServer({
  cert: fs.readFileSync('VodafoneCert.crt'),
  key: fs.readFileSync('VodafoneCert.key'),
  passphrase: 'Core1234'
}, app).listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}.`);
});*/

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}.`);
});