'use strict';

/* jshint -W098 */
angular.module('mean.stream').controller('StreamController', ['$scope', 'Global', 'Stream',
  function($scope, Global, Stream) {
    $scope.global = Global;
    $scope.package = {
      name: 'stream'
    };
  }
]);
