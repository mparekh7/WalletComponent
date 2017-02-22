(function() {
	'use strict';

	angular.module('demoApp').controller('cartCtrl', cartCtrl);

	cartCtrl.$inject = [ '$scope', 'cartService', '$rootScope', '$location' ];

	function cartCtrl($scope, cartService, $rootScope, $location) {

		var ctrl = this;
		ctrl.items = [];
		$rootScope.currentPage = $location.path();

		ctrl.removeProduct = function(product, index) {
			ctrl.items.splice(index, 1);
			cartService.setCartItems(ctrl.items);
		}

		function getItems() {
			ctrl.items = cartService.getCartItems();
		}
		getItems();
	}
})();
