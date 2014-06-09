var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = Schema({
	Name: String,
	Nickname: String,
	hasGoogle: Boolean,
	hasFacebook: Boolean
});

module.exports = mongoose.model('User', userSchema);