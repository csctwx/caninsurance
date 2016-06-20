'use strict';

/**
 * @ngdoc function
 * @name canadaInsuranceApp.controller:InsuranceCtrl
 * @description
 * # ContactCtrl
 * Controller of the canadaInsuranceApp
 */
angular.module('canadaInsuranceApp')
    .controller('InsuranceCtrl', function(insuranceService, appUtil) {
        var insurance = this;
        this.prices = [];
        util.$scope.insurance = this; 
        if(insuranceService.travelInsurances.length == 0){
          insuranceService.getTravelInsurances.then(function(response){
              insurance.prices = appUtil.fromViews(response.data);
              insuranceService.travelInsurances = insurance.prices; 
              for (var i = 0; i < insurance.prices.length; i++) {
                var name = insurance.prices[i].name;
                insurance.prices[name] = insurance.prices[i];
              }        
            }, function(response){

          }); 
        } 
        else{
          insurance.prices = insuranceService.travelInsurances;
          for (var i = 0; i < insurance.prices.length; i++) {
            var name = insurance.prices[i].name;
            insurance.prices[name] = insurance.prices[i];
          }        
        }             
        
    });
