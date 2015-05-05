'use strict';

angular.module('mira')
  .controller('MainCtrl', function ($scope, $http, teamService) {
    var team = '';
    var storyPointsCalc = function(){
      var storyPoints = 0;
      angular.forEach($scope.awesomeThings, function(thing) {
        storyPoints+= thing.storyPoints;
      });
      return storyPoints;
    };
    $scope.$on('changeTeam', function(){
      team = teamService.getTeam();
      $http.get('assets/data/' + team + '.json').success(function(data){
        $scope.awesomeThings = data;
        $scope.$parent.storyPoints = storyPointsCalc();
      });
    });


  });
