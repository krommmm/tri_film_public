require('dotenv').config();
const usersRoutes = require('./routes/user');
const filmsRoutes = require('./routes/film');
const fichersRoutes = require("./routes/fichier");
const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 

mongoose.set('strictQuery', true);

mongoose
	.connect(
		`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.anqun3y.mongodb.net/`
	)
	.then(() => console.log('Connection à mongoDB réussie ! '))
	.catch(() => console.log('Connexion à mongoDB échouée ! '));

app.use(express.json());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-requested-With, Content, Accept, Content-Type, Authorization'
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET,POST,PUT,DELETE,PATCH,OPTIONS'
	);
	next();
});

app.use(bodyParser.json());
app.use('/api/fichiers',fichersRoutes);
app.use('/api/auth', usersRoutes);
app.use('/api/films', filmsRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
