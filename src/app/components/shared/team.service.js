'use strict';

angular.module('mira')
 .service('teamService', function() {
   var team = 'honeybadgers';

   return {
    getTeam: function() {
     return team;
    },
    setTeam: function(teamName){
      team = teamName;
    }
   };
  });