(function() {
'use strict';

function teamService($http, $q) {
  var team = 'honeybadgers';

  return {
    getTeam: function() {
      return team;
    },
    setTeam: function(teamName) {
      team = teamName;
    },
    getInformation: function(team) {
      var deferred = $q.defer();
      $http.get('assets/data/' + team + '.json')
        .success(function(data) {
          return deferred.resolve(data);
        })
        .error(function() {
          return deferred.reject();
        });

      return deferred.promise;
    }
  };
}

angular.module('mira')
 .factory('teamService', teamService);

teamService.$inject = ['$http', '$q'];
})();
