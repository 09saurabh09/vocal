'use strict';

angular.module('mean.stream').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('stream example page', {
      url: '/stream/example',
      templateUrl: 'stream/views/index.html'
    });
  }
]);
