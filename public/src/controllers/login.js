angular.module('chinese-pictionary').controller('LoginCtrl', ['$scope', '$location', function($scope, $location) {

	$scope.username = '';
	$scope.password = '';

	$scope.login = function() {
		$location.path( "/draw" );
	}
}]);