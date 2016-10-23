angular.module("torneo")
	.factory('storeLocal', function($window, $rootScope){
		return {
			setData: function(name, val) {
				$window.localStorage && $window.localStorage.setItem(name, val);
				return this;
			},
			getData: function(name) {
				return $window.localStorage && $window.localStorage.getItem(name);
			},
			deleteData: function(name) {
				return $window.localStorage && $window.localStorage.removeItem(name);
			},
			setObjectData: function(name, val) {
				$window.localStorage && $window.localStorage.setItem(name, JSON.stringify(val));
				return this;
			},
			getObjectData: function(name) {
				return $window.localStorage && JSON.parse($window.localStorage.getItem(name));
			}
		};
	});