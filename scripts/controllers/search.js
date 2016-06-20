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
    this.model = insuranceService.searchResult;    
  });
