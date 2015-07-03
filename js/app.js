'use strict';

angular.module("module", []);

angular.module("module").controller("controller", ['$scope', function($scope){

	angular.extend($scope, {
		nota1: "3,30",
		nota2: "10,00",
		nota3: "0,00",
		media: "0,00",
		n1: "0,00"
	});

	$scope.$watch('nota1', function(newValue, oldValue){
		$scope.refresh();
  });

  $scope.$watch('nota2', function(newValue, oldValue){
		$scope.refresh();
  });

  $scope.$watch('nota3', function(newValue, oldValue){
		$scope.refresh();
  });

	$scope.refresh = function(){

		var nota1 = 0;
		var nota2 = 0;
		var nota3 = 0;
		var n1 = 0;
		var media = 0;

		nota1 = parseFloat($scope.nota1.replace(",", ".")) || 0;
		nota2 = parseFloat($scope.nota2.replace(",", ".")) || 0;
		nota3 = parseFloat($scope.nota3.replace(",", ".")) || 0;
		media = ((nota1 * 0.2) + (nota2 * 0.4) + (nota3 * 0.4)).toFixed(2);
		n1 = 12 - parseFloat($scope.media.replace(",", "."));

		if(n1 <= 10 && media < 6){
			$scope.n1 = n1.toFixed(2).toString().replace(".", ",");
		}else{
			$scope.n1 = 0;
		}

		$scope.media = media.toString().replace(".", ",");

	};

}]);
