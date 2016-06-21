'use strict';

/**
 * @ngdoc function
 * @name canadaInsuranceApp.controller:BlogCtrl
 * @description
 * # MainCtrl
 * Controller of the canadaInsuranceApp
 */
angular.module('canadaInsuranceApp')
  .controller('BlogCtrl', function ($location, searchService, insuranceService, appUtil, resource) {
    var blog = this;  
    this.index = -1;  

    this.goCurrentBlog = function(index){
      blog.index = index;
      blog.blog = blog.blogs[index];
    }

    this.goList = function(){
      blog.index = -1;      
    }

    if(!resource.blogs.length){
      resource.getBlogs.then(function(response){
          resource.blogs = appUtil.transformBlogs(response.data); 
          blog.blogs = resource.blogs;

      }, function(response){

      });
    }
    else{
      this.blogs = resource.blogs;
    }

    

  });
