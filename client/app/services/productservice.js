angular.module('ecommercesite.productservice', [])

.factory('Products',function($http){

	var getSortProducts = function(params){
		return $http({
			method:'GET',
			url:'/api/products/',
			params:params
		})
		.then(function(resp){
			console.log("resp",resp);
			return resp.data;
		})
	};
	return{
		getSortProducts : getSortProducts,
	};
})
