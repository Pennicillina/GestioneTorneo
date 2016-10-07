angular.module("torneo")
	.controller("tavoliCtrl", function ($scope, $filter) {

		var selectedTable = null;

		$scope.selectTable = function (newTable) {
			selectedTable = newTable;
		}

		$scope.selectTableFilterFn = function (partita) {
			return selectedTable == null || partita.tavolo == selectedTable;
		}
	});