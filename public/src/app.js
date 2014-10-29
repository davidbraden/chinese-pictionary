'use strict';

var app = angular.module('chinese-pictionary', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/login', {
			controller : 'LoginCtrl',
			templateUrl : 'src/views/login.tpl.html'
		})
		.when('/draw', {
			controller : 'DrawCtrl',
			templateUrl : 'src/views/draw.tpl.html'
		})
		.otherwise({redirectTo: '/login'});
}
]);