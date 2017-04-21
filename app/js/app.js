'use strict';

(function (angular) {
  /* Declaramos el módulo */
  angular.module('app', ['ui.router']);

  angular.module('app').config(['$stateProvider', '$urlRouterProvider', appConfig]);

  function appConfig($stateProvider, $urlRouterProvider) {
    var main = {
      name: 'main',
      url: '/main',
      template: '<comp-mainview></comp-mainview>'
    };
    var detail = {
      name: 'detail',
      url: '/detail',
     template: '<comp-detailview></comp-detailview>'   
    };
    var about ={
      name:'aboutus',
      url:'/aboutus',
      template:'<p>sobre nosotros</p>'
    }
    $stateProvider.state(main);
    $stateProvider.state(detail);
    $stateProvider.state(about);
    $urlRouterProvider.otherwise('/main');
  }


})(angular);