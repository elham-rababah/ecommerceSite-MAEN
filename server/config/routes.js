'use strict';

var productsController = require('../products/productsController.js');

module.exports = function(app){
	app.get("/api/getproducts/",productsController.getProducts)
	app.get("/api/sortproducts/",productsController.getSortProducts)
}