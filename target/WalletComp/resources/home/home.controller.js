(function () {
	'use strict';

	angular
		.module('demoApp')
		.controller('homeCtrl', homeCtrl);

	homeCtrl.$inject = ['homeService', '$scope'];

	function homeCtrl(homeService, $scope) {

		var home = this;
		home.obj = {};
		home.temp=" 20 C";
		home.items = [{ id: 1, name: "item 1" }, { id: 2, name: "item 2" }, { id: 3, name: "item 3" }]

		home.submit = function (form) {
			console.log(form.$valid);
			console.log(home.obj);
		}
	}
})();
