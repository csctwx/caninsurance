'use strict';

/**
 * @ngdoc function
 * @name canadaInsuranceApp.controller:SearchCtrl
 * @description
 * # AboutCtrl
 * Controller of the canadaInsuranceApp
 */
angular.module('canadaInsuranceApp')
  .controller('SearchCtrl', function (searchService) {
    this.model = searchService.model;
    this.currentAge = 90;
  });
