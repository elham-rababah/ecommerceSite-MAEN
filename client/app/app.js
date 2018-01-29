angular.module('ecommercesite', [
  'ngRoute',
  'ecommercesite.ProductsController',
  'bw.paging',
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