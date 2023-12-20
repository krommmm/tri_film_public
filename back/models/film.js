const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
	name: { type: String, required: true },
	trueName: { type: String, required: true },
	imageUrl: { type: String, required: false },
	genre: { type: String, required: true },
	director: { type: String, require: false },
	year: { type: String, require: false },
	description: { type: String, require: false },
});
module.exports = mongoose.model('Film', filmSchema);
