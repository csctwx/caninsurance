'use strict';

/**
 * @ngdoc function
 * @name canadaInsuranceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the canadaInsuranceApp
 */
angular.module('canadaInsuranceApp')
  .controller('MainCtrl', function ($location, searchService, insuranceService, appUtil) {
    var main = this;
    this.searchModel = searchService.model;
    this.searchFields =  searchService.fields;
    
    this.searchPrices = function(){
      appUtil.createSearchResult(searchService.model, insuranceService.travelInsurances, insuranceService.searchResult);
      $location.path('/search-prices');
    }

  });
