var express 	= require('express');
var app 		= express();
var bodyParser 	= require('body-parser');
var mongoose 	= require('mongoose');

mongoose.connect('mongodb://localhost:27017/');

app.use(bodyParser());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res) {
	res.json({ message: "You're the best!" });
});

app.use('/api', router);


var Dare = require('./app/models/dare');
var User = require('./app/models/user');

router.route('/dares')
	
	.post(function(req, res) {
		var dare = new Dare();

		console.log(req.body);

		dare.description = req.body.description;
		dare.range 		 = req.body.range;
		dare.choice		 = req.body.choice;
		dare.match 		 = 0;

		dare.save(function(err) {
			if (err) {
				res.send(err);
			}
			res.json({ message: 'Created a dare or something'});
		});
	})

	.get(function(req, res) {
		Dare.find(function(err, dares) {
			if (err) {
				res.send(err);
			}
			res.json(dares);
		})
	});

router.route('/users')
	.post(function(req, res) {
		var user = new User();

	})
	.get(function(req, res) {
		User.find(function(err, users) {

		})
	});

app.listen(port);
console.log('Listening on port ' + port + '...');

