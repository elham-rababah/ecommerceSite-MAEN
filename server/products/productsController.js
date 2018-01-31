'use strict';
var cool = require('cool-ascii-faces')

module.exports = {
	getSortProducts : function (req,res) {
		console.log("req.query" ,req.query);
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
				"size" : Math.floor((Math.random() * 30) + 1),
				"price": Math.floor((Math.random() * 30) + 1),
				"data" : Date()
			}
		});	
		//sotr data 
		if (req.query.sortBy){
			if (req.query.sortBy == 'size') {
				products.sort(function (a,b){
					return a.size - b.size;
				});

			} else if (req.query.sortBy == 'price') {
				products.sort(function (a,b){
					return a.price - b.price;
				});

			}
		}
		var x = (currentPage-1)*pagesize;
		products = products.slice(x,5+x);
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