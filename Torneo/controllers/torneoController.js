angular.module("torneo")
.controller("torneoCtrl", function ($scope) {

    $scope.data = {
    	partite: [
        { partita: 1, tavolo: 1, giocatore: "Matteo", punti: 23, conclusa: true },
		{ partita: 1, tavolo: 1, giocatore: "Ivo", punti: 34, conclusa: true},
		{ partita: 1, tavolo: 1, giocatore: "Ludo", punti: 18, conclusa: true},
		{ partita: 1, tavolo: 1, giocatore: "Beppe", punti: 9, conclusa: true},
		{ partita: 1, tavolo: 2, giocatore: "Matteo", punti: 56, conclusa: true },
		{ partita: 1, tavolo: 2, giocatore: "Ivo", punti: 32, conclusa: true},
		{ partita: 1, tavolo: 2, giocatore: "Ludo", punti: 1, conclusa: true},
		{ partita: 1, tavolo: 2, giocatore: "Beppe", punti: 17, conclusa: true}],

		classifica: [
		{ giocatore: "Matteo", punteggio: 0 },
		{ giocatore: "Ivo", punteggio: 0 },
		{ giocatore: "Ludo", punteggio: 0 },
		{ giocatore: "Beppe", punteggio: 0 }]
	}; 

});