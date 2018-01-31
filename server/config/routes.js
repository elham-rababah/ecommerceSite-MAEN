'use strict';

var productsController = require('../products/productsController.js');

module.exports = function(app){
	app.get("/api/products/",productsController.getSortProducts)
}