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
			var game = [];
			for (var i = 0; $scope.data.partite.length; i++) {
				if ($scope.data.partite[i]["partita"] == gameNum) {
					game.push($scope.data.partite[i]);
				}
			}
			for (var j = 1; j <= $scope.tavoli; j++) {
				
			}
			
			for (var i = 0; i <= game.length; i++) {
				if (game[i]["tavolo"] == i) {
					table.push(game[i])
				}
				table = table.sort( function (a,b) {
					return b.punti - a.punti;
				});
				for (var j = 0; j < table.length; j++) {
					if (i == 0) { 
						table[0]["score"] = 100;
					} else {
						table[i]["score"] = Math.floor(table[i]["punti"]/table[0]["punti"]);
					}
				}
			}
		}
		
	}); 