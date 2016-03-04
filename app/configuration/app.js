(function(){
	'use strict';
	angular.module('salon', ['ui.router', 'ngMaterial', 'pages'])
	.config(function($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/login');

		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'app/pages/page.login/page.login.html',
				controller: 'loginCtrl'
				// data: {
				// 	requireLogin: false
				// }
			})
			.state('main', {
				url: '/main',
				templateUrl: 'app/pages/page.main/page.main.html',
				controller: 'mainCtrl'
			})
	})
	.run(function(){

	});
})();