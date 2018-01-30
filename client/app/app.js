angular.module('ecommercesite', [
  'ngRoute',
  'ecommercesite.ProductsController',
  'bw.paging',
  'ecommercesite.productservice',
  'currencyFormat',
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/products', {
      templateUrl: 'app/products/products.html',
      controller: 'ProductsController'
    })
    .when('/', {
      templateUrl: 'app/products/products.html',
      controller: 'ProductsController'
    })
});