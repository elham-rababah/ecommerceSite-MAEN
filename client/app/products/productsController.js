var ecommercesite = angular.module('ecommercesite.ProductsController', ['dataGrid'])

ecommercesite.controller('ProductsController', function ($scope, myAppFactory) {
  console.log("productsController.j");
  $scope.pagingInfo = {
  	page: 5, 
  	pageSize: 5,
  	total: 50, 
  	textFirst: "first",
  	textLast: "last",
  	textNext: "next",
  	textPrev: "prev",
  	showprevNext: "true",
  	showFirstLast: "true"
  	
  }
  $scope.gridOptions = {
  	data: [{
    "id": "21789-38dyub8xsu6",
    "size": 30,
    "price": 532,
    "face": "( .-. )",
    "date": "Sun Jan 14 2018 21:11:38 GMT+0200 (EET)"
  },
  {
    "id": "35742-p6wiq992cdn",
    "size": 29,
    "price": 143,
    "face": "( .o.)",
    "date": "Sun Jan 28 2018 11:45:48 GMT+0200 (EET)"
  },
  {
    "id": "50894-uw2rvb8lbfo",
    "size": 18,
    "price": 932,
    "face": "( `·´ )",
    "date": "Fri Jan 19 2018 18:46:12 GMT+0200 (EET)"
  },
  {
    "id": "79384-rdur0zyo62",
    "size": 24,
    "price": 680,
    "face": "( ° ͜ ʖ °)",
    "date": "Mon Jan 15 2018 10:28:46 GMT+0200 (EET)"
  },
  {
    "id": "90591-lz9y6wjyie",
    "size": 30,
    "price": 113,
    "face": "( ͡° ͜ʖ ͡°)",
    "date": "Thu Jan 18 2018 04:50:47 GMT+0200 (EET)"
  },
  {
    "id": "99231-q4v2zqalf6",
    "size": 30,
    "price": 764,
    "face": "( ⚆ _ ⚆ )",
    "date": "Wed Jan 24 2018 22:16:51 GMT+0200 (EET)"
  },
  {
    "id": "88326-shtltqpp54",
    "size": 31,
    "price": 805,
    "face": "( ︶︿︶)",
    "date": "Sun Jan 28 2018 20:11:38 GMT+0200 (EET)"
  },
  {
    "id": "90359-yf8f1ri90y",
    "size": 20,
    "price": 437,
    "face": "( ﾟヮﾟ)",
    "date": "Fri Jan 19 2018 06:28:50 GMT+0200 (EET)"
  },
  {
    "id": "89604-jrrqe5z5x0o",
    "size": 29,
    "price": 36,
    "face": "(\\/)(°,,,°)(\\/)",
    "date": "Tue Jan 23 2018 15:54:22 GMT+0200 (EET)"
  },
  {
    "id": "50244-9odisfwxjp4",
    "size": 29,
    "price": 774,
    "face": "(¬_¬)",
    "date": "Tue Jan 23 2018 07:03:15 GMT+0200 (EET)"
  }],
  	urlSync: true
  };

 $scope.getProducts = function (page, total, pageSize) {
 	console.log(page, total, pageSize);
 }

 myAppFactory.getData().then(function (responseData) {
	console.log(responseData.data);
    //$scope.gridOptions.data = responseData.data;
});

})
ecommercesite.factory('myAppFactory', function ($http) {
	return {
        getData: function () {
            return $http({
                method: 'GET',
                url: 'https://angular-data-grid.github.io/demo/data.json'
            });
         }
    }
});

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
      	
		cents.toLocaleString("en-US", {style:"currency", currency:"USD"});
        return symbol + cents;

      } else {
        return cents + symbol;
      }

    }
  }

});