'use strict';

/**
 * @ngdoc function
 * @name canadaInsuranceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the canadaInsuranceApp
 */
angular.module('canadaInsuranceApp')
  .controller('MainCtrl', function ($location, searchService, insuranceService, appUtil, resource) {
    var main = this;
    this.searchModel = searchService.model;
    this.searchFields =  searchService.fields;
    if(!resource.blogs.length){
      resource.getBlogs.then(function(response){
          resource.blogs = appUtil.transformBlogs(response.data); 
          main.blogs = resource.blogs;

      }, function(response){

      });
    }
    else{
      this.blogs = resource.blogs;
    }
        
    this.searchPrices = function(){
      appUtil.createSearchResult(searchService.model, insuranceService.travelInsurances, insuranceService.searchResult);
      $location.path('/search-prices');
    }

  });
