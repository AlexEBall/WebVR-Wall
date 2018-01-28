module.exports = function(app){
	const controller = require('./routes/controller');

	app.use('/controller', controller);
	
}

