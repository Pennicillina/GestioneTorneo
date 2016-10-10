angular.module("torneo")
	.controller("torneoCtrl", function ($scope) {

    $scope.data = {
    	partite: [
        { partita: 1, tavolo: 1, giocatore: "Matteo", punti: 23, conclusa: false },
		{ partita: 1, tavolo: 1, giocatore: "Ivo", punti: 34, conclusa: false },
		{ partita: 1, tavolo: 1, giocatore: "Ludo", punti: 18, conclusa: false },
		{ partita: 1, tavolo: 1, giocatore: "Beppe", punti: 9, conclusa: false },
		{ partita: 1, tavolo: 2, giocatore: "Matteo", punti: 56, conclusa: false },
		{ partita: 1, tavolo: 2, giocatore: "Ivo", punti: 32, conclusa: false },
		{ partita: 1, tavolo: 2, giocatore: "Ludo", punti: 1, conclusa: false },
		{ partita: 1, tavolo: 2, giocatore: "Beppe", punti: 17, conclusa: true },
		{ partita: 2, tavolo: 2, giocatore: "Matteo", punti: 6, conclusa: false },
		{ partita: 2, tavolo: 2, giocatore: "Ivo", punti: 22, conclusa: true},
		{ partita: 2, tavolo: 2, giocatore: "Ludo", punti: 71, conclusa: false},
		{ partita: 2, tavolo: 2, giocatore: "Beppe", punti: 57, conclusa: true}],

		classifica: [
		{ giocatore: "Matteo", punteggio: 0 },
		{ giocatore: "Ivo", punteggio: 0 },
		{ giocatore: "Ludo", punteggio: 0 },
		{ giocatore: "Beppe", punteggio: 0 }],

		match: 4,

		tavoli: 4,

		nome: "" 
	};

	function HeaderController($scope, $location) 
	{ 
    	$scope.isActive = function (viewLocation) { 
        	return viewLocation === $location.path();
    	};
	} 

});