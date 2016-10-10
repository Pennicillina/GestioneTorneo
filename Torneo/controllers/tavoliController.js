angular.module("torneo")
	.constant("activeObjectClass", "btn-primary")
	.controller("tavoliCtrl", function ($scope, $filter, activeObjectClass) {

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

		$scope.getActiveTable = function (category) {
			return selectedTable == category ? activeObjectClass : "";
		}

		$scope.getActiveGame = function (category) {
			return selectedGame == category ? activeObjectClass : "";
		}
	});