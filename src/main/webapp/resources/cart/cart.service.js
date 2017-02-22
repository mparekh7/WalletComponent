(function() {
	'use strict';

	angular.module('demoApp').factory('cartService', cartService);

	cartService.$inject = [ '$http' ];

	function cartService($http) {
		var cartItems = [];
		
		var service = {
			getCartItems : getCartItems,
			setCartItems : setCartItems
		};
		
		function getCartItems() {
			return cartItems;
		}
		function setCartItems(items) {
			cartItems = items;
		}
		
		return service;

	}

})();