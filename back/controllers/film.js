const fs = require('fs');
const Film = require('../models/film');

exports.readAll = (req, res, next) => {
	Film.find()
		.then((film) => res.status(200).json(film))
		.catch((err) => res.status(400).json({ error: err }));
};

exports.readOne = (req, res, next) => {
	Film.findOne({ _id: req.params.id })
		.then((film) => res.status(200).json(film))
		.catch((err) => res.status(400).json({ error: err }));
};

exports.createOne = (req, res, next) => {
	// console.log(req.body);
	// console.log(req.file);
	const filmObject = req.file
		? {
				...req.body,
				imageUrl: req.file.filename,
		  }
		: { ...req.body };
	const film = new Film({
		...filmObject,
	});
	film.save()
		.then(() => res.status(201).json({ msg: "fiche créée" }))
		.catch((err)=>{
			console.error(err);
			res.status(400).json({err});
		})
};

exports.modifyOne = (req, res, next) => {
	const objectFilm = { ...req.body, imageUrl: req.file.filename };
	Film.findOne({ _id: req.params.id })
		.then((film) => {
			if (req.file.filename !== film.imageUrl) {
				fs.unlink(`images/${film.imageUrl}`, () => {
					Film.updateOne(
						{ _id: req.params.id },
						{ ...objectFilm, _id: req.params.id }
					)
						.then(() =>
							res.status(200).json({ msg: 'image modifié' })
						)
						.catch((err) => res.status(400).json({ err }));
				});
			}
		})
		.catch((err) => res.status(400).json({ error: err }));
};

exports.deleteOne = (req, res, next) => {
	Film.findOne({ _id: req.params.id }).then((film) => {
	
		
			fs.unlink(`images/${film.imageUrl}`, () => {
				film.deleteOne({ _id: req.params.id })
					.then(() =>
						res.status(200).json({ msg: 'Fiche du film supprimée' })
					)
					.catch((err) => res.status(400).json({ error: err }));
			});
		
	});
};
