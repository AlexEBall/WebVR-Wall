module.exports = function(app){
	const main = require('./routes/main');

	app.use('/main', main);
}

