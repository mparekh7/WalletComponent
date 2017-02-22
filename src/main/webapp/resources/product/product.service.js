(function() {
	'use strict';

	angular.module('demoApp').factory('productService', productService);

	productService.$inject = [ '$http' ];

	function productService($http) {
		var service = {
			getProducts : getProducts
		};

		function getProducts() {
			var promise = $http.get('product/get').success(function(data) {
				return data;
			});
			return promise;
//			$http({
//				method : "GET",
//				url : "product/get"
//			}).success(function(response) {
//				console.log(response);
//				return response;
//			}).error(function(response) {
//				console.log(response);
//				return response;
//			});
			// .then(function mySucces(response) {
			// console.log("1");
			// return response;
			// }, function myError(response) {
			// console.log("1..");
			// return response;
			// });
		}

		return service;

	}

})();