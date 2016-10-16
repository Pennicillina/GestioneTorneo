angular.module("torneo")
	.controller("adminCtrl", function($scope) {
		
		$scope.addPlayer = function (name) {
			$scope.data.classifica.push({ giocatore: name, punteggio: '0'});
			$scope.data.nome = "";
		}

		$scope.removePlayer = function (player) {
			$scope.data.classifica.splice($scope.data.classifica.indexOf(player), 1);
		}

		$scope.generateTables = function (gameNum) {
			var counter = 0;
			var table = 1;
			for (var i = 0; i < $scope.sortedPlayers.length; i++) {
				counter++;
				$scope.data.partite.push({ partita: gameNum, tavolo: table, 
					giocatore: $scope.sortedPlayers[i]['giocatore'], punti: 0, 
					conclusa: false, score: 0 });
				if (counter == 4) {
					table++;
					counter = 0;
				}
			}
		}

		$scope.generateScore = function (gameNum) {
			var tables = $scope.data.partite.filter(function (obj) {
				return obj.partita == $scope.data.activeGame;
			});

			var game = tables.filter(function (obj) {
				return obj.tavolo == '2';
			});

			game = game.sort(function (a, b) {
				return b.punti - a.punti;
			})

			for (var i = 0; i < game.length; i++) {
				if (i == 0) {
					playerScore(100, game[i]['id']);
				} else {
					playerScore(game[0]['punti'], game[i]['id']);
				}
			}
		}

		var playerScore = function (hScore, id) {
			for (var j = 0; j < $scope.data.partite.length; j++) {
				if ($scope.data.partite[j]['id'] == id) {
					if (hScore == 100) {
						$scope.data.partite[j]['score'] = '100';
					} else {
						var scoreValue = Math.floor($scope.data.partite[j]['punti']/hScore * 100);
						$scope.data.partite[j]['score'] = scoreValue;
					}
				}
			}
		}
		
	}); 