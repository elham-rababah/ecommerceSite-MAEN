'use strict';
var cool = require('cool-ascii-faces')

module.exports = {
	getSortProducts : function (req,res) {
		console.log("req.query" ,req.query);
		console.log(cool.faces);
		var dataSize =  cool.faces.length;
		console.log(dataSize);
		var pagesize = 5;
		var totalpages =  Math.ceil(dataSize / pagesize);
		console.log(req.query.page,"req.query.page");
		var currentPage = req.query.page;

		//create the prices and size and date
		var products  = cool.faces.map (function(face) {
			return  {
				"face" : face,
				"size" : Math.floor((Math.random() * 100) + 1),
				"price": Math.floor((Math.random() * 100) + 1),
				"data" : Date()
			}
		});	

		var data = {
			maxPage :totalpages,
			products :products,
			page: currentPage,
		}
		res.status(200).send(data);
		
	},
	getProducts : function (req,res) {
		console.log("req.query" ,req.query);
	}
}