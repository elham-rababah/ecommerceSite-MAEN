angular.module('ecommercesite.productservice', [])

.factory('Products',function($http){

	var getSortProducts = function(type,page){
		return $http({
			method:'GET',
			url:'/api/sortproducts/',
			params:{
				"sortBy" :type,
				"page" :page,
			}
		})
		.then(function(resp){
			console.log("resp",resp);
			return resp.data;
		})
	};
	var getProducts = function(data){
		console.log()
		console.log(data);
		return $http({
			method:'GET',
			url:'/api/getproducts/',
			params:data
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
