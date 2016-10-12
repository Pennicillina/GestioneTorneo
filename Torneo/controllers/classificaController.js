angular.module("torneo")
	.controller("scoreCtrl", function ($scope) {

		$scope.generateTables = function (gameNum) {
			var counter = 0;
			var table = 1;
			for (var i = 0; i < $scope.sortedPlayers; i++) {
				counter++;
				$scope.data.partite.push({ partita: gameNum, 
					tavolo: table, giocatore: $scope.sortedPlayers["giocatore"], punti: 0, conclusa: false});
				if (counter == 4) {
					table++;
					counter = 0;
				}
			}
		}
	});