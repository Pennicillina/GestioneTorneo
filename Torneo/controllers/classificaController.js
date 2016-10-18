angular.module("torneo")
	.controller("scoreCtrl", function ($scope) {

		$scope.rankingCols = function() {
			var results = [];

			results.push("Giocatore");

			// for (var i = 1; i < $scope.data.activeGame + 1; i++) {
			// 	var colTitle = "Partita " + $scope.data.activeGame;
			// 	results.push(colTitle); 
			// }

			return results;			
		}
	});