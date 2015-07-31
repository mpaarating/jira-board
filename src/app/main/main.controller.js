(function() {
'use strict';

function MainCtrl($scope, teamService) {
  var vm = this;
  var team = '';
  var storyPointsCalc = function() {
    var storyPoints = 0;

    angular.forEach(vm.awesomeThings, function(thing) {
      storyPoints += thing.storyPoints;
    });
    return storyPoints;
  };

  $scope.$on('changeTeam', function() {
    team = teamService.getTeam();
    teamService.getInformation(team)
    .then(function(data) {
      vm.awesomeThings = data;
      $scope.$parent.storyPoints = storyPointsCalc();
    });
  });
}

angular
  .module('mira')
  .controller('MainCtrl', MainCtrl);
MainCtrl.$inject = ['$scope', 'teamService'];

})();
