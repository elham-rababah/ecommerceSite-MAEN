angular.module('ecommercesite', [
  'ngRoute',
  'ecommercesite.ProductsController'
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