'use strict'

// Config
const CONFIG = require('./config');

// Dependencies
let express = require('express'),

	// Express instanse, the main application
	app = express();

// Listening on port from configuration file
app.listen(CONFIG.PORT, () => {
	console.log(`Listening on port ${CONFIG.PORT}`);
})