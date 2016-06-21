'use strict';

/**
 * @ngdoc overview
 * @name canadaInsuranceApp
 * @description
 * # canadaInsuranceApp
 *
 * Main module of the application.
 */
angular
  .module('canadaInsuranceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'formly',
    'formlyBootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/search-prices', {
        templateUrl: 'views/search-prices.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/visitor', {
        templateUrl: 'views/visitor.html',
        controller: 'InsuranceCtrl',
        controllerAs: 'insurance'
      })
      .when('/berkley-jf-royal', {
        templateUrl: 'views/insurances/berkley-jf-royal.html',
        controller: 'InsuranceCtrl',
        controllerAs: 'insurance'
      })
      .when('/tic-jf-optimum', {
        templateUrl: 'views/insurances/tic-jf-optimum.html',
        controller: 'InsuranceCtrl',
        controllerAs: 'insurance'
      })
      .when('/21st-century', {
        templateUrl: 'views/insurances/21st-century.html',
        controller: 'InsuranceCtrl',
        controllerAs: 'insurance'
      })
      .when('/gms', {
        templateUrl: 'views/insurances/gms.html',
        controller: 'InsuranceCtrl',
        controllerAs: 'insurance'
      })
      .when('/rsa', {
        templateUrl: 'views/insurances/rsa.html',
        controller: 'InsuranceCtrl',
        controllerAs: 'insurance'
      })
      .when('/tugo', {
        templateUrl: 'views/insurances/tugo.html',
        controller: 'InsuranceCtrl',
        controllerAs: 'insurance'
      })
      .when('/allianz', {
        templateUrl: 'views/insurances/allianz.html',
        controller: 'InsuranceCtrl',
        controllerAs: 'insurance'
      })
      .when('/manulife', {
        templateUrl: 'views/insurances/manulife.html',
        controller: 'InsuranceCtrl',
        controllerAs: 'insurance'
      })
      .when('/emergency', {
        templateUrl: 'views/emergency.html',
        controller: 'InsuranceCtrl',
        controllerAs: 'insurance'
      })
      .when('/tugo-emergency', {
        templateUrl: 'views/insurances/tugo-emergency.html',
        controller: 'InsuranceCtrl',
        controllerAs: 'insurance'
      })
      .when('/allianz-emergency', {
        templateUrl: 'views/insurances/allianz-emergency.html',
        controller: 'InsuranceCtrl',
        controllerAs: 'insurance'
      })
      .when('/student', {
        templateUrl: 'views/student.html',
        controller: 'InsuranceCtrl',
        controllerAs: 'insurance'
      })
      .when('/jf-elite-student', {
        templateUrl: 'views/insurances/jf-elite-student.html',
        controller: 'InsuranceCtrl',
        controllerAs: 'insurance'
      })
      .when('/rsa-student', {
        templateUrl: 'views/insurances/rsa-student.html',
        controller: 'InsuranceCtrl',
        controllerAs: 'insurance'
      })
      .when('/tugo-student', {
        templateUrl: 'views/insurances/tugo-student.html',
        controller: 'InsuranceCtrl',
        controllerAs: 'insurance'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
