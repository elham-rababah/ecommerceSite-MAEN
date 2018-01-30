angular.module('ecommercesite.productservice', [])

.factory('Products',function($http){

	var getSortProducts = function(type){
		console.log(type);
		return $http({
			method:'GET',
			url:'/api/sortproducts',
			params: {"type" : type}
		})
		.then(function(resp){
			return resp.data;
		})
	};
	var getProducts = function(data){
		console.log(data);
		return $http({
			method:'GET',
			url:'/api/sortproducts',
			params: data
		})
		.then(function(resp){
			return resp.data;
		})
	};
	return{
		getSortProducts : getSortProducts,
		getProducts: getProducts,
	};
})
