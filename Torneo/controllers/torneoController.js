angular.module("torneo")
	.controller("torneoCtrl", function ($scope) {

    $scope.data = {
    	partito: [
        { partita: 1, tavolo: 1, giocatore: "Matteo", punti: 23, conclusa: false, score: 0, id: 1 },
		{ partita: 1, tavolo: 1, giocatore: "Ivo", punti: 34, conclusa: false, score: 0, id: 2 },
		{ partita: 1, tavolo: 1, giocatore: "Ludo", punti: 18, conclusa: false, score: 0, id: 3 },
		{ partita: 1, tavolo: 1, giocatore: "Beppe", punti: 9, conclusa: false, score: 0, id: 4},
		{ partita: 1, tavolo: 2, giocatore: "Matteo", punti: 56, conclusa: false, score: 0, id: 5 },
		{ partita: 1, tavolo: 2, giocatore: "Ivo", punti: 32, conclusa: false, score: 0, id: 6 },
		{ partita: 1, tavolo: 2, giocatore: "Ludo", punti: 1, conclusa: false, score: 0, id: 7 },
		{ partita: 1, tavolo: 2, giocatore: "Beppe", punti: 17, conclusa: true, score: 0, id: 8 },
		{ partita: 2, tavolo: 2, giocatore: "Matteo", punti: 6, conclusa: false, score: 0, id: 9 },
		{ partita: 2, tavolo: 2, giocatore: "Ivo", punti: 22, conclusa: true, score: 0, id: 10},
		{ partita: 2, tavolo: 2, giocatore: "Ludo", punti: 71, conclusa: false, score: 0, id: 11},
		{ partita: 2, tavolo: 2, giocatore: "Beppe", punti: 57, conclusa: true, score: 0, id: 12}],

		partite: [],

		classifica: [
		{ giocatore: "Matteo", punteggio: 100},
		{ giocatore: "Ivo", punteggio: 20 },
		{ giocatore: "Ludo", punteggio: 40 },
		{ giocatore: "Beppe", punteggio: 5 }],

		match: 4,

		tavoli: 4,

		nome: "",

		activeGame: 1, 

		lastId : 0
	};

	function HeaderController($scope, $location) 
	{ 
    	$scope.isActive = function (viewLocation) { 
        	return viewLocation === $location.path();
    	};
	};

	$scope.sortedPlayers = $scope.data.classifica.sort(function (a,b) {
		return b.punteggio - a.punteggio;
	});

	$scope.sorted = $scope.data.partite.filter(function (obj) {
		return obj.partita == $scope.data.activeGame;
	});

});