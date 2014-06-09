var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var dareSchema = new Schema({
	toUser: String,

	fromUser: String,

	description: String,
	range: Number,
	choice: Number,
	match: Number
});

module.exports = mongoose.model('Dare', dareSchema);