const express = require('express');
const router = express.Router();
const fichierCtrl = require('../controllers/fichier');

router.get('/', fichierCtrl.lireFichier);
 
module.exports = router;
