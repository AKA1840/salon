(function(){
	'use strict';
	angular.module('pages')
	.controller('loginCtrl', function($scope, $state) {

		$scope.login = function() {
			$state.go('main')
		}
	});
})();