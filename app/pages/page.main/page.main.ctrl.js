(function(){
	'use strict';
	angular.module('pages')
	.controller('mainCtrl', function($scope, $state) {

		$scope.login = function() {
			$state.go('main')
		}
	});
})();