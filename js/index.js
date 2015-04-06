var app = angular.module('lyTelApp', []);
app.controller('lyTelController', function($scope, $http) {
$scope.lyList = [];
$scope.lySearch = Object();

$scope.init = function(){
	$http.get('json/mly-8.json').
		success(function(data){
			$scope.lyList = data;
		});
}
$scope.init();
});
