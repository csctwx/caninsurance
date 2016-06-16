'use strict';

/**
 * @ngdoc function
 * @name canadaInsuranceApp.controller:SearchCtrl
 * @description
 * # AboutCtrl
 * Controller of the canadaInsuranceApp
 */
angular.module('canadaInsuranceApp')
  .controller('SearchCtrl', function (searchService, insuranceService) {
    this.model = searchService.model;
    this.prices = insuranceService.travelInsurances;
    this.currentAge = 90;
  });
