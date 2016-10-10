angular.module("torneo")
	.controller("adminCtrl", function($scope) {
		
		$scope.addPlayer = function (name) {
			$scope.data.classifica.push({ giocatore: name, punteggio: '0'});
			$scope.data.nome = "";
		}

		$scope.removePlayer = function (player) {
			$scope.data.classifica.splice($scope.data.classifica.indexOf(player), 1);
		}
		
	}); 