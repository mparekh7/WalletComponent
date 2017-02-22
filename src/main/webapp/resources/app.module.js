(function() {
	'use strict';

	angular.module('demoApp', [ 'ui.router', 'ui.bootstrap' ]).config(
			stateConfig);

	function stateConfig($urlRouterProvider, $stateProvider) {

		$urlRouterProvider.otherwise('/product');

		$stateProvider.state('/product', {
			url : '/product',
			templateUrl : 'resources/product/product.html',

		})
		.state('/cart', {
			url : '/cart',
			templateUrl : 'resources/cart/cart.html',

		});

	}
})();