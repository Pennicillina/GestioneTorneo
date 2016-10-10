angular.module("torneo")
	.controller("tavoliCtrl", function ($scope, $filter) {

		var selectedTable = null;
		var selectedGame = null;

		$scope.selectTable = function (newTable) {
			selectedTable = newTable;
		}

		$scope.selectGame = function (newGame) {
			selectedGame = newGame;
		}

		$scope.selectTableFilterFn = function (partita) {
			return partita.tavolo == selectedTable;
		}

		$scope.selectGameFilterFn = function (partita) {
			return partita.partita == selectedGame;
		}

		$scope.selectCurrentFilterFn = function (partita) {
			return partita.tavolo == selectedTable && partita.partita == selectedGame;
		}
	});