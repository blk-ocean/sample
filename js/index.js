



var myapp = angular
              .module("MyApp",['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
              .controller("AppCtrl",function($scope) {
                
      this.items = [];
        for (var i = 0; i < 1000; i++) {
          this.items.push(i);
        }
        
      
      // set the default amount of items being displayed
		$scope.limit= 10;

		// loadMore function
		$scope.loadMore = function() {
		  $scope.limit = 100;
		};
      
    });
    



