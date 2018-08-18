const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient

// Add out API URL
const url = "Add our API URL here!";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// The index controller loads all required
// controllers for the project.
app.use(require('./controllers/index'));
app.use(express.static('public'));

MongoClient.connect('mongodb://localhost:27017', function(err, client){
	if(err){
		console.log(err);
		return;
	}
	const db = client.db('pirates');
	app.set("db", db);
	app.listen(process.env.PORT || 3001, function () {
		console.log('App running on port ' + this.address().port);
	});
});
