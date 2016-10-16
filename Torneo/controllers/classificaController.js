angular.module("torneo")
	.controller("scoreCtrl", function ($scope) {

		$scope.rankingHeader = function() {
			var results = [];

			results.push({rows: "Giocatore", cols: Object.keys("Giocatore")});

			results.push({rows: "Giocatore", cols: Object.keys("Giocatore")});

			return results;			
		}
	});