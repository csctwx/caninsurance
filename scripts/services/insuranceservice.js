'use strict';

/**
 * @ngdoc service
 * @name canadaInsuranceApp.insuranceService
 * @description
 * # resource
 * Service in the canadaInsuranceApp.
 */
angular.module('canadaInsuranceApp')
    .service('insuranceService', function($http, resource, appUtil) {                
        var travelInsurances = [];        
        var getTravelInsurances = $http.get(resource.travelInsurancesUrl);
        var searchResult = {
          'currentAge':43,
          'effectiveAge':43,
          'amount':25000,
          'totalDays':186,
          'allPrices':[]          
        };
             
        return {            
            travelInsurances: travelInsurances,
            searchResult: searchResult,
            getTravelInsurances: getTravelInsurances            
        };
    });
