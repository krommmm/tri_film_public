const fs = require('fs');
const path = require('path');
const dossierPath = './films';

exports.lireFichier = (req, res, next) => {
	fs.readdir(dossierPath, (err, fichiers) => {
		if (err) {
			console.error('Erreur de lecture du dossier :', err);
			res.status(500).json({ erreur: 'Erreur de lecture du dossier' });
			return;
		}

		// renvoie les fichier dans le front
		res.status(200).json({ fichiers });
	});
};



