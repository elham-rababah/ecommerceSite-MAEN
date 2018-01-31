var ecommercesite = angular.module('ecommercesite.ProductsController', ['dataGrid'])

ecommercesite.controller('ProductsController', function ($scope, Products) {
	console.log("productsController.j");
	$scope.pagingInfo = {
		page: 1, 
		pageSize: 5,
		total: 0, 
		textFirst: "first",
		textLast: "last",
		textNext: "next",
		textPrev: "prev",
		showprevNext: "true",
		showFirstLast: "true"
		
	}
	$scope.gridOptions = {
		data: [],
		urlSync: false
	};



	var getSortProducts= function(page,sortBy) {
		var params = {
			page: page,
			sortBy: sortBy,
		}
		Products.getSortProducts(params)
		.then(function (resData) {
			console .log (resData)
			$scope.gridOptions.data = resData.products;
			$scope.pagingInfo.page = resData.page;
			$scope.pagingInfo.total =  resData.maxPage * $scope.pagingInfo.pageSize;
	 		//Put sorted data in $scope.gridOptions.data = resData.data
	 		//modify the pagination info
		})

	}
	getSortProducts($scope.pagingInfo.page);

	$scope.gridActions = {
		getSortProducts: getSortProducts,
	}

	

	$scope.getProducts = function (page, total, pageSize) {
	 	//console.log(page, total, pageSize);
	 	var pageinfo = {
	 		page: page, 
			pageSize: pageSize,
			total: total,
	 	}
	 	console.log(pageinfo);
	 	Products.getProducts(pageinfo)
	 	.then(function (res){
	 		// console .log (res)
	 		//Put sorted data in $scope.gridOptions.data = res.data
	 		//modify the pagination info  

	 	})
	}
	
})



ecommercesite.filter("customCurrency",function(){
	// Create the return function and set the required parameter name to **input**
	// setup optional parameters for the currency symbol and location (left or right of the amount)
	return function(input, symbol, place) {

		// Ensure that we are working with a number
		if(isNaN(input)) {
			return input;
		} else {
			// Check if optional parameters are passed, if not, use the defaults
			var symbol = symbol || '$';
			var place = place === undefined ? true : place;

			// Perform the operation to set the symbol in the right location
			var cents = input / 100;
			if( place === true) {	
				return symbol + cents;
			} else {
				return cents + symbol;
			}

		}
	}
});


ecommercesite.filter("relativeTime",function(){
	
	return function(date) {
		var oldDate = date;
		var date = new Date(date);

		// Ensure that we are working with a date
		if(! date instanceof Date || isNaN(date.valueOf())) {
			return oldDate;
		} else {
			var today = new Date();
			var timeDiff = Math.abs(today.getTime() - date.getTime());
			var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
			if (diffDays < 3) {
				return "3 days ago";
			} else {
				return oldDate;
			}
		}
	}
});