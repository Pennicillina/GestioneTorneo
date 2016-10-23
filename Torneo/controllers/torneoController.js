angular.module("torneo")
	.controller("torneoCtrl", function ($scope, storeLocal) {

    $scope.data = {
    	
		// esempio partita
		// { partita: 1, tavolo: 1, giocatore: "Nome", punti: 23, conclusa: false, score: 0, id: 1 }

		partite: [],

		// esempio classifica
		// { giocatore: "Nome", punteggio: 0}

		classifica: [],

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

	if(storeLocal.getObjectData('classifica') !== null) {
		$scope.data.classifica = storeLocal.getObjectData('classifica');
	}

	if(storeLocal.getObjectData('partite') !== null) {
		$scope.data.partite = storeLocal.getObjectData('partite');
	}

	if(storeLocal.getData('activeGame') !== null)  {
		$scope.data.activeGame = storeLocal.getData('activeGame');
	}

	$scope.sortedPlayers = $scope.data.classifica.sort(function (a,b) {
		return b.punteggio - a.punteggio;
	});

	$scope.sorted = $scope.data.partite.filter(function (obj) {
		return obj.partita == $scope.data.activeGame;
	});
	
});
