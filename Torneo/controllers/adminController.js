angular.module("torneo")
	.controller("adminCtrl", function($scope) {
		
		$scope.addPlayer = function (name) {
			$scope.data.classifica.push({ giocatore: name, punteggio: 0});
			$scope.data.nome = "";
		}

		$scope.removePlayer = function (player) {
			$scope.data.classifica.splice($scope.data.classifica.indexOf(player), 1);
		}

		$scope.generateTables = function (gameNum) {
			var counter = 0;
			var table = 1;
			var sortPlayers = $scope.sortedPlayers;
			for (var i = 0; i < sortPlayers.length; i++) {
				counter++;
				$scope.data.lastId += 1;
				$scope.data.partite.push({ partita: gameNum, tavolo: table, 
					giocatore: sortPlayers[i]['giocatore'], punti: 0, 
					conclusa: false, score: 0 , id: $scope.data.lastId});
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

			for (var i = 1; i < $scope.data.tavoli - 1; i++) {
				loopTables(i, tables);
			}

			tables = $scope.data.partite.filter(function (obj) {
				return obj.partita == $scope.data.activeGame;
			});

			for (var i = 0; i < tables.length; i++) {
				for (var j = 0; j < $scope.data.classifica.length; j++) {
					if (tables[i]['giocatore'] == $scope.data.classifica[j]['giocatore']) {
						$scope.data.classifica[j]['punteggio'] += tables[i]['score'];
					}
				}
			}

			$scope.data.activeGame += 1;

			$scope.sortedPlayers = $scope.data.classifica.sort(function (a,b) {
				return b.punteggio - a.punteggio;
			});
		}

		var loopTables = function(tableNum, tables) {
			var game = tables.filter(function (obj) {
				return obj.tavolo == tableNum;
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
						$scope.data.partite[j]['score'] = 100;
					} else {
						var scoreValue = Math.floor($scope.data.partite[j]['punti']/hScore * 100);
						$scope.data.partite[j]['score'] = scoreValue;
					}
				}
			}
		}
		
	}); 