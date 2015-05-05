'use strict';

angular.module('mira')
  .controller('NavbarCtrl', function ($scope, $rootScope, teamService) {

    $scope.teams = [
      {
        'name': 'Honey Badgers',
        'id': 'honeybadgers',
        'selected': true
      },
      {
        'name': 'BI Reporting',
        'id': 'bireporting',
        'selected': false
      },
      {
        'name': 'Clown Committee',
        'id': 'clowncommittee',
        'selected': false
      }
    ];

    $scope.selectedTeam = {
      'name': 'Honey Badgers',
      'id': 'honeybadgers',
      'selected': true
    };

    $scope.$watch('selectedTeam', function() {
      teamService.setTeam($scope.selectedTeam.id);
      $rootScope.$broadcast('changeTeam');
    });
  });
