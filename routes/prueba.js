const express = require('express');
const router = express.Router();

const cors = require('cors');
const corsOptions = {
  origin: 'https://10.167.218.11'
};
// Enable CORS for all routes with the specified options
router.use(cors(corsOptions));

router.get('/', function (req, res) {
  if (req.query.type === 'hazCosas') {
    console.log("hazCosas");
  }
});