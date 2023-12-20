require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const fs = require('fs');

exports.signUp = (req, res, next) => {
	bcrypt
		.hash(req.body.password, 10)
		.then((hash) => {
			const user = new User({
				email: req.body.email,
				password: hash,
				name: req.body.name,
			});
			user.save()
				.then(() =>
					res.status(201).json({ msg: 'Utilisateur créé ! ' })
				)
				.catch((err) => res.status(400).json({ err }));
		})
		.catch((err) => res.status(500).json({ err }));
};

exports.login = (req, res, next) => {
	User.findOne({ email: req.body.email })
		.then((user) => {
			if (!user) {
				return res
					.status(401)
					.json({ msg: 'paire mail/mdp incorrecte' });
			}
			bcrypt
				.compare(req.body.password, user.password)
				.then((valid) => {
					if (!valid) {
						return res
							.status(401)
							.json({ msg: 'paire mail/mdp incorrecte' });
					}
					res.status(200).json({
						userId: user._id,
						isAdmin: user.isAdmin,
						name: user.name,
						token: jwt.sign(
							{
								userId: user._id,
								isAdmin: user.isAdmin,
								name: user.name,
							},
							`${process.env.SECRET_KEY}`,
							{ expiresIn: '24h' }
						),
					});
				})
				.catch((err) => res.status(500).json({ error: err }));
		})
		.catch((err) => res.status(500).json({ error: err }));
};
