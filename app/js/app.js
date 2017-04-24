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
    //  url: '/detail',
    url: '/detail/:idAnimal',//idAnimal es un parametro
    params:{
      idAnimal:{squash:true,value: null}
    },
     template: '<comp-detailview></comp-detailview>'   
    };
    var about ={
      name:'aboutus',
      url:'/aboutus',
      template:'<comp-aboutus></comp-aboutus>'
    };
    var crud ={
      name:'crud',
      url:'/crud',
      template:'<comp-crud></comp-crud>'

    };
    $stateProvider.state(main);
    $stateProvider.state(detail);
    $stateProvider.state(about);
    $stateProvider.state(crud);
    $urlRouterProvider.otherwise('/main');
  }


})(angular);