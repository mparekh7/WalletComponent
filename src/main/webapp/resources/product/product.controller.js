(function() {
	'use strict';

	angular.module('demoApp').controller('productCtrl', productCtrl);

	productCtrl.$inject = [ 'productService', 'cartService', '$scope',
			'$rootScope', '$location' ];

	function productCtrl(productService, cartService, $scope, $rootScope,
			$location) {

		var ctrl = this;
		ctrl.products = [];
		$rootScope.currentPage = $location.path();
		ctrl.addToCart = function(product) {
			if (product.qty && product.qty != '' && product.qty > 0) {
				var items = cartService.getCartItems();
				if (!items) {
					items = [];
				}
				product.added = true;
				var added = false;
				for (var j = 0; j < items.length; j++) {
					if (items[j].id == product.id) {
						items[j] = angular.copy(product);
						added = true;
					}
				}
				if (!added) {
					items.push(product);
				}
				cartService.setCartItems(items);
				if (!added) {
					alert("Product added to cart successfully")
				} else {
					alert("Product updated in cart")
				}
			}
		}

		function getProducts() {
			productService.getProducts().then(function(data) {
				ctrl.items = cartService.getCartItems();
				ctrl.products = data.data;
				if (ctrl.items.length > 0) {
					angular.forEach(ctrl.products, function(p) {
						angular.forEach(ctrl.items, function(i) {
							if (i.id == p.id) {
								p.qty = i.qty;
								p.added = true;
							}
						})
					})
				}
			});
		}
		getProducts();
	}
})();
