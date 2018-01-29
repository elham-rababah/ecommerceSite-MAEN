angular.module('ecommercesite.ProductsController', [])

.controller('ProductsController', function ($scope) {
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
 $scope.getProducts = function (page, total, pageSize) {
 	console.log(page, total, pageSize);
 }
});