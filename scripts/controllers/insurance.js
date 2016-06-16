'use strict';

/**
 * @ngdoc function
 * @name canadaInsuranceApp.controller:InsuranceCtrl
 * @description
 * # ContactCtrl
 * Controller of the canadaInsuranceApp
 */
angular.module('canadaInsuranceApp')
    .controller('InsuranceCtrl', function(insuranceService) {
        this.prices = insuranceService.travelInsurances;
        for (var i = 0; i < this.prices.length; i++) {
          var name = this.prices[i].name;
          this.prices[name] = this.prices[i];
        }        
    });
