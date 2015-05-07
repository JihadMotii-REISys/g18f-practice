'use strict';


/**
 * @ngdoc function
 * @name frontendApp.controller:OpportunityCtrl
 * @description
 * # OpportunityCtrl
 * Controller of the frontendApp
 */

var app = angular.module('frontendApp');

app
  .controller('OpportunityCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
